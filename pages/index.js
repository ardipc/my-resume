import { Fragment, useState } from 'react'

import Head from 'next/head'

export default function Home() {

  const [formNama, setFormNama] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formSubject, setFormSubject] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const [formAlert, setFormAlert] = useState('')

  const me = {
    nama: 'Ahmad Ardiansyah',
    foto: '/assets/img/profile-img.jpg',
    slider: "Developer, Freelancer, DevOps, Database Engineer, Fullstack Engineer",
    role: 'Fullstack Engineer & Web Developer',
    email: 'ahmad.ardi06@gmail.com',
    website: 'https://me.ardimasyu.online',
    alamat: 'Jl. Anyelir RT004 / RW002, Kp. Babakan Smapal, Lengkong Gudang, Serpong, Tangerang Selatan, Banten.',
    bod: '17 Januari 1997',
    phone: '+62 823 3409 3822',
    city: 'Lumajang',
    age: (new Date()).getFullYear() - 1997,
    degree: 'Diploma III',
    avail: 'Available',
    deskripsi: 'Pengalaman Saya yang beragam di bidang IT (misalnya pemrograman, arsitektur software, pengembang web, dll) berasal dari keinginan sederhana untuk memberdayakan kehidupan manusia dengan teknologi komputasi. Dunia menjadi kecil dan semakin kecil dari hari ke hari. Batas geografis menghilang; Perbedaan budaya memudar. Umat manusia akan berkumpul bersama. Itulah yang mendorong Saya: membantu membuka jalan menuju masyarakat global yang diberdayakan.',
    resume: 'Saya lulusan Diploma III dari jurusan Teknik Informatika di Politeknik Elektronika Negeri Surabaya dengan pengalaman bekerja di berbagai  bidang (full-stack) pengembangan perangkat lunak. Saya telah membangun proyek dalam tim kecil dan Saya sedang mencari peran dimana Saya dapat tumbuh dan terus belajar dari anggota tim berpengalaman lainnya.',
    social: [
      {
        icon: 'github',
        user: '@ardipc'
      },
      {
        icon: 'twitter',
        user: '@ardipc'
      },
      {
        icon: 'facebook',
        user: '@ardipc'
      },
      {
        icon: 'instagram',
        user: '@ardipc'
      },
      {
        icon: 'linkedin',
        user: '@ardipc'
      }
    ]
  }

  const summary = {
    nama: 'Ahmad Ardiansyah',
    deskripsi: 'Fast learner, kreatif, inovatif, kerja keras dan deadline-driven dengan pengalaman 2+ tahun dalam mendesain dan membangun aplikasi berbasis web yang dibutuhkan oleh client.',
    kontak: [
      "Head Office CARSWORLD Building 7th Floor",
      "(021) 2235-6880",
      "https://carsworld.co.id/"
    ]
  }

  const edukasi = [
    {
      jurusan: 'Dimploma III - Teknik Informatika',
      tahun: '2015 - 2018',
      kampus: 'Politeknik Elektronika Negeri Surabaya',
      deskripsi: 'Project tugas akhir yang Saya kerjakan adalah "Bangun Sistem Kontrol Dan Monitoring Mobil Melalui Internet Dengan Konsep Internet Of Things Berbasis Mobile" dimana aplikasi tersebut dapat mengontrol dan monitoring mobil.'
    },
    {
      jurusan: 'Menengah Atas - Rekayasa Perangkat Lunak',
      tahun: '2012 - 2015',
      kampus: 'SMK Negeri 1 Lumajang',
      deskripsi: 'Ujian akhir yang Saya kerjakan adalah membuat aplikasi "Sistem Informasi Rental Mobil Berbasis Website" dimana aplikasi tersebut menginput mobil yang akan dirental, mengolah harga rental mobil, dan laporan setiap transaksi dalam bentuk PDF.'
    },
  ]

  const projects = [
    {
      judul: 'Carsworld PWA',
      tahun: '2021 - WEB APP - INDIVIDUAL',
      client: 'PT Carsworld Digital Indonesia',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    },
    {
      judul: 'ICADEMY',
      tahun: '2020 - WEB APP - TEAM',
      client: 'PT Infovesta Utama',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    },
    {
      judul: 'REALTIME DATABASE with RETHINKDB',
      tahun: '2019 - WEB APP - INDIVIDUAL',
      client: 'Freelancer',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    },
    {
      judul: 'WEBSITE RECRUITMENT',
      tahun: '2019 - WEB APP - INDIVIDUAL',
      client: 'PT. BNI Syariah',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    },
    {
      judul: 'MONITORING PING NETWORK',
      tahun: '2018 - WEB APP - INDIVIDUAL',
      client: 'PT. Meka Adipratama Semarang',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    },
    {
      judul: 'MONITOR AND CONTROL CAR WITH RASPBERRY PI 3',
      tahun: '2018 - WEB & MOBILE APP - INDIVIDUAL',
      client: 'Electronic Engineering Polytechnic Institute of Surabaya',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    },
    {
      judul: 'SISTEM INFORMASI PELAPORAN VALUTA ASING',
      tahun: '2017 - WEB APP - INDIVIDUAL',
      client: ' PT. Kadir Batcha',
      deskripsi: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project."
      ]
    }
  ]

  const skills = [
    {
      judul: 'Kolom 1',
      konten: [
        { name: 'HTML', value: 96 },
        { name: 'CSS', value: 90 },
        { name: 'Javascript', value: 92 },
        { name: 'PHP', value: 88 },
      ]
    },
    {
      judul: 'Kolom 2',
      konten: [
        { name: 'Laravel', value: 82 },
        { name: 'NodeJs', value: 86 },
        { name: 'ReactJs', value: 85 },
        { name: 'NextJs', value: 83 },
      ]
    },
    {
      judul: 'Kolom 3',
      konten: [
        { name: 'MySQL', value: 89 },
        { name: 'MongoDB', value: 84 },
        { name: 'Redis', value: 82 },
        { name: 'Elasticsearch', value: 80 },
      ]
    },
    {
      judul: 'Kolom 4',
      konten: [
        { name: 'Google Cloud', value: 82 },
        { name: 'Amazon Web Services', value: 84 },
        { name: 'Alibaba Cloud', value: 87 },
        { name: 'CI/CD', value: 89 },
      ]
    },
  ]

  const sertifikasi = [
    {
      judul: 'Google Cloud Training',
      tahun: '2019 - Present',
      penerbit: 'Google Cloud Provider',
      link: 'https://google.qwiklabs.com/public_profiles/bf9078a0-4678-4c2f-b636-06a6334098ef'
    },
    {
      judul: 'Apsara Clouder Cloud Computing Specialist Certification An Introduction of DevOps',
      tahun: 'Sep 2019 - Sep 2021',
      penerbit: 'Alibaba Cloud Academy',
      link: 'https://edu.alibabacloud.com/course/316'
    },
    {
      judul: 'Apsara Clouder Cloud Computing Specialist Certification Construct a Dynamic Website',
      tahun: 'Sep 2019 - Sep 2021',
      penerbit: 'Alibaba Cloud Academy',
      link: 'https://edu.alibabacloud.com/course/8'
    },
    {
      judul: 'Apsara Clouder Cloud Computing Specialist Certification Using a Simple Application Server to Publish an Ecommerce Website',
      tahun: 'Agt 2019 - Agt 2021',
      penerbit: 'Alibaba Cloud Academy',
      link: 'https://edu.alibabacloud.com/course/242'
    },
    {
      judul: 'Apsara Clouder Cloud Computing Specialist Certification Operate and Manage a Cloud Server',
      tahun: 'Jul 2019 - Jul 2021',
      penerbit: 'Alibaba Cloud Academy',
      link: 'https://edu.alibabacloud.com/course/7'
    }
  ]

  const submitKontak = async (e) => {
    if(formNama && formEmail && formPhone && formSubject && formMessage) {
      setFormAlert('Pesan Kamu sudah terkirim, Terimakasih!')
      let msg = `${formNama}%0a${formEmail}%0a${formPhone}%0a%0a${formSubject}%0a${formMessage}`
      let wa  = `https://api.callmebot.com/whatsapp.php?phone=+6282334093822&text=${msg}&apikey=315903`
      setFormNama('')
      setFormEmail('')
      setFormPhone('')
      setFormSubject('')
      setFormMessage('')
      fetch(wa)
    }
    else {
      setFormAlert('Silahkan isi semua form diatas')
    }
  }

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Ahmad Ardiansyah</title>
        <meta content="Resume Ahmad Ardiansyah" name="description" />
        <meta content="Resume, Ahmad Ardiansyah" name="keywords" />

        <link href="/favicon.ico" rel="icon" />
        <link href="/apple-touch-icon.ico" rel="apple-touch-icon" />

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>

      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
          </ul>
        </nav>{/* .nav-menu */}
      </header>{/* End Header */}

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Ahmad Ardiansyah</h1>
          <p>Saya seorang <span className="typed" data-typed-items={me.slider}></span></p>
          <div className="social-links">
            {
              me.social.map((item, i) => (
                <a key={`li=${i}`} href={item.user} target="_blank" className={item.icon}><i className={`bx bxl-${item.icon}`} /></a>
              ))
            }
          </div>
        </div>
      </section>{/* End Hero */}

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Tentang</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src={me.foto} className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>{me.role}</h3>
                <p className="fst-italic">
                  <em>"~ Tak Kenal, Maka Tak Sayang ~"</em>. Berikut informasi dasar tentang Saya yang dapat Saya bagikan.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Birthday:</strong>
                        <span>{me.bod}</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Website:</strong>
                        <span>{me.website}</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Phone:</strong>
                        <span>{me.phone}</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>City:</strong>
                        <span>{me.city}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Umur:</strong>
                        <span>{me.age} th</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Lulusan:</strong>
                        <span>{me.degree}</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Email:</strong>
                        <span>{me.email}</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />
                        <strong>Freelance:</strong>
                        <span>{me.avail}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>{me.deskripsi}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Keahlian</h2>
              <p>Berikut keahlian yang sudah Saya kuasai dalam beberapa tahun lalu sampai sekarang dalam bentuk persentase.</p>
            </div>

            <div className="row skills-content">
              {
                skills.map((item, i) => (
                  <div key={`ski-${i}`} className="col-lg-3">
                    {
                      item.konten.map((row, j) => (
                        <div key={`pro-${j}`} className="progress">
                          <span className="skill">
                            {row.name} <i className="val">{row.value}%</i>
                          </span>
                          <div className="progress-bar-wrap">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={row.value}
                              aria-valuemin={0}
                              aria-valuemax={100} />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Resume</h2>
              <p>{me.resume}</p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Sekilas</h3>
                <div className="resume-item pb-0">
                  <h4>{summary.nama}</h4>
                  <p><em>{summary.deskripsi}</em></p>
                  <ul>
                    {
                      summary.kontak.map((item, i) => (
                        <li key={`sum-${i}`}>{item}</li>
                      ))
                    }
                  </ul>
                </div>

                <h3 className="resume-title">Edukasi</h3>
                {
                  edukasi.map((item, i) => (
                    <div key={`edu-${i}`} className="resume-item">
                      <h4>{item.jurusan}</h4>
                      <h5>{item.tahun}</h5>
                      <p><em>{item.kampus}</em></p>
                      <p>{item.deskripsi}</p>
                    </div>
                  ))
                }

                <h3 className="resume-title">Sertifikasi</h3>
                {
                  sertifikasi.map((item, i) => (
                    <div key={`ser-${i}`} className="resume-item">
                      <h4>{item.penerbit}</h4>
                      <h5>{item.tahun}</h5>
                      <p><em>{item.judul}</em></p>
                      <a href={item.link} target="_blank" className="btn btn-primary">Lihat Sertifikat</a>
                    </div>
                  ))
                }
              </div>

              <div className="col-lg-6">
                <h3 className="resume-title">Pengalaman Projek</h3>
                {
                  projects.map((item, i) => (
                    <div key={`pro-${i}`} className="resume-item">
                      <h4>{item.judul}</h4>
                      <h5>{item.tahun}</h5>
                      <p><em>{item.client}</em></p>
                      <ul>
                        {
                          item.deskripsi.map((row, j) => (
                            <li key={`des-${j}`}>{row}</li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portofolio</h2>
              <p>Sekilas tentang portofolio yang Saya miliki serta hasil kerja sampai saat ini yang bisa Saya tampilkan.</p>
            </div>
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-center"
                data-aos="fade-up"
                data-aos-delay={100}>
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">Mobile</li>
                  <li data-filter=".filter-card">Infrastruktur</li>
                  <li data-filter=".filter-web">Website</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      App 1
                    </h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      Web 3
                    </h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      App 2
                    </h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      Card 2
                    </h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      Web 2
                    </h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      App 3
                    </h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      Card 1
                    </h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      Card 3
                    </h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt="#" />
                  <div className="portfolio-info">
                    <h4>
                      Web 3
                    </h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3">
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={100}>
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174" />
                    </svg>
                    <i className="bx bxl-dribbble" />
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay={200}>
                <div className="icon-box iconbox-orange ">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426" />
                    </svg>
                    <i className="bx bx-file" />
                  </div>
                  <h4>
                    <a href="#">
                      Sed Perspiciatis
                    </a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay={300}>
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781" />
                    </svg>
                    <i className="bx bx-tachometer" />
                  </div>
                  <h4>
                    <a href="#">
                      Magni Dolores
                    </a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay={100}>
                <div className="icon-box iconbox-yellow">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813" />
                    </svg>
                    <i className="bx bx-layer" />
                  </div>
                  <h4>
                    <a href="#">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay={200}>
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572" />
                    </svg>
                    <i className="bx bx-slideshow" />
                  </div>
                  <h4>
                    <a href="#">
                      Dele Cardo
                    </a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay={300}>
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762" />
                    </svg>
                    <i className="bx bx-arch" />
                  </div>
                  <h4>
                    <a href="#">
                      Divera Don
                    </a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Menurut Mereka</h2>
            </div>
            <div
              className="testimonials-slider swiper-container"
              data-aos="fade-up"
              data-aos-delay={100}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt="#" />
                    <h3>
                      Saul Goodman
                    </h3>
                    <h4>
                      Ceo &amp; Founder
                    </h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt="#" />
                    <h3>
                      Sara Wilsson
                    </h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt="#" />
                    <h3>
                      Jena Karlis
                    </h3>
                    <h4>
                      Store Owner
                    </h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt="#" />
                    <h3>
                      Matt Brandon
                    </h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt="#" />
                    <h3>
                      John Larson
                    </h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Tinggalkan Pesan</h2>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>{me.alamat}</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>{me.email}</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>{me.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <section role="form" className="email-form" style={{ paddingTop: '0px' }}>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        onChange={e => setFormNama(e.target.value)}
                        value={formNama}
                        placeholder="Your Name"
                        required />
                    </div>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={e => setFormEmail(e.target.value)}
                        value={formEmail}
                        placeholder="Your Email"
                        required />
                    </div>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        onChange={e => setFormPhone(e.target.value)}
                        value={formPhone}
                        placeholder="Your Phone"
                        required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      onChange={e => setFormSubject(e.target.value)}
                      value={formSubject}
                      placeholder="Subject"
                      required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      onChange={e => setFormMessage(e.target.value)}
                      value={formMessage}
                      placeholder="Message"
                      required />
                  </div>
                  <div className="my-4 text-center">
                    {
                      formAlert ?
                        <div className="sent-message">
                          {formAlert}
                        </div>
                      : null
                    }
                  </div>
                  <div className="text-center">
                    <button onClick={e => submitKontak(e)} className="btn btn-primary px-4 py-2" style={{borderRadius: '10rem'}} type="button">Send Message</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer id="footer">
        <div className="container">
          <h3>{me.nama}</h3>
          <p>{me.slider}</p>
          <div className="social-links">
            {
              me.social.map((item, i) => (
                <a key={`li=${i}`} href={item.user} target="_blank" className={item.icon}><i className={`bx bxl-${item.icon}`} /></a>
              ))
            }
          </div>
          <div className="copyright">
            © Copyright <strong><span>Ardimasyu</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://getbootstrap.com/">Bootstrap</a>
          </div>
        </div>
      </footer>{/* End Footer */}

      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </Fragment>
  )
}
