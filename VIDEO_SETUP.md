# 🎥 Video Background Setup - QUICK START

## 🚨 CURRENT STATUS: Video NOT Working
The video background is currently disabled because you need to add your video file.

## ✅ TO FIX - Follow These Steps:

### Step 1: Add Your Video File
1. **Get your video file** (MP4 format)
2. **Rename it to**: `hero-video.mp4`
3. **Place it in**: `src/assets/` folder

### Step 2: Update the Code
1. **Open**: `src/components/HeroSection.tsx`
2. **Add this import at the top**:
   ```tsx
   import heroVideo from "@/assets/hero-video.mp4";
   ```
3. **Uncomment this line** (remove the `{/*` and `*/}`):
   ```tsx
   <source src={heroVideo} type="video/mp4" />
   ```

### Step 3: Test
1. **Save the file**
2. **Run**: `npm run dev`
3. **Check**: Video should now play on desktop

## 📋 Video Requirements:
- **Format**: MP4
- **Codec**: H.264
- **Resolution**: 1920x1080 or 1280x720
- **Size**: Under 10MB
- **Content**: Abstract, subtle movements

## 🔍 Why It's Not Working Now:
- No video file exists
- Video source is commented out
- Only showing fallback image background

## 🎯 What You'll See After Fixing:
- **Desktop**: Video background with smooth fade-in
- **Mobile**: Static image background (for performance)
- **Video loops** continuously
- **Fallback** to image if video fails
