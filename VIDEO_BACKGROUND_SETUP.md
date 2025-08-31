# Video Background Setup Guide

## Overview
The hero section now supports video backgrounds with automatic fallback to static images for mobile devices.

## Setup Instructions

### Option 1: Public Folder (Recommended for Production)
1. **Place your video file** in the `public/` folder
2. **Name it**: `hero-video.mp4`
3. **Format**: MP4 with H.264 codec
4. **Resolution**: 1920x1080 or 1280x720
5. **File size**: Keep under 10MB
6. **Content**: Abstract, subtle movements work best

### Option 2: Assets Folder (For Development)
1. **Place your video file** in the `src/assets/` folder
2. **Name it**: `hero-video.mp4`
3. **Update HeroSection.tsx**:
   ```tsx
   import heroVideo from "@/assets/hero-video.mp4";
   
   // Change the source to:
   <source src={heroVideo} type="video/mp4" />
   ```

## Video Requirements

### Technical Specifications
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Frame Rate**: 24-30 fps
- **File Size**: Under 10MB
- **Duration**: 10-30 seconds (loops seamlessly)

### Content Guidelines
- **Abstract patterns** work best
- **Subtle movements** (not distracting)
- **Dark/neutral colors** to maintain text readability
- **Smooth transitions** for seamless looping
- **No text or logos** that could interfere with content

## Features Implemented

### ✅ Desktop Video Background
- Automatic video playback
- Smooth fade-in transition
- Performance optimized with preload
- Poster image while loading

### ✅ Mobile Image Background
- Static image for better mobile performance
- Responsive design
- Maintains visual consistency

### ✅ Fallback System
- Image fallback if video fails to load
- Graceful degradation
- Maintains user experience

### ✅ Performance Optimizations
- Video only loads on desktop (md: breakpoint)
- Lazy loading with fade-in effect
- Poster image for immediate visual feedback

## Testing

### Build and Test
```bash
npm run build
npm run dev
```

### Check Points
1. **Desktop**: Video plays automatically and loops
2. **Mobile**: Shows static image background
3. **Video fails**: Falls back to image gracefully
4. **Performance**: Video loads smoothly without blocking

## Troubleshooting

### Video Not Playing
- Check file format (must be MP4)
- Verify file path is correct
- Ensure video file is not corrupted
- Check browser console for errors

### Performance Issues
- Reduce video resolution
- Compress video file size
- Check video codec compatibility
- Consider using WebM format as alternative

### Mobile Issues
- Video is intentionally disabled on mobile
- This is by design for performance
- Mobile shows static image background

## Customization

### Change Video Source
Update the `<source>` tag in HeroSection.tsx:
```tsx
<source src="/your-video.mp4" type="video/mp4" />
```

### Adjust Video Settings
Modify video attributes in HeroSection.tsx:
```tsx
<video
  autoPlay        // Auto-play on load
  loop            // Loop continuously
  muted           // Muted (required for auto-play)
  playsInline     // Mobile compatibility
  preload="auto"  // Preload video
  // Add more attributes as needed
>
```

### Modify Breakpoints
Change when video shows by updating the CSS classes:
```tsx
// Current: hidden md:block (shows on medium screens and up)
// Change to: hidden lg:block (shows on large screens and up)
<div className="absolute inset-0 hidden lg:block">
```

## Support
If you encounter issues:
1. Check the browser console for errors
2. Verify video file format and size
3. Test with different browsers
4. Ensure video file is accessible
