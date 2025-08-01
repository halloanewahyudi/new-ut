export const useSustainability = () => {
  const sustainability = ref([
    {
      title: 'Solar Photovoltaics',
      description: `<p>United Tractors saat ini sudah memasang Solar PV berkapasitas 200 kWp dengan tipe on-grid. Berdasarkan data Januari hingga Juni 2022, Solar PV yang terpasang mampu mengurangi konsumsi listrik sebesar 63.748 kWh atau sebesar Rp 66.042.928 per tahun.</p>`,
      image: "/img/img-1.jpg"
    }, {
      title: "Green Building",
      description: `<p>Dibangun di atas lahan seluas 2,5 hektare (Ha) dengan luas bangunan 5,8 hektare (Ha), desain Gedung United Tractors Head Office menyerupai ekskavator. Tidak hanya desainnya yang inovatif, sebagai bentuk kepedulian United Tractors terhadap lingkungan, kami membangun gedung ini dengan standar konsep green building. Gedung ini menggunakan sistem pendingin Variable Refrigerant Flow (VRF) yang hemat energi dan ramah lingkungan. Gedung ini juga dilengkapi dengan kolam penampungan air hujan berkapasitas 1.300 meter kubik (m3) untuk menampung air hujan yang dapat didaur ulang dan dimanfaatkan untuk penyiraman tanaman di area PPI Cakung.</p>`,
      image: "/img/slide-1.jpg"
    },
    {
      title: "Mini Hydro Power Plant",
      description: `<p> UT membangun dua Pembangkit Listrik Tenaga Mini-hidro (PLTM) yaitu PLTM Kalipelus berkapasitas 0,5MW di Jawa Tengah dan PLTM Besai Kemu di Lampung yang memiliki kapasitas sebesar 7MW. PLTM Besai Kemu saat ini dalam proses konstruksi dan diperkirakan akan beroperasi pada akhir tahun 2023.</p>
<p>UT melakukan strategi transisi melalui bisnis Energi Baru dan Terbarukan (EBT) dengan investasi pada PT Arkora Hydro Tbk (Arkora) dengan kepemilikan saham sebesar 31,49%. Arkora mengoperasikan dua PLTM, yaitu PLTM Cikopo 2 dengan kapasitas 7,4 MW dan PLTM Tomasa dengan kapasitas 10 MW</p>`,
      image: "/img/sustainability-initiative-mini-hydro.jpg"
    },
    {
      title: "Biodiesel(B20 & B30)",
      description: `<p> Pemerintah RI melalui Peraturan Menteri ESDM No.41/2018, tanggal 24 Agustus, mewajibkan semua badan usaha Bahan Bakar Minyak (BBM), seperti Pertamina, untuk melakukan pencampuran bahan bakar nabati jenis biodiesel dengan BBM jenis minyak solar.</p> 
      <p> Tujuan program biodiesel ini dimaksudkan untuk meningkatkan pemanfaatan energi baru dan terbarukan, serta mengurangi dampak emisi karbon dari penggunaan BBM. PAMA, sebagai pemegang Izin Usaha Jasa Pertambangan (IUJP), mendukung dan mengikuti semua ketentuan pemerintah terkait dengan pelaksanaan program biodiesel sejak tahun 2018. Bahan bakar yang digunakan PAMA dalam pelaksanaan kegiatan operasional sebagian besar dibeli dan dipasok oleh Pertamina.</p>`,
      image: "/img/img-4.jpg"
    },
    {
      title: "SOBAT",
      description: `<p>Program SOBAT merupakan kontribusi nyata United Tractors melalui program CSR bidang Pendidikan untuk membangun masa depan bangsa yang berkelanjutan. Program ini dilakukan melalui pembinaan dan pendampingan di berbagai jenjang pendidikan sekolah di Indonesia. Program ini tentunya juga sesuai dengan Sustainable Development Goals (SDG’s) poin keempat mengenai pendidikan yang berkualitas secara inklusif dan merata.</p>
      <p>
      Dengan end in mind meningkatkan kapasitas sekolah yang mampu bersaing, tangguh, dan memberikan dampak positif bagi daerah sekitarnya, SOBAT memiliki beberapa indikator:
      </p>
 <ul>
        <li>Menciptakan lulusan/SDM berkualitas yang mampu bekerja dengan ahli sesuai bidangnya</li>
        <li>Membangun reputasi sekolah yang baik dan menjadi sekolah unggulan di wilayahnya..</li>
        <li>Menciptakan prestasi di bidang ilmu pengetahuan, baik teknis maupun non-teknis. </li>

        </ul>
<p>
Sampai dengan saat ini, SOBAT telah membina sebanyak 1.614 sekolah dan 4.728 guru di seluruh Indonesia dengan total nilai bantuan yang telah diberikan untuk sekolah-sekolah dalam 3 tahun terakhir senilai Rp10.000.000.000.
      </p>
      `,
      image: "/img/sustainability-initiative-sobat.jpg"
    }
  ])
  return {
    sustainability
  }
}
