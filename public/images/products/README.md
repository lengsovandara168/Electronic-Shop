# Product Images Guide

## How to Add Product Images

### Option 1: Use Your Own Images (Recommended for production)

1. **Download or take photos** of your products
2. **Resize images** to 400x400 pixels (square format works best)
3. **Optimize images** - keep file size under 100KB for faster loading
4. **Save images** in the appropriate folders:
   - Phones: `public/images/products/phones/`
   - Computers: `public/images/products/computers/`
   - Accessories: `public/images/products/accessories/`

5. **Name your files** using the product ID format:
   - `phn-iphone-15.jpg`
   - `cmp-macbook-air-m2.jpg`
   - `acc-anker-gan-charger.jpg`

6. **Update products.json** with local paths:
   ```json
   "image": "/images/products/phones/phn-iphone-15.jpg"
   ```

### Option 2: Use Online Images (Current setup)

Currently using Unsplash images which are:
- ✅ Free to use
- ✅ High quality
- ✅ No download needed
- ❌ Might change or become unavailable
- ❌ Generic (not actual product photos)

### Option 3: Use Placeholder Services

For development/testing:
- `https://picsum.photos/400/400` - Random images
- `https://via.placeholder.com/400x400` - Solid color placeholders

### Recommended Image Specifications

- **Size**: 400x400 pixels (1:1 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 100KB
- **Quality**: High resolution for product details
- **Background**: Clean, preferably white or transparent

### Example File Structure

```
public/images/products/
├── phones/
│   ├── phn-iphone-15.jpg
│   ├── phn-galaxy-s24.jpg
│   └── phn-pixel-8.jpg
├── computers/
│   ├── cmp-macbook-air-m2.jpg
│   ├── cmp-rog-strix-g18.jpg
│   └── cmp-thinkpad-x1.jpg
└── accessories/
    ├── acc-anker-gan-charger.jpg
    ├── acc-logitech-mx-master.jpg
    └── acc-sony-wh1000xm5.jpg
```

### Tips for Great Product Images

1. **Consistent lighting** - Use natural light or studio lighting
2. **Multiple angles** - Consider adding hover effects with different views
3. **Show scale** - Include size references when helpful
4. **Clean backgrounds** - Remove distracting elements
5. **Show details** - Highlight key features and ports
6. **Compress images** - Use tools like TinyPNG to reduce file sizes