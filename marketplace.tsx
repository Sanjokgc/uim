"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ShoppingCart, Heart, Package, MapPin, Menu, Star, Grid3X3, List, MessageCircle } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "DJI Phantom 2 Vision+",
    price: 599,
    rating: 3.5,
    reviews: 243,
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    id: 2,
    name: "DJI Phantom 4 Multispectral",
    price: 1449,
    rating: 5,
    reviews: 98,
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    id: 3,
    name: "DJI Phantom 4 PRO",
    price: 739,
    rating: 2,
    reviews: 1002,
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    id: 4,
    name: "4 Series — Intelligent Flight Battery (5…",
    price: 186,
    rating: 3.5,
    reviews: 243,
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    id: 5,
    name: "DJI Phantom 3 — Intelligent Flight Bat…",
    price: 98,
    rating: 5,
    reviews: 98,
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    id: 6,
    name: "DJI Phantom 4 PRO",
    price: 739,
    rating: 2,
    reviews: 1002,
    image: "/placeholder.svg?height=250&width=250",
  },
]

const categories = [
  "Best Sellers",
  "New Releases",
  "Books",
  "Computers",
  "Fashion",
  "Health",
  "Pharmacy",
  "Toys & Games",
]

const filterSections = [
  {
    title: "Quadcopter Features",
    options: ["App-Controlled", "Obstacle Avoidance", "Video Downlink Capable", "Wi-Fi"],
  },
  {
    title: "Video Capture Resolution",
    options: ["4K UHD 2160p", "FHD 1080p", "HD 720p"],
  },
  {
    title: "Operator Skill Level",
    options: ["Beginner", "Intermediate", "Expert"],
  },
  {
    title: "Brand",
    options: ["DJI", "Holy Stone", "Potensic", "Ruko", "aovo", "OXOXO", "DEERC"],
  },
]

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : star - 0.5 <= rating
                  ? "fill-yellow-400/50 text-yellow-400"
                  : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">{reviews}</span>
    </div>
  )
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={250}
            height={250}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/80 hover:bg-white">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/80 hover:bg-white">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{product.name}</h3>
          <p className="text-lg font-semibold text-gray-800">${product.price}</p>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
      </CardContent>
    </Card>
  )
}

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-400 rounded" />
                <h1 className="text-lg font-semibold text-gray-800">What a Market!</h1>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <Menu className="w-4 h-4 mr-2" />
                Categories
              </Button>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input placeholder="Search products..." defaultValue="DJI phantom" className="pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Package className="w-4 h-4 mr-2" />
                Orders
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                <Badge className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-1.5 py-0.5">3</Badge>
              </Button>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                California
              </Button>
              {categories.map((category) => (
                <Button key={category} variant="ghost" size="sm" className="text-sm">
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="text-sm">
              Become a seller
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">
              Found 376 results for <span className="text-blue-500">dji phantom</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex border rounded-md">
              <Button variant="ghost" size="icon" className="bg-gray-200">
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-72 space-y-6">
            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-800">Price, $</h3>
              <div className="flex gap-2">
                <Input placeholder="Min" className="flex-1" />
                <Input placeholder="Max" className="flex-1" />
              </div>
            </div>

            {/* Filter Sections */}
            {filterSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-800">{section.title}</h3>
                <div className="space-y-2">
                  {section.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox id={option} />
                      <label htmlFor={option} className="text-sm text-gray-800 cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <Button
        size="icon"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
