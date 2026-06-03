// app/gallery/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

// Google Drive folder configuration
// Replace YOUR_FOLDER_ID with your actual Google Drive folder ID
// To get folder ID: Open your Google Drive folder, the URL will look like:
// https://drive.google.com/drive/folders/XXXXXXXXXXX
// The XXXXXXXXXXX is your folder ID
const GOOGLE_DRIVE_FOLDER_ID = "YOUR_FOLDER_ID";

// Function to get Google Drive image thumbnail URL
const getGoogleDriveThumbnail = (fileId: string) => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
};

// Function to get Google Drive direct image URL
const getGoogleDriveImageUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

// Function to get Google Drive download URL
const getGoogleDriveDownloadUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

// Sample gallery images - Replace these with your actual Google Drive file IDs
// To get file ID: Open the image in Google Drive, right-click → Get link
// The ID is in the URL: https://drive.google.com/file/d/FILE_ID/view
const galleryImages = [
  {
    id: 1,
    fileId: "1ABC123DEF456GHI789",
    title: "Business Summit 2024",
    category: "Events",
    description: "Annual Business Summit with industry leaders"
  },
  {
    id: 2,
    fileId: "2ABC123DEF456GHI789",
    title: "Mentorship Session",
    category: "Workshops",
    description: "One-on-one mentorship with experienced entrepreneurs"
  },
  {
    id: 3,
    fileId: "3ABC123DEF456GHI789",
    title: "Team Building",
    category: "Team",
    description: "Team building retreat and strategic planning"
  },
  {
    id: 4,
    fileId: "4ABC123DEF456GHI789",
    title: "Startup Pitch Day",
    category: "Events",
    description: "Startups presenting their innovative ideas"
  },
  {
    id: 5,
    fileId: "5ABC123DEF456GHI789",
    title: "Award Ceremony",
    category: "Events",
    description: "Recognizing outstanding entrepreneurs"
  },
  {
    id: 6,
    fileId: "6ABC123DEF456GHI789",
    title: "Workshop Session",
    category: "Workshops",
    description: "Hands-on workshop for business growth"
  },
  {
    id: 7,
    fileId: "7ABC123DEF456GHI789",
    title: "Networking Event",
    category: "Events",
    description: "Connecting entrepreneurs and investors"
  },
  {
    id: 8,
    fileId: "8ABC123DEF456GHI789",
    title: "Graduation Ceremony",
    category: "Events",
    description: "Incubation program graduation"
  },
  {
    id: 9,
    fileId: "9ABC123DEF456GHI789",
    title: "Panel Discussion",
    category: "Events",
    description: "Expert panel on industry trends"
  }
];

// Categories for filtering
const categories = ["All", "Events", "Workshops", "Team"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < filteredImages.length) {
      setSelectedImage(filteredImages[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setSelectedImage(filteredImages[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-20">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Our <span className="text-amber-400">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Capturing moments of growth, innovation, and success at ThriveOn events and programs
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(image, index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[4/3]">
                    {/* Image placeholder while loading */}
                    {!loadedImages[image.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    
                    {/* Google Drive Image */}
                    <img
                      src={getGoogleDriveThumbnail(image.fileId)}
                      alt={image.title}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                        loadedImages[image.id] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [image.id]: true }))}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        <p className="text-white/80 text-sm">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Download button */}
            <a
              href={getGoogleDriveDownloadUrl(selectedImage.fileId)}
              download
              className="absolute top-4 right-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-6 h-6" />
            </a>

            {/* Previous button */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next button */}
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh]"
            >
              <img
                src={getGoogleDriveImageUrl(selectedImage.fileId)}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm">{selectedImage.description}</p>
                <p className="text-amber-400 text-xs mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}