export interface Translations {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', id: 'Beranda' },
  'nav.about': { en: 'About Us', id: 'Tentang Kami' },
  'nav.services': { en: 'Services', id: 'Layanan' },
  'nav.portfolio': { en: 'Portfolio', id: 'Portfolio' },
  'nav.contact': { en: 'Contact', id: 'Kontak' },
  'nav.consultation': { en: 'Free Consultation', id: 'Konsultasi Gratis' },

  // Hero Section
  'hero.title': {
    en: 'Integrated Software Solutions for Your Business',
    id: 'Solusi Software Terpadu untuk Masa Depan Bisnis Anda'
  },
  'hero.subtitle': {
    en: 'Future',
    id: 'Masa Depan Bisnis'
  },
  'hero.description': {
    en: 'LDP Digital is your trusted partner in digital transformation. We build ERP systems, custom software, and technology solutions that optimize your business operations.',
    id: 'LDP Digital adalah mitra terpercaya dalam transformasi digital perusahaan. Kami membangun sistem ERP, software custom, dan solusi teknologi yang mengoptimalkan operasional bisnis Anda.'
  },
  'hero.projects': { en: 'Projects Completed', id: 'Proyek Selesai' },
  'hero.clients': { en: 'Satisfied Clients', id: 'Klien Puas' },
  'hero.experience': { en: 'Years Experience', id: 'Tahun Pengalaman' },
  'hero.consultation': { en: 'Free Consultation', id: 'Konsultasi Gratis' },
  'hero.services': { en: 'View Services', id: 'Lihat Layanan' },
  'hero.scroll': { en: 'Scroll to see more', id: 'Scroll untuk melihat lebih' },

  // Services Section
  'services.title': { en: 'Our Featured Services', id: 'Layanan Unggulan Kami' },
  'services.subtitle': { en: 'Leading technology solutions to optimize your business operations', id: 'Solusi teknologi terdepan untuk mengoptimalkan operasional bisnis Anda' },
  'services.erp.title': { en: 'Integrated ERP System', id: 'Sistem ERP Terintegrasi' },
  'services.erp.description': { en: 'Enterprise Resource Planning that connects all aspects of your business in one unified platform.', id: 'Enterprise Resource Planning yang menghubungkan semua aspek bisnis Anda dalam satu platform terpadu.' },
  'services.custom.title': { en: 'Custom Software', id: 'Software Custom' },
  'services.custom.description': { en: 'Custom application development tailored to your unique operational needs.', id: 'Pengembangan aplikasi khusus sesuai kebutuhan unik operasional perusahaan Anda.' },
  'services.consulting.title': { en: 'Digital Consulting', id: 'Konsultasi Digital' },
  'services.consulting.description': { en: 'In-depth analysis of business processes to find optimal technology solutions.', id: 'Analisis mendalam terhadap proses bisnis untuk menemukan solusi teknologi yang optimal.' },
  'services.learn_more': { en: 'Learn More', id: 'Pelajari Lebih Lanjut' },

  // Industries Section
  'industries.title': { en: 'Industries We Serve', id: 'Industri yang Kami Layani' },
  'industries.subtitle': { en: 'Specializing in construction with extensive experience across various sectors', id: 'Spesialisasi dalam konstruksi dengan pengalaman luas di berbagai sektor' },
  'industries.construction.title': { en: 'Construction & Engineering', id: 'Konstruksi & Engineering' },
  'industries.construction.subtitle': { en: 'Our Main Focus', id: 'Fokus Utama Kami' },
  'industries.construction.description': { en: 'With deep experience in the construction industry, we understand the complexity of project management, material procurement, and team coordination.', id: 'Dengan pengalaman mendalam di industri konstruksi, kami memahami kompleksitas manajemen proyek, pengadaan material, dan koordinasi tim.' },
  'industries.manufacturing': { en: 'Manufacturing', id: 'Manufaktur' },
  'industries.retail': { en: 'Retail & E-commerce', id: 'Retail & E-commerce' },
  'industries.healthcare': { en: 'Healthcare', id: 'Healthcare' },
  'industries.education': { en: 'Education', id: 'Pendidikan' },
  'industries.case_study': { en: 'View Case Study', id: 'Lihat Case Study' },

  // Why Choose Us
  'why.title': { en: 'Why Choose LDP Digital?', id: 'Mengapa Memilih LDP Digital?' },
  'why.subtitle': { en: 'Advantages that make us different from others', id: 'Keunggulan yang membuat kami berbeda dari yang lain' },
  'why.expertise': { en: 'Deep Expertise', id: 'Expertise Mendalam' },
  'why.technology': { en: 'Leading Technology', id: 'Teknologi Terdepan' },
  'why.support': { en: 'Continuous Support', id: 'Support Berkelanjutan' },
  'why.roi': { en: 'Proven ROI', id: 'ROI Terbukti' },

  // CTA Section
  'cta.title': { en: 'Ready to Transform Your Business?', id: 'Siap Mentransformasi Bisnis Anda?' },
  'cta.description': { en: 'Consult your company software needs with our expert team. Free and without commitment.', id: 'Konsultasikan kebutuhan software perusahaan Anda dengan tim expert kami. Gratis dan tanpa komitmen.' },
  'cta.consultation': { en: 'Consult Now', id: 'Konsultasi Sekarang' },
  'cta.call': { en: 'Call Directly', id: 'Hubungi Langsung' },

  // About Page
  'about.hero.title': { en: 'About LDP Digital', id: 'Tentang LDP Digital' },
  'about.hero.subtitle': { en: 'Trusted Technology Partner for Digital Transformation', id: 'Mitra Teknologi Terpercaya untuk Transformasi Digital Perusahaan' },
  'about.story.title': { en: 'Our Story', id: 'Cerita Kami' },
  'about.vision.title': { en: 'Our Vision', id: 'Visi Kami' },
  'about.mission.title': { en: 'Our Mission', id: 'Misi Kami' },
  'about.values.title': { en: 'Core Values', id: 'Nilai-Nilai Inti' },
  'about.team.title': { en: 'Our Expert Team', id: 'Tim Expert Kami' },
  'about.cta.title': { en: 'Let\'s Collaborate', id: 'Mari Berkolaborasi' },

  // Footer
  'footer.services': { en: 'Our Services', id: 'Layanan Kami' },
  'footer.industries': { en: 'Industries', id: 'Industri' },
  'footer.contact': { en: 'Contact Info', id: 'Kontak Info' },
  'footer.copyright': { en: 'All rights reserved.', id: 'Semua hak cipta dilindungi.' },
  'footer.privacy': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  'footer.terms': { en: 'Terms & Conditions', id: 'Syarat & Ketentuan' },

