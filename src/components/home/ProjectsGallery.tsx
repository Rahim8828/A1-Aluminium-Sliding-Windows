'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Aluminium Windows',
    category: 'Aluminium',
    location: 'Andheri West',
    image: '/website-images/projects/aluminium-windows-1.jpg',
  },
  {
    id: 2,
    title: 'Glass Partition Office',
    category: 'Glass',
    location: 'Bandra',
    image: '/website-images/projects/glass-partition-1.jpg',
  },
  {
    id: 3,
    title: 'Safety Netting Installation',
    category: 'Netting',
    location: 'Goregaon',
    image: '/website-images/projects/safety-netting-1.jpg',
  },
  {
    id: 4,
    title: 'Sliding Aluminium Doors',
    category: 'Aluminium',
    location: 'Malad',
    image: '/website-images/projects/aluminium-doors-1.jpg',
  },
  {
    id: 5,
    title: 'Glass Railing Balcony',
    category: 'Glass',
    location: 'Powai',
    image: '/website-images/projects/glass-railing-1.jpg',
  },
  {
    id: 6,
    title: 'Bird Netting Balcony',
    category: 'Netting',
    location: 'Kandivali',
    image: '/website-images/projects/bird-netting-1.jpg',
  },
];

export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Aluminium', 'Glass', 'Netting'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-900">
              Recent Projects
            </h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
              📸 {filteredProjects.length}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Real work from satisfied customers
          </p>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              📸 Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See our quality workmanship in action. Real projects from satisfied customers across Mumbai.
          </p>
        </div>

        {/* Filter Buttons - Mobile Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-4 mb-6 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  filter === category
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Buttons - Desktop */}
        <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-lg hover:scale-105 border-2 border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 border border-gray-100 lg:border-2 lg:border-transparent hover:border-orange-200"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative h-40 lg:h-72 bg-gray-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-3xl">👁️</span>
                    </div>
                    <p className="text-lg font-bold">View Details</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 lg:top-4 lg:left-4">
                  <span className="inline-block px-2 py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-3 lg:p-5 bg-gradient-to-br from-white to-gray-50 group-hover:from-orange-50 group-hover:to-white transition-all duration-500">
                <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 group-hover:text-orange-600 transition-colors">
                  <span className="text-sm lg:text-lg mr-1 lg:mr-2">📍</span>
                  <p className="text-xs lg:text-sm font-medium truncate">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-96">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-4">📍 {selectedProject.location}</p>
                <p className="text-gray-700">
                  Professional installation with quality materials and expert craftsmanship.
                  Contact us for similar projects in your area.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
