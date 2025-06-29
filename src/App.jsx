import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { 
  Globe, 
  GraduationCap, 
  Building2, 
  Zap, 
  Clock, 
  Shield, 
  HeartHandshake, 
  MessageCircle,
  Linkedin,
  Send,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Hotel,
  Stethoscope,
  ShoppingCart,
  Calendar,
  FileText,
  Database
} from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    solutionType: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">021 Labs</span>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved Mobile Spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/src/assets/tech_background_new.jpg)' }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Smart Tech Solutions for Growing Businesses
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              From websites to full-scale systems, 021 Labs empowers you with modern tools to thrive. 
              We deliver custom and ready-to-deploy open-source solutions for SMEs, schools, clinics, hotels, and NGOs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Request a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">90%</div>
                <div className="text-slate-300">Faster Deployment</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-slate-300">Satisfied Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-300">Open Source Focus</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Updated Brand Messaging */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engineering the First Leap
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                021 Labs represents the journey from zero to one - the transformative leap that turns ideas into reality. 
                We are a bootstrapped tech solutions startup dedicated to engineering breakthrough innovations that help 
                businesses across industries streamline their operations and accelerate growth.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our name embodies our mission: facilitating that crucial first leap from concept to implementation. 
                We specialize in serving SMEs, schools, clinics, hotels, and NGOs, particularly in emerging markets, 
                making cutting-edge technology accessible through our agile approach and open-source focus.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Expanded with New Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive tech solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Service 1 - Website Creation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="w-16 h-16 mb-6 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Website Creation & Customization</h3>
                <p className="text-slate-300 mb-6">
                  Custom websites and web applications built with modern technologies. Responsive, fast, and optimized 
                  for your business goals. From simple landing pages to complex web applications, we deliver solutions 
                  that drive results.
                </p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Responsive design for all devices</li>
                  <li>• Modern frameworks and technologies</li>
                  <li>• SEO optimization and performance tuning</li>
                  <li>• Content management systems</li>
                </ul>
                <div className="bg-purple-600/10 border border-purple-600/20 rounded-lg p-4">
                  <p className="text-purple-300 font-semibold">Need a professional website in 5 days?</p>
                  <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">Fast & Modern</div>
                  <div className="text-slate-300">Built with latest technologies for optimal performance</div>
                </div>
              </div>
            </motion.div>

            {/* Service 2 - LMS Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">Moodle LMS</div>
                    <div className="text-slate-300">Complete learning management system deployment</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 mb-6 bg-green-600/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">School Management System (LMS)</h3>
                <p className="text-slate-300 mb-6">
                  Complete learning management system deployment and customization. Perfect for schools, training centers, 
                  and corporate learning. We handle everything from installation to custom branding and feature development.
                </p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Custom branding and themes</li>
                  <li>• Course management and tracking</li>
                  <li>• Student and teacher portals</li>
                  <li>• Integration with existing systems</li>
                </ul>
                <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-4">
                  <p className="text-green-300 font-semibold">Need a school management system in 3 days?</p>
                  <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Service 3 - ERP Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="w-16 h-16 mb-6 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">ERP Deployment</h3>
                <p className="text-slate-300 mb-6">
                  Enterprise resource planning systems to streamline your operations. Includes CRM, HR, POS, and inventory 
                  management solutions. We deploy and customize open-source ERP systems to fit your specific business needs.
                </p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Customer relationship management</li>
                  <li>• Human resources management</li>
                  <li>• Point of sale systems</li>
                  <li>• Inventory and supply chain management</li>
                </ul>
                <div className="bg-purple-600/10 border border-purple-600/20 rounded-lg p-4">
                  <p className="text-purple-300 font-semibold">Ready to streamline your business operations?</p>
                  <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">All-in-One</div>
                  <div className="text-slate-300">Complete business management solution</div>
                </div>
              </div>
            </motion.div>

            {/* Service 4 - Hotel & Restaurant Booking System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">Smart Booking</div>
                    <div className="text-slate-300">Automated reservation and management system</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 mb-6 bg-orange-600/20 rounded-full flex items-center justify-center">
                  <Hotel className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hotel & Restaurant Booking System</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive booking and management solutions for hospitality businesses. From room reservations to 
                  table bookings, our systems handle everything with automated confirmations, payment processing, and 
                  customer management.
                </p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Online booking and reservation system</li>
                  <li>• Payment gateway integration</li>
                  <li>• Customer management and loyalty programs</li>
                  <li>• Inventory and availability tracking</li>
                </ul>
                <div className="bg-orange-600/10 border border-orange-600/20 rounded-lg p-4">
                  <p className="text-orange-300 font-semibold">Want to automate your bookings in 1 week?</p>
                  <Button size="sm" className="mt-2 bg-orange-600 hover:bg-orange-700">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Service 5 - Hospital & Clinic Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="w-16 h-16 mb-6 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hospital & Clinic Management System</h3>
                <p className="text-slate-300 mb-6">
                  Complete healthcare management solutions including patient records, appointment scheduling, billing, 
                  and inventory management. HIPAA-compliant systems designed for healthcare providers of all sizes.
                </p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Electronic health records (EHR)</li>
                  <li>• Appointment scheduling and management</li>
                  <li>• Billing and insurance processing</li>
                  <li>• Pharmacy and inventory management</li>
                </ul>
                <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4">
                  <p className="text-red-300 font-semibold">Need a clinic management system in 5 days?</p>
                  <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">Healthcare Ready</div>
                  <div className="text-slate-300">HIPAA-compliant and secure patient management</div>
                </div>
              </div>
            </motion.div>

            {/* Service 6 - E-commerce Websites */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">Sell Online</div>
                    <div className="text-slate-300">Complete e-commerce solution with payment processing</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 mb-6 bg-cyan-600/20 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Websites</h3>
                <p className="text-slate-300 mb-6">
                  Full-featured online stores with product catalogs, shopping carts, payment processing, and order management. 
                  Built with modern e-commerce platforms and optimized for conversions and user experience.
                </p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Product catalog and inventory management</li>
                  <li>• Secure payment gateway integration</li>
                  <li>• Order tracking and fulfillment</li>
                  <li>• Customer accounts and analytics</li>
                </ul>
                <div className="bg-cyan-600/10 border border-cyan-600/20 rounded-lg p-4">
                  <p className="text-cyan-300 font-semibold">Ready to start selling online in 1 week?</p>
                  <Button size="sm" className="mt-2 bg-cyan-600 hover:bg-cyan-700">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Specialized solutions for diverse sectors across emerging markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { name: 'Schools', icon: GraduationCap, color: 'text-blue-400' },
              { name: 'Clinics', icon: HeartHandshake, color: 'text-red-400' },
              { name: 'Hotels', icon: Building2, color: 'text-green-400' },
              { name: 'NGOs', icon: Shield, color: 'text-purple-400' },
              { name: 'Retail', icon: Star, color: 'text-orange-400' }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-900 rounded-lg p-6 border border-slate-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
                  <industry.icon className={`h-8 w-8 ${industry.color}`} />
                </div>
                <h3 className="font-semibold text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900 border-slate-700 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-white">Education Example</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Deploy Moodle LMS for a private school with custom branding, 
                  course management, and parent-teacher communication features.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg text-white">Healthcare Example</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Implement a complete clinic management system with patient records, 
                  appointment scheduling, and billing integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose 021 Labs?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              What sets us apart in the tech solutions landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Affordable Solutions',
                description: 'Cost-effective tech solutions designed for growing businesses and organizations with budget constraints.',
                color: 'text-yellow-400'
              },
              {
                icon: Clock,
                title: 'Fast Delivery',
                description: 'Rapid deployment and implementation to get your systems up and running quickly.',
                color: 'text-blue-400'
              },
              {
                icon: Shield,
                title: 'Open-Source Focused',
                description: 'Leverage the power of open-source technologies for flexibility, security, and cost savings.',
                color: 'text-green-400'
              },
              {
                icon: HeartHandshake,
                title: 'Ongoing Support',
                description: 'Continuous maintenance and support to ensure your systems run smoothly.',
                color: 'text-red-400'
              },
              {
                icon: Building2,
                title: 'Emerging Markets Expertise',
                description: 'Deep understanding of the unique challenges and opportunities in emerging markets.',
                color: 'text-purple-400'
              },
              {
                icon: CheckCircle,
                title: 'Proven Track Record',
                description: 'Successfully delivered solutions across multiple industries and business sizes.',
                color: 'text-orange-400'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-slate-900 rounded-lg flex items-center justify-center">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Take Action</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already streamlining operations and reducing costs with our advanced tech solutions.
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Schedule Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to transform your business with smart tech solutions? Let's discuss your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-slate-800 border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution-type" className="text-white">Type of Solution</Label>
                  <Select onValueChange={(value) => handleInputChange('solutionType', value)}>
                    <SelectTrigger className="bg-slate-900 border-slate-600 text-white">
                      <SelectValue placeholder="Select the type of solution you need" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-600">
                      <SelectItem value="website">Website Creation</SelectItem>
                      <SelectItem value="lms">School Management System (LMS)</SelectItem>
                      <SelectItem value="erp">ERP Deployment</SelectItem>
                      <SelectItem value="booking">Hotel & Restaurant Booking</SelectItem>
                      <SelectItem value="healthcare">Hospital & Clinic Management</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Website</SelectItem>
                      <SelectItem value="consulting">Tech Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                    className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-700 text-center">
                <p className="text-slate-300 mb-4">Or reach out directly:</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Send className="mr-2 h-4 w-4" />
                    Telegram
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">021 Labs</h3>
            <p className="text-slate-400 mb-2">Engineering the First Leap</p>
            <p className="text-slate-400 mb-6">Smart Tech Solutions for Growing Businesses</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Send className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400 text-sm">
                © 2025 021 Labs. All rights reserved. Made with ❤️ by 021 Labs
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