  // Portfolio Page
  'portfolio.hero.title': { en: 'Our Portfolio', id: 'Portfolio Kami' },
  'portfolio.hero.subtitle': { en: 'Successful projects that have optimized client business operations', id: 'Proyek-proyek sukses yang telah mengoptimalkan operasional bisnis klien' },
  'portfolio.stats.projects': { en: 'Projects Completed', id: 'Proyek Selesai' },
  'portfolio.stats.clients': { en: 'Active Clients', id: 'Klien Aktif' },
  'portfolio.stats.satisfaction': { en: 'Satisfaction Rate', id: 'Tingkat Kepuasan' },
  'portfolio.stats.efficiency': { en: 'Efficiency Improvement', id: 'Peningkatan Efisiensi' },
  'portfolio.filter.title': { en: 'Featured Projects', id: 'Proyek Terpilih' },
  'portfolio.filter.subtitle': { en: 'Filter by category to see relevant projects', id: 'Filter berdasarkan kategori untuk melihat proyek yang relevan' },
  'portfolio.filter.all': { en: 'All Projects', id: 'Semua Proyek' },
  'portfolio.filter.erp': { en: 'ERP Systems', id: 'Sistem ERP' },
  'portfolio.filter.custom': { en: 'Custom Software', id: 'Software Custom' },
  'portfolio.filter.website': { en: 'Websites', id: 'Website' },
  'portfolio.filter.mobile': { en: 'Mobile Apps', id: 'Mobile App' },
  'portfolio.case.title': { en: 'In-Depth Case Studies', id: 'Case Study Mendalam' },
  'portfolio.case.subtitle': { en: 'Detailed analysis of implementation and achieved results', id: 'Analisis detail implementasi dan hasil yang dicapai' },
  'portfolio.testimonials.title': { en: 'Client Testimonials', id: 'Testimoni Klien' },
  'portfolio.testimonials.subtitle': { en: 'Real experiences from clients who have benefited from our solutions', id: 'Pengalaman nyata klien yang telah merasakan manfaat solusi kami' },
  'portfolio.tech.title': { en: 'Technologies We Use', id: 'Teknologi yang Kami Gunakan' },
  'portfolio.tech.subtitle': { en: 'Modern technology stack to build scalable and maintainable solutions', id: 'Stack teknologi modern untuk membangun solusi yang scalable dan maintainable' },
  'portfolio.cta.title': { en: 'Ready to Start Your Project?', id: 'Siap Memulai Proyek Anda?' },
  'portfolio.cta.description': { en: 'Join our clients who have experienced the benefits of digital transformation. Consult your company software needs now.', id: 'Bergabunglah dengan klien-klien kami yang telah merasakan manfaat transformasi digital. Konsultasikan kebutuhan software perusahaan Anda sekarang juga.' },
  'portfolio.cta.consultation': { en: 'Free Consultation', id: 'Konsultasi Gratis' },
  'portfolio.cta.services': { en: 'View Services', id: 'Lihat Layanan' },

  // Common
  'common.read_more': { en: 'Read More', id: 'Baca Selengkapnya' },
  'common.contact_us': { en: 'Contact Us', id: 'Hubungi Kami' },
  'common.get_started': { en: 'Get Started', id: 'Mulai Sekarang' },

  // Hero floating cards
  'hero.card.erp': { en: 'ERP System', id: 'Sistem ERP' },
  'hero.card.erp_subtitle': { en: 'Integrated Business Solution', id: 'Solusi Bisnis Terintegrasi' },
  'hero.card.custom': { en: 'Custom Software', id: 'Software Custom' },
  'hero.card.custom_subtitle': { en: 'Tailored Solutions', id: 'Solusi Khusus' },
  'hero.card.secure': { en: 'Secure & Reliable', id: 'Aman & Terpercaya' },
  'hero.card.secure_subtitle': { en: 'Enterprise Grade', id: 'Tingkat Enterprise' },

  // Services detailed features
  'services.erp.features.finance': { en: 'Financial Management', id: 'Manajemen Keuangan' },
  'services.erp.features.inventory': { en: 'Inventory & Supply Chain', id: 'Inventory & Supply Chain' },
  'services.erp.features.hr': { en: 'Human Resources', id: 'Human Resources' },
  'services.erp.features.crm': { en: 'Customer Relations', id: 'Customer Relations' },
  
  'services.custom.features.analysis': { en: 'In-depth Needs Analysis', id: 'Analisis Kebutuhan Mendalam' },
  'services.custom.features.ui': { en: 'Modern User Interface', id: 'User Interface Modern' },
  'services.custom.features.integration': { en: 'Existing System Integration', id: 'Integrasi System Existing' },
  'services.custom.features.support': { en: 'Training & Support', id: 'Training & Support' },
  

  // Industries detailed features
  'industries.construction.features.project': { en: 'Project Management System', id: 'Project Management System' },
  'industries.construction.features.material': { en: 'Material & Equipment Tracking', id: 'Material & Equipment Tracking' },
  'industries.construction.features.financial': { en: 'Financial Control & Budgeting', id: 'Financial Control & Budgeting' },
  'industries.construction.features.quality': { en: 'Quality Assurance System', id: 'Quality Assurance System' },
  
  'industries.manufacturing.description': { en: 'Integrated production and quality control systems', id: 'Sistem produksi dan quality control terintegrasi' },
  'industries.retail.description': { en: 'Point of sale and real-time inventory management', id: 'Point of sale dan manajemen inventory real-time' },
  'industries.healthcare.description': { en: 'Hospital and clinic management systems', id: 'Sistem manajemen rumah sakit dan klinik' },
  'industries.education.description': { en: 'Learning management and academic administration', id: 'Learning management dan administrasi akademik' },

  // Why choose us detailed descriptions
  'why.expertise.description': { en: 'Experienced development team with international certifications and deep understanding of construction industry.', id: 'Tim developer berpengalaman dengan sertifikasi internasional dan pemahaman mendalam terhadap industri konstruksi.' },
  'why.technology.description': { en: 'Using latest frameworks and tools to ensure optimal performance and high security.', id: 'Menggunakan framework dan tools terbaru untuk memastikan performa optimal dan keamanan tinggi.' },
  'why.support.description': { en: 'Continuous maintenance and regular updates to ensure systems always run optimally.', id: 'Layanan maintenance dan update berkala untuk memastikan sistem selalu berjalan optimal.' },
  'why.roi.description': { en: 'Proven track record of improving client operational efficiency by up to 40% through business process digitalization.', id: 'Track record meningkatkan efisiensi operasional klien hingga 40% melalui digitalisasi proses bisnis.' },

  // Footer sections
  'footer.company.description': { en: 'Trusted software solution partner for building internal company systems, from company profiles to Enterprise Resource Planning (ERP) and custom software as needed.', id: 'Mitra solusi perangkat lunak terpercaya untuk membangun sistem internal perusahaan, mulai dari profil perusahaan hingga Enterprise Resource Planning (ERP) dan software custom sesuai kebutuhan.' },
  'footer.services.title': { en: 'Our Services', id: 'Layanan Kami' },
  'footer.services.erp': { en: 'ERP Systems', id: 'Sistem ERP' },
  'footer.services.custom': { en: 'Custom Software', id: 'Software Custom' },
  'footer.services.website': { en: 'Website Development', id: 'Pengembangan Website' },
  'footer.services.mobile': { en: 'Mobile Applications', id: 'Aplikasi Mobile' },
  'footer.services.maintenance': { en: 'Maintenance & Support', id: 'Maintenance & Support' },
  
  'footer.industries.title': { en: 'Industries', id: 'Industri' },
  'footer.industries.construction': { en: 'Construction', id: 'Konstruksi' },
  'footer.industries.manufacturing': { en: 'Manufacturing', id: 'Manufaktur' },
  'footer.industries.retail': { en: 'Retail', id: 'Retail' },
  'footer.industries.healthcare': { en: 'Healthcare', id: 'Healthcare' },
  'footer.industries.education': { en: 'Education', id: 'Pendidikan' },
  
