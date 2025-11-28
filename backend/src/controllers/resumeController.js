import { nanoid } from 'nanoid'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync, readFileSync, writeFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Simple in-memory store for share links (in production, use Redis or database)
const shareLinksPath = join(__dirname, '../storage/share-links.json')

const loadShareLinks = () => {
  try {
    if (existsSync(shareLinksPath)) {
      return JSON.parse(readFileSync(shareLinksPath, 'utf-8'))
    }
  } catch (err) {
    console.error('Error loading share links:', err)
  }
  return {}
}

const saveShareLinks = (links) => {
  try {
    writeFileSync(shareLinksPath, JSON.stringify(links, null, 2))
  } catch (err) {
    console.error('Error saving share links:', err)
  }
}

let shareLinks = loadShareLinks()

// Generate a shareable link for the resume
const generateShareLink = (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`

    // Generate a unique short ID
    const shortId = nanoid(10)

    // Store the share link with metadata
    shareLinks[shortId] = {
      createdAt: new Date().toISOString(),
      clicks: 0,
      referrer: req.get('referer') || 'direct',
    }

    saveShareLinks(shareLinks)

    const shareUrl = `${baseUrl}/api/resume/share/${shortId}`

    res.json({
      success: true,
      shareUrl,
      shortId,
    })
  } catch (error) {
    console.error('Share link generation error:', error)
    res.status(500).json({
      error: 'Failed to generate share link',
    })
  }
}

// Handle shared resume link (redirect to resume or portfolio)
const getSharedResume = (req, res) => {
  try {
    const { id } = req.params
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`

    // Track the click if the share link exists
    if (shareLinks[id]) {
      shareLinks[id].clicks += 1
      shareLinks[id].lastAccessed = new Date().toISOString()
      saveShareLinks(shareLinks)
    }

    // Redirect to the portfolio with resume section focused
    // Or directly serve/redirect to the PDF
    const redirectUrl = `${baseUrl}/#resume`

    res.redirect(302, redirectUrl)
  } catch (error) {
    console.error('Shared resume error:', error)
    res.status(500).json({
      error: 'Failed to process shared link',
    })
  }
}

// Download resume directly
const downloadResume = (req, res) => {
  try {
    const resumePath = join(__dirname, '../../frontend/public/resume.pdf')

    if (!existsSync(resumePath)) {
      return res.status(404).json({
        error: 'Resume file not found',
      })
    }

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="YourName_Resume.pdf"')

    res.sendFile(resumePath)
  } catch (error) {
    console.error('Download resume error:', error)
    res.status(500).json({
      error: 'Failed to download resume',
    })
  }
}

export default {
  generateShareLink,
  getSharedResume,
  downloadResume,
}
