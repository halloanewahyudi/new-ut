export const useMenu = () => {
  const menus = ref([
    {
      name: 'Beranda',
      slug: 'beranda',
      link: '/'
   
    },{
      name: 'Tentang UT',
      slug: 'tentang-ut',
      link: '#',
         child:[
         {
          name:'Sekilas Perusahaan',
          slug:'sekilas-perusahaan',
          link:'#'
          },
         
          {
          name:'Visi & Misi',
          slug:'visi-misi',
          link:'#'
          },
           {
          name:'Tagline',
          slug:'tagline',
          link:'#'
          },
          {
          name:'Struktur Bisnis',
          slug:'struktur-bisnis',
          link:'#'
          },
          {
            name:'Jejak Langkah',
            slug:'jejak-langkah',
            link:'#'
          },
          {
            name:'Penghargaan',
            slug:'penghargaan',
            link:'#'
          },
          {
            name:'Dewan Komisaris',
            slug:'dewan-komisaris',
            link:'#'
          },
          {
            name:'Direksi',
            slug:'direksi',
            link:'#'
          },
          {
            name:'Struktur Organisasi',
            slug:'struktur-organisasi',
            link:'#'  
          }
      ]
    },
    {
      name:'Bisnis',
      slug:'bisnis',
      link:'#',
      child:[
        { 
          name:'Mesin Konstruksi',
          slug:'mesin-konstruksi',
          link:'#',
          child:[
            {
              name:'Product',
              slug:'product',
              link:'#',
            },
            {
              name:'Layanan Pelanggan',
              slug:'layanan-pelanggan',
              link:'#',
              child:[
                {
                  name:'Suku Cadang',
                  slug:'suku-cadang',
                  link:'#'
                },
                {
                  name:'Jasa Pemeliharaan',
                  slug:'jasa-pemeliharaan',
                  link:'#'
                },
                {
                  name:'Guaranteed Support',
                  slug:'guaranteed-support',
                  link:'#'
                },
                {
                  name:'UT Command Center',
                  slug:'ut-command-center',
                  link:'#'
                },
                {
                  name:'UT Call',
                  slug:'ut-call',
                  link:'#'
                },
                {
                 name:'UT Connect', 
                 slug:'ut-connect',
                 link:'#'
                }
              ]
            },
            {
              name:'Jaringan Distribusi',
              slug:'jaringan-distribusi',
              link:'#'
            }
          ]
        },
        {
          name:'Kontraktor Penambangan',
          slug:'kontraktor-penambangan',
          link:'#'
        },
        {
          name:'Pertambangan',
          slug:'pertambangan',
          link:'#'
        },
        {
          name:'Industri Konstruksi',
          slug:'industri-konstruksi',
          link:'#'
        },
        {
          name:'Energi',
          slug:'energi',
          link:'#'
        }
      ]
    },
    {
      name:'Hubungan Investor',
      slug:'hubungan-investor',
      link:'#',
      child:[
        {
          name:'Ikhtisar Hubungan Investor',
          slug:'ikhtisar-hubungan-investor',
          link:'#'
        },
        {
          name:'Laporan',
          slug:'laporan',
          link:'#'
        },
        {
          name:'Komposisi Pemegang Saham',
          slug:'komposisi-pemegang-saham',
          link:'#'
        },
        {
          name:'Rapat Umum Pemegang Saham',
          slug:'rapat-umum-pemegang-saham',
          link:'#'
        },
        {
          name:'Informasi Pemegang Saham',
          slug:'informasi-pemegang-saham',
          link:'#'
        },
        {
          name:'Informasi Dividen',
          slug:'informasi-dividen',
          link:'#'
        },
        {
          name:'Kegiatan & Presentasi',
          slug:'kegiatan-presentasi',
          link:'#'
        },
        {
          name:'Ulasan Analisis',
          slug:'ulasan-analisis',
          link:'#'
        },
        {
          name:'Keterbukaan Informasi',
          slug:'keterbukaan-informasi',
          link:'#'
        }
      ]
    },
    {
        name:'Tata Kelola',
        slug:'tata-kelola',
        link:'#',
        child:[
          {
            name:'Anggaran Dasar',
            slug:'anggaran-dasar',
            link:'#'
          },
          {
            name:'Anggaran Dasar',
            slug:'anggaran-dasar',
            link:'#'
          },
          {
            name:'Komite Audit',
            slug:'komite-audit',
            link:'#'
          },
          {
            name:'Komite Nasional & Remunerasi',
            slug:'komite-nasional-remunerasi',
            link:'#'
          },
          {
            name:'Sekretaris Perusahaan',
            slug:'sekretaris-perusahaan',
            link:'#'
          },
          {
            name:'Audit Internal',
            slug:'audit-internal',
            link:'#'
          },
          {
            name:'Pedoman Direksi',
            slug:'pedoman-direksi',
            link:'#'
          },
          {
            name:'Pedoman Dewan Direksi',
            slug:'pedoman-dewan-direksi',
            link:'#'
          },
          {
            name:'Manajemen Resiko',
            slug:'manajemen-resiko',
            link:'#'
          },
          {
            name:'Sistem Pelaporan Pelanggan',
            slug:'sistem-pelaporan-pelanggan',
            link:'#'
          },
          {
            name:'Prospektus',
            slug:'prospektus',
            link:'#'
          },
          {
            name:'Kebijakan Lainnya',
            slug:'kebijakan-lainnya',
            link:'#'
          }
        ]
    },
    {
      name:'Keberlanjutan',
      slug:'keberlanjutan',
      link:'#',
      child:[
        {
          name:'Keberlanjutan',
          slug:'keberlanjutan',
          link:'#'
        },
        {
          name:'CSR Program',
          slug:'csr-program',
          link:'/our-csr',
          child:[
            {
              name:'UT Future',
              slug:'ut-future',
              link:'#',
              child:[
                {
                  name:'SOBAT Competition',
                  slug:'sobat-competition',
                  link:'#'
                },
                {
                  name:'SOBAT',
                  slug:'sobat',
                  link:'#'
                }
              ]
            },
            {
              name:'UTGrowth',
              slug:'utgrowth',
              link:'#'
            },
            {
              name:'UTRees',
              slug:'utrees',
              link:'#'
            },
            {
              name:'UTCare',
              slug:'utcare',
              link:'#'
            },
            {
              name:'UTAction',
              slug:'utaction',
              link:'#'
            },
            {
              name:'Indity',
              slug:'indity',
              link:'#'
            }
          ]
        },
        {
          name:'Yayasan',
          slug:'yayasan',
          link:'#',
          child:[
            {
              name:'Yayasan Karya Bakti UT',
              slug:'yayasan-karya-bakti-ut',
              link:'#'
            },
            {
              name:'UT School',
              slug:'ut-school',
              link:'#'
            },
            {
              name:'Yayasan Insan Mulia PAMA',
              slug:'yayasan-insan-mulia-pama',
              link:'#'
            }
          ]
        },
        {
          name:'Laporan Keberlanjutan',
          slug:'laporan-keberlanjutan',
          link:'#'
        },
        {
          name:'Buletin Keberlanjutan AHEMCE',
          slug:'buletin-keberlanjutan-ahemce',
          link:'#'
        },
        {
          name:'Diversity, Equity, and Inclusion',
          slug:'diversity-equity-and-inclusion',
          link:'/diversity'
        },
        {
          name:'Lembar Fakta',
          slug:'lembar-fakta',
          link:'#'
        }
      ]
    },
    {
      name:'Sumber Daya Manusia',
      slug:'sumber-daya-manusia',
      link:'#',
      child:[
        {
          name:'Karier',
          slug:'karier',
          link:'/career',
          child:[
            {
              name:'Berkarier di UT',
              slug:'berkarier-di-ut',
              link:'#'
            },
            {
              name:'Info Rekrutmen',
              slug:'info-rekrutmen',
              link:'/career'
            },
            {
              name:'Tanya Jawab',
              slug:'tanya-jawab',
              link:'#'
            }
          ]
        },
        {
          name:'Corporate University',
          slug:'corporate-university',
          link:'#',
          child:[
            {
              name:'Tentang Corpu',
              slug:'tentang-corpu',
              link:'#'
            },
            {
              name:'Metode Corpu',
              slug:'metode-corpu',
              link:'#'
            },
            {
              name:'Event Corpu',
              slug:'event-corpu',
              link:'#',
              child: [
                {
                  name:'Program Digital & Milenial',
                  slug:'program-digital-milenial',
                  link:'#'
                },
                {
                  name:'Metode',
                  slug:'metode',
                  link:'#'
                }
              ]
            },
            {
              name:'Infrastruktur',
              slug:'infrastruktur',
              link:'#'
            }
          ]
        }
      ]
    },
    {
      name:'Ruang Media',
      slug:'ruang-media',
      link:'#',
      child:[
        {
          name:'Siaran Pers',
          slug:'siaran-pers',
          link:'#'
        },
        {
          name:'Museum Virtual UT',
          slug:'museum-virtual-ut',
          link:'#'
        }
      ]
    },
    {
      name:'Kontak',
      slug:'kontak',
      link:'#'
    }
  ]) 

  return {
    menus
  }
}