  'footer.contact.title': { en: 'Contact Info', id: 'Kontak Info' },
  'footer.contact.location': { en: 'Jakarta, Indonesia', id: 'Jakarta, Indonesia' },
  'footer.contact.phone': { en: '+62 21 XXXX XXXX', id: '+62 21 XXXX XXXX' },
  'footer.contact.email': { en: 'info@ldpdigital.com', id: 'info@ldpdigital.com' },

  // Additional About Page translations
  'about.story.lead': { en: 'LDP Digital (PT. Lentera Duta Persada) was founded with the vision of becoming a leading technology partner in digital transformation of Indonesian companies, especially in the construction and engineering sectors.', id: 'LDP Digital (PT. Lentera Duta Persada) didirikan dengan visi menjadi partner teknologi terdepan dalam transformasi digital perusahaan Indonesia, khususnya di sektor konstruksi dan engineering.' },
  'about.story.description': { en: 'Starting from the real needs of the construction industry for integrated management systems, we develop software solutions that not only meet technical needs, but also understand the operational complexity in the field.', id: 'Berawal dari kebutuhan nyata industri konstruksi akan sistem manajemen yang terintegrasi, kami mengembangkan solusi software yang tidak hanya memenuhi kebutuhan teknis, tetapi juga memahami kompleksitas operasional di lapangan.' },

  // Services Page
  'services.overview.title': { en: 'Leading Technology Solutions', id: 'Solusi Teknologi Terdepan' },
  'services.overview.description': { en: 'We provide various software development services tailored to your business needs', id: 'Kami menyediakan berbagai layanan software development yang disesuaikan dengan kebutuhan bisnis Anda' },

  // Contact Page
  'contact.form.title': { en: 'Free Consultation', id: 'Konsultasi Gratis' },
  'contact.form.description': { en: 'Tell us about your company software needs. Our team will provide the best solution.', id: 'Ceritakan kebutuhan software perusahaan Anda. Tim kami akan memberikan solusi terbaik.' },
  'contact.form.firstName': { en: 'First Name *', id: 'Nama Depan *' },
  'contact.form.lastName': { en: 'Last Name *', id: 'Nama Belakang *' },
  'contact.form.email': { en: 'Email *', id: 'Email *' },
  'contact.form.phone': { en: 'Phone Number', id: 'Nomor Telepon' },
  'contact.form.company': { en: 'Company Name *', id: 'Nama Perusahaan *' },
  'contact.form.industry': { en: 'Industry', id: 'Industri' },
  'contact.form.service': { en: 'Service Needed *', id: 'Layanan yang Dibutuhkan *' },
  'contact.form.message': { en: 'Project Description *', id: 'Deskripsi Proyek *' },
  'contact.form.submit': { en: 'Send Message', id: 'Kirim Pesan' },

