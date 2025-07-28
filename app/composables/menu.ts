export const useMenu = () => {
  const menus = ref([
    {
      name: 'Beranda',
      slug: 'beranda',
      link: '/'
    },{
      name: 'Tentang UT',
      slug: 'tentang-ut',
      link: '/about',
    },{
      name:'Bisnis',
      slug:'bisnis',
      link:'#'
    },{
      name:'Hubungan Investor',
      slug:'hubungan-investor',
      link:'#'
    },{
        name:'Tata Kelola',
        slug:'tata-kelola',
        link:'#'
    },{
      name:'Keberlanjutan',
      slug:'keberlanjutan',
      link:'#'
    },
    {
      name:'SUmber Daya Manusia',
      slug:'sumber-daya-manusia',
      link:'#'
    },
    {
      name:'Ruang Media',
      slug:'ruang-media',
      link:'#'
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