  // Common breadcrumb
  'breadcrumb.home': { en: 'Home', id: 'Beranda' },
  'breadcrumb.about': { en: 'About Us', id: 'Tentang Kami' },
  'breadcrumb.services': { en: 'Services', id: 'Layanan' },
  'breadcrumb.portfolio': { en: 'Portfolio', id: 'Portfolio' },
  'breadcrumb.contact': { en: 'Contact', id: 'Kontak' },
  'breadcrumb.sitemap': { en: 'Sitemap', id: 'Sitemap' },
  'breadcrumb.terms': { en: 'Terms & Conditions', id: 'Syarat & Ketentuan' },
  'breadcrumb.privacy': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },

  // About Page - Additional content
  'about.story.experience': { en: 'With over 5 years of experience, we have helped dozens of construction companies increase operational efficiency by up to 40% through implementation of ERP systems and custom software designed specifically for their industry.', id: 'Dengan pengalaman lebih dari 5 tahun, kami telah membantu puluhan perusahaan konstruksi meningkatkan efisiensi operasional hingga 40% melalui implementasi sistem ERP dan software custom yang dirancang khusus untuk industri mereka.' },
  'about.achievement.projects': { en: 'Successful Projects', id: 'Proyek Sukses' },
  'about.achievement.clients': { en: 'Active Clients', id: 'Klien Aktif' },
  'about.vision.description': { en: 'To become a leading technology company that delivers sustainable digital transformation for the construction and engineering industry in Indonesia.', id: 'Menjadi perusahaan teknologi terdepan yang mengantarkan transformasi digital berkelanjutan untuk industri konstruksi dan engineering di Indonesia.' },
  'about.mission.description': { en: 'Developing innovative software solutions that provide real added value to clients through improved operational efficiency and competitive advantage.', id: 'Mengembangkan solusi software inovatif yang memberikan nilai tambah nyata bagi klien melalui peningkatan efisiensi operasional dan competitive advantage.' },
  'about.values.description': { en: 'Fundamental principles that guide every step in serving clients', id: 'Prinsip fundamental yang memandu setiap langkah dalam melayani klien' },
  'about.values.innovation': { en: 'Innovation Excellence', id: 'Innovation Excellence' },
  'about.values.innovation.desc': { en: 'Always adopting cutting-edge technology and seeking innovative solutions for every client business challenge.', id: 'Selalu mengadopsi teknologi terdepan dan mencari solusi inovatif untuk setiap tantangan bisnis klien.' },
  'about.values.partnership': { en: 'Client Partnership', id: 'Client Partnership' },
  'about.values.partnership.desc': { en: 'Building long-term relationships with clients as strategic partners in digital transformation.', id: 'Membangun hubungan jangka panjang dengan klien sebagai partner strategis dalam transformasi digital.' },
  'about.values.quality': { en: 'Quality Assurance', id: 'Quality Assurance' },
  'about.values.quality.desc': { en: 'Commitment to high quality in every aspect of software development and implementation.', id: 'Komitmen terhadap kualitas tinggi dalam setiap aspek pengembangan dan implementasi software.' },
  'about.values.learning': { en: 'Continuous Learning', id: 'Continuous Learning' },
  'about.values.learning.desc': { en: 'Continuous investment in skill and knowledge development of the team to provide the best service.', id: 'Investasi berkelanjutan dalam pengembangan skill dan pengetahuan tim untuk memberikan layanan terbaik.' },
  'about.team.description': { en: 'Experienced professionals with deep expertise in their fields', id: 'Profesional berpengalaman dengan keahlian mendalam di bidangnya' },
  'about.team.architecture': { en: 'Software Architecture Team', id: 'Software Architecture Team' },
  'about.team.architecture.role': { en: 'System Design & Architecture', id: 'System Design & Architecture' },
  'about.team.architecture.desc': { en: 'Designing scalable and maintainable system architecture with 8+ years of experience.', id: 'Merancang arsitektur sistem yang scalable dan maintainable dengan pengalaman 8+ tahun.' },
  'about.team.development': { en: 'Full-Stack Development Team', id: 'Full-Stack Development Team' },
  'about.team.development.role': { en: 'Frontend & Backend Development', id: 'Frontend & Backend Development' },
  'about.team.development.desc': { en: 'Multidisciplinary developer team with expertise in modern web technologies and mobile development.', id: 'Tim developer multidisiplin dengan expertise dalam modern web technologies dan mobile development.' },
  'about.team.business': { en: 'Business Analysis Team', id: 'Business Analysis Team' },
  'about.team.business.role': { en: 'Requirements Analysis & Consulting', id: 'Requirements Analysis & Consulting' },
  'about.team.business.desc': { en: 'Business process analysis specialists with deep understanding of construction and manufacturing industries.', id: 'Spesialis analisis proses bisnis dengan pemahaman mendalam industri konstruksi dan manufacturing.' },
  'about.certifications.title': { en: 'Certifications & Partnerships', id: 'Sertifikasi & Partnership' },
  'about.certifications.description': { en: 'Commitment to industry standards and strategic partnerships', id: 'Komitmen terhadap standar industri dan kemitraan strategis' },
  'about.certifications.tech': { en: 'Technology Stack', id: 'Technology Stack' },
  'about.certifications.quality': { en: 'Quality Standards', id: 'Quality Standards' },
  'about.certifications.partnerships': { en: 'Industry Partnerships', id: 'Industry Partnerships' },
  'about.cta.description': { en: 'Join dozens of companies that have entrusted their digital transformation to LDP Digital. Free consultation to understand your specific needs.', id: 'Bergabunglah dengan puluhan perusahaan yang telah mempercayakan transformasi digital mereka kepada LDP Digital. Konsultasi gratis untuk memahami kebutuhan spesifik Anda.' },

  // Portfolio Page - Stats and content
  'portfolio.stats.projects.desc': { en: 'Various scales and complexity', id: 'Berbagai skala dan kompleksitas' },
  'portfolio.stats.clients.desc': { en: 'From startup to enterprise', id: 'Dari startup hingga enterprise' },
  'portfolio.stats.satisfaction.desc': { en: 'Based on client feedback', id: 'Berdasarkan feedback klien' },
  'portfolio.stats.efficiency.desc': { en: 'Average improvement', id: 'Rata-rata improvement' },

  // Portfolio Projects
  'portfolio.project.erp.construction.title': { en: 'Integrated Construction ERP System', id: 'Sistem ERP Konstruksi Terintegrasi' },
  'portfolio.project.erp.construction.desc': { en: 'Construction project management platform that integrates finance, inventory, and HR in one unified system.', id: 'Platform manajemen proyek konstruksi yang mengintegrasikan keuangan, inventory, dan SDM dalam satu sistem.' },
  'portfolio.project.erp.manufacturing.title': { en: 'Manufacturing ERP & Production Control', id: 'ERP Manufaktur & Production Control' },
  'portfolio.project.erp.manufacturing.desc': { en: 'Real-time production control system with material tracking, quality control, and workforce management.', id: 'Sistem kontrol produksi real-time dengan tracking material, quality control, dan manajemen workforce.' },
  'portfolio.project.inventory.title': { en: 'Smart Inventory Management', id: 'Smart Inventory Management' },
  'portfolio.project.inventory.desc': { en: 'Inventory management system with AI prediction for stock optimization and automated reorder system.', id: 'Sistem manajemen inventory dengan AI prediction untuk optimasi stock dan automated reorder system.' },
  'portfolio.project.crm.title': { en: 'Customer Relationship Management', id: 'Customer Relationship Management' },
  'portfolio.project.crm.desc': { en: 'CRM system with lead tracking, sales pipeline, and automated marketing to increase conversion.', id: 'CRM system dengan lead tracking, sales pipeline, dan automated marketing untuk meningkatkan konversi.' },
  'portfolio.project.ecommerce.title': { en: 'B2B E-commerce Platform', id: 'Platform E-commerce B2B' },
  'portfolio.project.ecommerce.desc': { en: 'B2B e-commerce platform with quotation system, bulk ordering, and payment gateway integration.', id: 'Platform e-commerce khusus B2B dengan sistem quotation, bulk ordering, dan integrasi payment gateway.' },
  'portfolio.project.corporate.title': { en: 'Construction Company Website', id: 'Website Perusahaan Konstruksi' },
  'portfolio.project.corporate.desc': { en: 'Corporate website with portfolio showcase, project gallery, and CRM-integrated inquiry system.', id: 'Website corporate dengan portfolio showcase, project gallery, dan sistem inquiry terintegrasi CRM.' },
  'portfolio.project.field.title': { en: 'Field Management Mobile App', id: 'Field Management Mobile App' },
  'portfolio.project.field.desc': { en: 'Mobile application for field management with GPS tracking, photo reporting, and offline capability.', id: 'Aplikasi mobile untuk manajemen lapangan dengan GPS tracking, photo reporting, dan offline capability.' },
  'portfolio.project.logistics.title': { en: 'Logistics & Delivery Tracking', id: 'Logistics & Delivery Tracking' },
  'portfolio.project.logistics.desc': { en: 'Delivery tracking application with real-time GPS, proof of delivery, and customer notification system.', id: 'Aplikasi tracking pengiriman dengan real-time GPS, proof of delivery, dan customer notification system.' },

  // Portfolio Results
  'portfolio.result.efficiency': { en: 'Efficiency Increased', id: 'Efisiensi Meningkat' },
  'portfolio.result.reporting': { en: 'Report Time Reduced', id: 'Waktu Laporan Berkurang' },
  'portfolio.result.waste': { en: 'Waste Reduction', id: 'Waste Reduction' },
  'portfolio.result.faster': { en: 'Faster Reporting', id: 'Faster Reporting' },
  'portfolio.result.cost': { en: 'Cost Reduction', id: 'Cost Reduction' },
  'portfolio.result.accuracy': { en: 'Stock Accuracy', id: 'Stock Accuracy' },
  'portfolio.result.conversion': { en: 'Lead Conversion', id: 'Lead Conversion' },
  'portfolio.result.sales': { en: 'Sales Increase', id: 'Sales Increase' },
  'portfolio.result.growth': { en: 'Online Sales Growth', id: 'Online Sales Growth' },
  'portfolio.result.processing': { en: 'Order Processing Speed', id: 'Order Processing Speed' },
  'portfolio.result.traffic': { en: 'Web Traffic Increase', id: 'Web Traffic Increase' },
  'portfolio.result.quality': { en: 'Lead Quality Improvement', id: 'Lead Quality Improvement' },
  'portfolio.result.delivery': { en: 'Delivery Accuracy', id: 'Delivery Accuracy' },
  'portfolio.result.complaints': { en: 'Customer Complaints Reduced', id: 'Customer Complaints Reduced' },
  'portfolio.result.visibility': { en: 'Real-time Visibility', id: 'Real-time Visibility' },

  // Portfolio Categories
  'portfolio.category.erp': { en: 'ERP System', id: 'ERP System' },
  'portfolio.category.custom': { en: 'Custom Software', id: 'Custom Software' },
  'portfolio.category.ecommerce': { en: 'E-commerce', id: 'E-commerce' },
  'portfolio.category.corporate': { en: 'Corporate Website', id: 'Corporate Website' },
  'portfolio.category.mobile': { en: 'Mobile App', id: 'Mobile App' },

  // Common buttons
  'common.button.detail': { en: 'View Details', id: 'Lihat Detail' },
  'common.button.consultation': { en: 'Free Consultation', id: 'Konsultasi Gratis' },
  'common.button.portfolio': { en: 'View Portfolio', id: 'Lihat Portfolio' },
  'common.button.services': { en: 'View Services', id: 'Lihat Layanan' },

  // Services Page - Additional content (avoiding duplicates)
  'services.erp.badge': { en: 'Featured', id: 'Unggulan' },
  'services.erp.benefits.efficiency': { en: 'Operational efficiency up to 40%', id: 'Efisiensi operasional hingga 40%' },
  'services.erp.benefits.cost': { en: 'Operational cost savings', id: 'Penghematan biaya operasional' },
  'services.erp.benefits.integration': { en: 'Real-time data integration', id: 'Integrasi data real-time' },
  'services.erp.benefits.decision': { en: 'Better decision making', id: 'Pengambilan keputusan lebih baik' },
  'services.erp.industries.title': { en: 'Suitable Industries:', id: 'Industri yang Cocok:' },
  'services.erp.industries.construction': { en: 'Construction & Engineering', id: 'Konstruksi & Engineering' },
  'services.erp.industries.manufacturing': { en: 'Manufacturing & Production', id: 'Manufacturing & Production' },
  'services.erp.industries.trading': { en: 'Trading & Distribution', id: 'Trading & Distribution' },
  'services.erp.industries.services': { en: 'Service Companies', id: 'Perusahaan Jasa' },

  'services.webapp.title': { en: 'Web Application Development', id: 'Pengembangan Aplikasi Web' },
  'services.webapp.description': { en: 'Modern, responsive, and scalable web applications using the latest technologies.', id: 'Aplikasi web modern, responsif, dan scalable menggunakan teknologi terdepan.' },

  'services.mobileapp.title': { en: 'Mobile Application Development', id: 'Pengembangan Aplikasi Mobile' },
  'services.mobileapp.description': { en: 'Native and cross-platform mobile applications for iOS and Android.', id: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android.' },

  'services.itconsult.title': { en: 'IT Consultation & Digital Transformation', id: 'Konsultasi IT & Transformasi Digital' },
  'services.itconsult.description': { en: 'Strategic guidance for your digital transformation journey and technology adoption.', id: 'Panduan strategis untuk perjalanan transformasi digital dan adopsi teknologi Anda.' },

  // Contact form options
  'contact.form.budget': { en: 'Budget Range', id: 'Budget Range' },
  'contact.form.budget.placeholder': { en: 'Select Budget', id: 'Pilih Budget' },
  'contact.form.budget.under50': { en: '< 50 Million', id: '< 50 Juta' },
  'contact.form.budget.50to100': { en: '50 - 100 Million', id: '50 - 100 Juta' },
  'contact.form.budget.100to250': { en: '100 - 250 Million', id: '100 - 250 Juta' },
  'contact.form.budget.250to500': { en: '250 - 500 Million', id: '250 - 500 Juta' },
  'contact.form.budget.over500': { en: '> 500 Million', id: '> 500 Juta' },
  'contact.form.services.erp': { en: 'ERP System', id: 'Sistem ERP' },
  'contact.form.services.custom': { en: 'Custom Software', id: 'Software Custom' },
  'contact.form.services.website': { en: 'Website Development', id: 'Website Development' },
  'contact.form.services.mobile': { en: 'Mobile App', id: 'Mobile App' },
  'contact.form.services.consulting': { en: 'Digital Consulting', id: 'Konsultasi Digital' },
  'contact.form.services.maintenance': { en: 'Maintenance & Support', id: 'Maintenance & Support' },
  'contact.form.message.placeholder': { en: 'Describe the business challenges you want to solve, required features, or other questions...', id: 'Jelaskan tantangan bisnis yang ingin diselesaikan, fitur yang dibutuhkan, atau pertanyaan lainnya...' },
  'contact.form.privacy': { en: 'I agree with the Privacy Policy and Terms & Conditions', id: 'Saya setuju dengan Kebijakan Privasi dan Syarat & Ketentuan' },
  'contact.form.privacy.policy': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  'contact.form.privacy.terms': { en: 'Terms & Conditions', id: 'Syarat & Ketentuan' },
  'contact.form.loading': { en: 'Sending...', id: 'Mengirim...' },


  'services.why.title': { en: 'Why Choose LDP Digital?', id: 'Mengapa Memilih LDP Digital?' },
  'services.why.experience.title': { en: 'Proven Experience', id: 'Pengalaman Terbukti' },
  'services.why.experience.desc': { en: '5+ years serving construction and manufacturing industries', id: '5+ tahun melayani industri konstruksi dan manufacturing' },
  'services.why.team.title': { en: 'Expert Team', id: 'Tim Expert' },
  'services.why.team.desc': { en: 'Certified professionals with deep technical expertise', id: 'Profesional bersertifikat dengan keahlian teknis mendalam' },
  'services.why.approach.title': { en: 'Client-Centric Approach', id: 'Pendekatan Client-Centric' },
  'services.why.approach.desc': { en: 'Solutions tailored to specific business needs', id: 'Solusi yang disesuaikan dengan kebutuhan bisnis spesifik' },
  'services.why.support.title': { en: 'Comprehensive Support', id: 'Dukungan Komprehensif' },
  'services.why.support.desc': { en: 'From consultation to post-implementation support', id: 'Dari konsultasi hingga dukungan pasca-implementasi' },

  // Sitemap page translations
  'sitemap.hero.title': { en: 'Sitemap', id: 'Sitemap' },
  'sitemap.hero.subtitle': { en: 'Complete map of all pages and content on LDP Digital website', id: 'Peta lengkap semua halaman dan konten di website LDP Digital' },
  'sitemap.mainPages.title': { en: 'Main Pages', id: 'Halaman Utama' },
  'sitemap.mainPages.home.title': { en: 'Home', id: 'Beranda' },
  'sitemap.mainPages.home.desc': { en: 'Main page with service overview and company profile', id: 'Halaman utama dengan overview layanan dan company profile' },
  'sitemap.mainPages.about.title': { en: 'About Us', id: 'Tentang Kami' },
  'sitemap.mainPages.about.desc': { en: 'Company history, vision mission, team, and core values', id: 'Sejarah perusahaan, visi misi, tim, dan nilai-nilai inti' },
  'sitemap.mainPages.services.title': { en: 'Services', id: 'Layanan' },
  'sitemap.mainPages.services.desc': { en: 'Complete details of all software development services', id: 'Detail lengkap semua layanan software development' },
  'sitemap.mainPages.portfolio.title': { en: 'Portfolio', id: 'Portfolio' },
  'sitemap.mainPages.portfolio.desc': { en: 'Showcase of completed projects', id: 'Showcase proyek-proyek yang telah diselesaikan' },
  'sitemap.mainPages.contact.title': { en: 'Contact', id: 'Kontak' },
  'sitemap.mainPages.contact.desc': { en: 'Consultation form and complete contact information', id: 'Form konsultasi dan informasi kontak lengkap' },
  'sitemap.servicesDetail.title': { en: 'Service Details', id: 'Layanan Detail' },
  'sitemap.servicesDetail.erp.title': { en: 'ERP System', id: 'Sistem ERP' },
  'sitemap.servicesDetail.erp.desc': { en: 'Integrated Enterprise Resource Planning', id: 'Enterprise Resource Planning terintegrasi' },
  'sitemap.servicesDetail.custom.title': { en: 'Custom Software', id: 'Software Custom' },
  'sitemap.servicesDetail.custom.desc': { en: 'Custom applications according to business needs', id: 'Aplikasi khusus sesuai kebutuhan bisnis' },
  'sitemap.servicesDetail.consulting.title': { en: 'Digital Consulting', id: 'Konsultasi Digital' },
  'sitemap.servicesDetail.consulting.desc': { en: 'Business process analysis and digital transformation', id: 'Analisis proses bisnis dan transformasi digital' },
  'sitemap.servicesDetail.website.title': { en: 'Website Development', id: 'Pengembangan Website' },
  'sitemap.servicesDetail.website.desc': { en: 'Professional websites and e-commerce', id: 'Website profesional dan e-commerce' },
  'sitemap.servicesDetail.mobile.title': { en: 'Mobile Applications', id: 'Aplikasi Mobile' },
  'sitemap.servicesDetail.mobile.desc': { en: 'Mobile apps for iOS and Android', id: 'Mobile apps untuk iOS dan Android' },
  'sitemap.servicesDetail.maintenance.title': { en: 'Maintenance & Support', id: 'Maintenance & Support' },
  'sitemap.servicesDetail.maintenance.desc': { en: 'System maintenance and ongoing technical support', id: 'Pemeliharaan sistem dan dukungan teknis berkelanjutan' },
  'sitemap.industries.title': { en: 'Industries', id: 'Industri' },
  'sitemap.industries.construction.title': { en: 'Construction & Engineering', id: 'Konstruksi & Engineering' },
  'sitemap.industries.construction.desc': { en: 'Specialized solutions for construction industry', id: 'Solusi khusus untuk industri konstruksi' },
  'sitemap.industries.manufacturing.title': { en: 'Manufacturing', id: 'Manufaktur' },
  'sitemap.industries.manufacturing.desc': { en: 'Production systems and quality control', id: 'Sistem produksi dan quality control' },
  'sitemap.industries.retail.title': { en: 'Retail & E-commerce', id: 'Retail & E-commerce' },
  'sitemap.industries.retail.desc': { en: 'Point of sale and inventory management', id: 'Point of sale dan manajemen inventory' },
  'sitemap.industries.healthcare.title': { en: 'Healthcare', id: 'Healthcare' },
  'sitemap.industries.healthcare.desc': { en: 'Hospital and clinic management systems', id: 'Sistem manajemen rumah sakit dan klinik' },
  'sitemap.industries.education.title': { en: 'Education', id: 'Pendidikan' },
  'sitemap.industries.education.desc': { en: 'Learning management and academic administration', id: 'Learning management dan administrasi akademik' },
  'sitemap.legal.title': { en: 'Legal Pages', id: 'Halaman Legal' },
  'sitemap.legal.privacy.title': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  'sitemap.legal.privacy.desc': { en: 'Personal data protection and user information', id: 'Perlindungan data pribadi dan informasi pengguna' },
  'sitemap.legal.terms.title': { en: 'Terms & Conditions', id: 'Syarat & Ketentuan' },
  'sitemap.legal.terms.desc': { en: 'Service usage terms and cooperation conditions', id: 'Ketentuan penggunaan layanan dan kerjasama' },
  'sitemap.legal.sitemap.title': { en: 'Sitemap', id: 'Sitemap' },
  'sitemap.legal.sitemap.desc': { en: 'Complete website navigation map', id: 'Peta navigasi lengkap website' },
  'sitemap.resources.title': { en: 'Resources', id: 'Resources' },
  'sitemap.resources.blog.title': { en: 'Blog', id: 'Blog' },
  'sitemap.resources.blog.desc': { en: 'Articles about technology and best practices', id: 'Artikel tentang teknologi dan best practices' },
  'sitemap.resources.caseStudies.title': { en: 'Case Studies', id: 'Case Studies' },
  'sitemap.resources.caseStudies.desc': { en: 'Implementation case studies of successful projects', id: 'Studi kasus implementasi proyek-proyek sukses' },
  'sitemap.resources.downloads.title': { en: 'Downloads', id: 'Downloads' },
  'sitemap.resources.downloads.desc': { en: 'Brochures, whitepapers, and marketing materials', id: 'Brochure, whitepaper, dan materi marketing' },
  'sitemap.resources.faq.title': { en: 'FAQ', id: 'FAQ' },
  'sitemap.resources.faq.desc': { en: 'Frequently asked questions', id: 'Pertanyaan yang sering diajukan' },
  'sitemap.quickActions.title': { en: 'Quick Actions', id: 'Quick Actions' },
  'sitemap.quickActions.consultation.title': { en: 'Free Consultation', id: 'Konsultasi Gratis' },
  'sitemap.quickActions.consultation.desc': { en: 'Start discussing your software needs', id: 'Mulai diskusi tentang kebutuhan software Anda' },
  'sitemap.quickActions.call.title': { en: 'Call Directly', id: 'Hubungi Langsung' },
  'sitemap.quickActions.call.desc': { en: 'Phone for quick consultation', id: 'Telepon untuk konsultasi cepat' },
  'sitemap.quickActions.whatsapp.title': { en: 'WhatsApp', id: 'WhatsApp' },
  'sitemap.quickActions.whatsapp.desc': { en: 'Chat directly for quick response', id: 'Chat langsung untuk respon cepat' },
  'sitemap.quickActions.email.title': { en: 'Email', id: 'Email' },
  'sitemap.quickActions.email.desc': { en: 'Send email for detailed inquiry', id: 'Kirim email untuk inquiry detail' },
  'sitemap.stats.title': { en: 'Website Statistics', id: 'Statistik Website' },
  'sitemap.stats.subtitle': { en: 'Complete information about LDP Digital website content', id: 'Informasi lengkap tentang konten website LDP Digital' },
  'sitemap.stats.mainPages': { en: 'Main Pages', id: 'Halaman Utama' },
  'sitemap.stats.serviceDetails': { en: 'Service Details', id: 'Layanan Detail' },
  'sitemap.stats.industryFocus': { en: 'Industry Focus', id: 'Industri Focus' },
  'sitemap.stats.portfolioProjects': { en: 'Portfolio Projects', id: 'Portfolio Projects' },
  'sitemap.search.title': { en: 'Search Pages', id: 'Cari Halaman' },
  'sitemap.search.subtitle': { en: 'Use search to find specific pages or content', id: 'Gunakan pencarian untuk menemukan halaman atau konten tertentu' },
  'sitemap.search.placeholder': { en: 'Search pages, services, or content...', id: 'Cari halaman, layanan, atau konten...' },
  'sitemap.search.noResults': { en: 'No results found', id: 'Tidak ada hasil' },
  'sitemap.search.noResultsDesc': { en: 'Try using different keywords', id: 'Coba gunakan kata kunci yang berbeda' },

  // Terms page translations
  'terms.hero.title': { en: 'Terms & Conditions', id: 'Syarat & Ketentuan' },
  'terms.hero.subtitle': { en: 'Terms of service for software development and digital consulting', id: 'Ketentuan penggunaan layanan software development dan konsultasi digital' },
  'terms.lastUpdated': { en: 'Last updated: January 1, 2025', id: 'Terakhir diperbarui: 1 Januari 2025' },
  'terms.toc.title': { en: 'Table of Contents', id: 'Daftar Isi' },
  'terms.acceptance.title': { en: '1. Acceptance of Terms', id: '1. Penerimaan Ketentuan' },
  'terms.services.title': { en: '2. Our Services', id: '2. Layanan Kami' },
  'terms.userObligations.title': { en: '3. User Obligations', id: '3. Kewajiban Pengguna' },
  'terms.projectTerms.title': { en: '4. Project Terms', id: '4. Ketentuan Proyek' },
  'terms.paymentTerms.title': { en: '5. Payment Terms', id: '5. Ketentuan Pembayaran' },
  'terms.intellectualProperty.title': { en: '6. Intellectual Property', id: '6. Hak Kekayaan Intelektual' },
  'terms.confidentiality.title': { en: '7. Confidentiality', id: '7. Kerahasiaan' },
  'terms.warranties.title': { en: '8. Warranties & Guarantees', id: '8. Jaminan & Garansi' },
  'terms.limitationLiability.title': { en: '9. Limitation of Liability', id: '9. Batasan Tanggung Jawab' },
  'terms.termination.title': { en: '10. Service Termination', id: '10. Penghentian Layanan' },
  'terms.governingLaw.title': { en: '11. Governing Law', id: '11. Hukum yang Berlaku' },
  'terms.contact.title': { en: '12. Contact', id: '12. Kontak' },

  // Privacy page translations
  'privacy.hero.title': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  'privacy.hero.subtitle': { en: 'Our commitment to protecting your privacy and personal data', id: 'Komitmen kami dalam melindungi privasi dan data pribadi Anda' },
  'privacy.lastUpdated': { en: 'Last updated: January 1, 2025', id: 'Terakhir diperbarui: 1 Januari 2025' },

  // Portfolio Case Study translations
  'portfolio.casestudy.category': { en: 'ERP Implementation', id: 'ERP Implementation' },
  'portfolio.casestudy.duration': { en: '6 Months Implementation', id: '6 Bulan Implementasi' },
  'portfolio.casestudy.title': { en: 'Digital Transformation of Large Construction Company', id: 'Transformasi Digital Perusahaan Konstruksi Besar' },
  'portfolio.casestudy.description': { en: 'Comprehensive ERP system implementation for construction company with 200+ employees, managing 15+ simultaneous projects with total budget of Rp 500+ billion.', id: 'Implementasi sistem ERP komprehensif untuk perusahaan konstruksi dengan 200+ karyawan, mengelola 15+ proyek simultan dengan budget total Rp 500+ miliar.' },
  
  'portfolio.casestudy.challenges.title': { en: 'Challenges', id: 'Tantangan' },
  'portfolio.casestudy.challenges.manual': { en: 'Manual project management with Excel', id: 'Manajemen proyek manual dengan Excel' },
  'portfolio.casestudy.challenges.tracking': { en: 'Difficulty tracking materials and equipment', id: 'Kesulitan tracking material dan equipment' },
  'portfolio.casestudy.challenges.reporting': { en: 'Non real-time financial reporting', id: 'Laporan keuangan tidak real-time' },
  'portfolio.casestudy.challenges.communication': { en: 'Non-integrated team communication', id: 'Komunikasi tim tidak terintegrasi' },
  
  'portfolio.casestudy.solutions.title': { en: 'Solutions', id: 'Solusi' },
  'portfolio.casestudy.solutions.erp': { en: 'Integrated ERP system with complete modules', id: 'Sistem ERP terintegrasi dengan modul lengkap' },
  'portfolio.casestudy.solutions.mobile': { en: 'Mobile app for field reporting', id: 'Mobile app untuk field reporting' },
  'portfolio.casestudy.solutions.dashboard': { en: 'Real-time dashboard for management', id: 'Dashboard real-time untuk management' },
  'portfolio.casestudy.solutions.workflow': { en: 'Automated workflow and approval system', id: 'Automated workflow dan approval system' },
  
  'portfolio.casestudy.results.title': { en: 'Results', id: 'Hasil' },
  'portfolio.casestudy.results.efficiency': { en: 'Operational efficiency improvement', id: 'Peningkatan efisiensi operasional' },
  'portfolio.casestudy.results.reporting_time': { en: 'Report generation time reduction', id: 'Pengurangan waktu pembuatan laporan' },
  'portfolio.casestudy.results.cost_savings': { en: 'Operational cost savings', id: 'Penghematan biaya operasional' },
  'portfolio.casestudy.results.inventory_accuracy': { en: 'Inventory data accuracy', id: 'Akurasi data inventory' },

  // Portfolio Testimonials translations
  'portfolio.testimonial1.quote': { en: 'LDP Digital\'s ERP implementation truly changed how we manage projects. Now all data is integrated and reports can be generated in minutes, not days.', id: 'Implementasi ERP dari LDP Digital benar-benar mengubah cara kami mengelola proyek. Sekarang semua data terintegrasi dan laporan bisa dibuat dalam hitungan menit, bukan hari.' },
  'portfolio.testimonial1.name': { en: 'Budi Santoso', id: 'Budi Santoso' },
  'portfolio.testimonial1.title': { en: 'Project Manager', id: 'Project Manager' },
  'portfolio.testimonial1.company': { en: 'PT. Konstruksi Mandiri', id: 'PT. Konstruksi Mandiri' },

  'portfolio.testimonial2.quote': { en: 'The inventory management software developed by LDP Digital really helps us optimize stock and reduce waste. ROI was achieved in 8 months.', id: 'Software inventory management yang dikembangkan LDP Digital sangat membantu kami mengoptimalkan stock dan mengurangi waste. ROI tercapai dalam 8 bulan.' },
  'portfolio.testimonial2.name': { en: 'Sari Wijaya', id: 'Sari Wijaya' },
  'portfolio.testimonial2.title': { en: 'Operations Director', id: 'Operations Director' },
  'portfolio.testimonial2.company': { en: 'PT. Manufaktur Sejahtera', id: 'PT. Manufaktur Sejahtera' },

  'portfolio.testimonial3.quote': { en: 'LDP Digital team is very professional and understands our industry needs. The support provided is also excellent, quick response and targeted solutions.', id: 'Tim LDP Digital sangat profesional dan memahami kebutuhan industri kami. Support yang diberikan juga excellent, respon cepat dan solusi tepat sasaran.' },
  'portfolio.testimonial3.name': { en: 'Ahmad Rahman', id: 'Ahmad Rahman' },
  'portfolio.testimonial3.title': { en: 'IT Manager', id: 'IT Manager' },
  'portfolio.testimonial3.company': { en: 'PT. Teknologi Maju', id: 'PT. Teknologi Maju' },

  // Portfolio Technology section translations
  'portfolio.tech.frontend': { en: 'Frontend', id: 'Frontend' },
  'portfolio.tech.backend': { en: 'Backend', id: 'Backend' },
  'portfolio.tech.database': { en: 'Database', id: 'Database' },
  'portfolio.tech.cloud': { en: 'Cloud & DevOps', id: 'Cloud & DevOps' },

  // Services Page - Additional translations for hardcoded content
  'services.custom.detailed.title': { en: 'Custom Software', id: 'Software Custom' },
  'services.custom.detailed.description': { en: 'Custom application development tailored to your unique operational needs. From concept to implementation with cutting-edge technology.', id: 'Pengembangan aplikasi khusus sesuai kebutuhan unik operasional perusahaan Anda. Dari konsep hingga implementasi dengan teknologi terdepan.' },
  'services.custom.services.title': { en: 'Services Include:', id: 'Layanan Meliputi:' },
  'services.custom.services.analysis': { en: 'In-depth Needs Analysis', id: 'Analisis Kebutuhan Mendalam' },
  'services.custom.services.design': { en: 'Modern UI/UX Design', id: 'UI/UX Design Modern' },
  'services.custom.services.development': { en: 'Development & Testing', id: 'Development & Testing' },
  'services.custom.services.integration': { en: 'Integration with Existing Systems', id: 'Integrasi dengan Sistem Existing' },
  'services.custom.services.training': { en: 'Training & Documentation', id: 'Training & Documentation' },
  'services.custom.services.maintenance': { en: 'Maintenance & Support', id: 'Maintenance & Support' },
  'services.custom.tech.title': { en: 'Technologies We Use:', id: 'Teknologi yang Kami Gunakan:' },

  'services.consulting.detailed.title': { en: 'Digital Consulting', id: 'Konsultasi Digital' },
  'services.consulting.detailed.description': { en: 'In-depth analysis of business processes to find optimal technology solutions. Targeted digital transformation strategy.', id: 'Analisis mendalam terhadap proses bisnis untuk menemukan solusi teknologi yang optimal. Strategi transformasi digital yang tepat sasaran.' },
  'services.consulting.process.title': { en: 'Consultation Process:', id: 'Proses Konsultasi:' },
  'services.consulting.process.business': { en: 'Business Process Analysis', id: 'Business Process Analysis' },
  'services.consulting.process.assessment': { en: 'Technology Assessment', id: 'Technology Assessment' },
  'services.consulting.process.roadmap': { en: 'Digital Transformation Roadmap', id: 'Digital Transformation Roadmap' },
  'services.consulting.process.strategy': { en: 'Implementation Strategy', id: 'Implementation Strategy' },
  'services.consulting.process.change': { en: 'Change Management', id: 'Change Management' },
  'services.consulting.process.roi': { en: 'ROI Measurement', id: 'ROI Measurement' },

  'services.website.detailed.title': { en: 'Website Development', id: 'Pengembangan Website' },
  'services.website.detailed.description': { en: 'Professional, responsive and SEO-friendly websites to enhance your company\'s online presence.', id: 'Website profesional yang responsif dan SEO-friendly untuk meningkatkan online presence perusahaan Anda.' },
  'services.website.types.title': { en: 'Website Types:', id: 'Jenis Website:' },
  'services.website.types.profile': { en: 'Company Profile', id: 'Company Profile' },
  'services.website.types.ecommerce': { en: 'E-commerce Platform', id: 'E-commerce Platform' },
  'services.website.types.webapp': { en: 'Web Application', id: 'Web Application' },
  'services.website.types.landing': { en: 'Landing Pages', id: 'Landing Pages' },
  'services.website.types.cms': { en: 'CMS Development', id: 'CMS Development' },
  'services.website.types.api': { en: 'API Development', id: 'API Development' },

  'services.mobile.detailed.title': { en: 'Mobile Applications', id: 'Aplikasi Mobile' },
  'services.mobile.detailed.description': { en: 'Native and cross-platform mobile applications for iOS and Android that are user-friendly and performant.', id: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android yang user-friendly dan performant.' },
  'services.mobile.platforms.title': { en: 'Platforms:', id: 'Platform:' },
  'services.mobile.platforms.ios': { en: 'iOS Native Development', id: 'iOS Native Development' },
  'services.mobile.platforms.android': { en: 'Android Native Development', id: 'Android Native Development' },
  'services.mobile.platforms.react': { en: 'React Native', id: 'React Native' },
  'services.mobile.platforms.flutter': { en: 'Flutter', id: 'Flutter' },
  'services.mobile.platforms.pwa': { en: 'Progressive Web Apps', id: 'Progressive Web Apps' },
  'services.mobile.platforms.deployment': { en: 'App Store Deployment', id: 'App Store Deployment' },

  'services.maintenance.detailed.title': { en: 'Maintenance & Support', id: 'Maintenance & Support' },
  'services.maintenance.detailed.description': { en: 'Ongoing maintenance and support services to ensure systems always run optimally.', id: 'Layanan pemeliharaan dan dukungan berkelanjutan untuk memastikan sistem selalu berjalan optimal.' },
  'services.maintenance.support.title': { en: 'Support Services:', id: 'Layanan Support:' },
  'services.maintenance.support.technical': { en: '24/7 Technical Support', id: '24/7 Technical Support' },
  'services.maintenance.support.updates': { en: 'Regular System Updates', id: 'Regular System Updates' },
  'services.maintenance.support.monitoring': { en: 'Performance Monitoring', id: 'Performance Monitoring' },
  'services.maintenance.support.security': { en: 'Security Patches', id: 'Security Patches' },
  'services.maintenance.support.backup': { en: 'Backup & Recovery', id: 'Backup & Recovery' },
  'services.maintenance.support.training': { en: 'User Training', id: 'User Training' },

  // Services Process section
  'services.process.title': { en: 'Our Work Process', id: 'Proses Kerja Kami' },
  'services.process.subtitle': { en: 'Proven methodology to deliver high-quality software solutions', id: 'Metodologi yang terbukti untuk menghasilkan solusi software berkualitas tinggi' },
  'services.process.step1.title': { en: 'Discovery & Analysis', id: 'Discovery & Analysis' },
  'services.process.step1.desc': { en: 'In-depth analysis of business needs and existing processes to comprehensively understand requirements.', id: 'Analisis mendalam kebutuhan bisnis dan proses existing untuk memahami requirements secara komprehensif.' },
  'services.process.step2.title': { en: 'Planning & Design', id: 'Planning & Design' },
  'services.process.step2.desc': { en: 'System architecture planning, UI/UX design, and prototype creation for concept validation.', id: 'Perencanaan arsitektur sistem, UI/UX design, dan pembuatan prototype untuk validasi konsep.' },
  'services.process.step3.title': { en: 'Development', id: 'Development' },
  'services.process.step3.desc': { en: 'Software development with Agile methodology, regular testing, and continuous communication.', id: 'Pengembangan software dengan metodologi Agile, regular testing, dan komunikasi berkelanjutan.' },
  'services.process.step4.title': { en: 'Testing & Deployment', id: 'Testing & Deployment' },
  'services.process.step4.desc': { en: 'Comprehensive quality assurance, user acceptance testing, and deployment to production environment.', id: 'Quality assurance menyeluruh, user acceptance testing, dan deployment ke production environment.' },
  'services.process.step5.title': { en: 'Support & Maintenance', id: 'Support & Maintenance' },
  'services.process.step5.desc': { en: 'User training, complete documentation, and ongoing support services to ensure successful implementation.', id: 'Training user, dokumentasi lengkap, dan layanan support berkelanjutan untuk memastikan kesuksesan implementasi.' },

  // Services CTA section
  'services.cta.title': { en: 'Ready to Start Your Project?', id: 'Siap Memulai Proyek Anda?' },
  'services.cta.description': { en: 'Consult your company software needs with our expert team. Get the right solution to optimize your business operations.', id: 'Konsultasikan kebutuhan software perusahaan Anda dengan tim expert kami. Dapatkan solusi yang tepat untuk mengoptimalkan operasional bisnis Anda.' },
  'services.cta.consultation': { en: 'Free Consultation', id: 'Konsultasi Gratis' },
  'services.cta.portfolio': { en: 'View Portfolio', id: 'Lihat Portfolio' },
  
};

export function getTranslation(key: string, lang: 'en' | 'id' = 'id'): string {
  return translations[key]?.[lang] || key;
}

export function getCurrentLanguage(): 'en' | 'id' {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('language') as 'en' | 'id') || 'id';
  }
  return 'id';
}

export function setLanguage(lang: 'en' | 'id') {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  }
}