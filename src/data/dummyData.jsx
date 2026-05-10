import { StatusBadge } from '../components/DataTable'

const c = (key, label, width = '120px') => ({ key, label, width })
const sc = (key, label, width = '110px') => ({
  key, label, width,
  render: v => v ? <StatusBadge value={v} /> : '—',
})

// ─────────────────────────────────────────────
// TERRORISTS LIST / POs DETAIL  (25 records)
// ─────────────────────────────────────────────
export const terroristColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('category', 'Category', '130px'),
  c('name', 'Name', '170px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '120px'),
  c('firNo', 'FIR No', '230px'),
  c('namePS', 'Name PS', '110px'),
  c('friendsDetail', 'Friends Detail', '240px'),
  c('cdrDate', 'CDR Obtained', '110px'),
  c('complaint', 'Complaint', '90px'),
  c('redressal', 'Redressal', '90px'),
  c('ctdRecord', 'CTD Record', '100px'),
  c('specialBranch', 'Special Branch', '120px'),
  c('perpetualWarrant', 'Perpetual Warrant', '190px'),
  c('remarksSdpo', 'Remarks SDPO OG 10', '180px'),
  c('remarksDpo', 'Remarks DPO OG 10', '170px'),
  c('property', 'Moveable/Immovable Property', '210px'),
  c('zariaAmaash', 'Zaria Maash', '130px'),
  c('khatKital', 'Khat-O-Kital', '150px'),
  c('searchStrike', 'Search & Strike', '130px'),
  sc('presentStatus', 'Present Status', '120px'),
]

export const terroristData = [
  { id: 2,  category: 'Specific Threat', name: 'Malay Khan',         fatherName: '—',           caste: 'Nasar',         address: 'Nasran',       firNo: '89 dat 07/2/2010 u/s 302/34',    namePS: 'SMA Tank',  friendsDetail: 'Qabal Khan, Nawab Khan, Naseeb Khan r/os Dab Kuli Khel', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '15/09/2015, 02.10.2015', remarksSdpo: '11/09/2015', remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: 'Zamindara',       khatKital: '—',             searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 4,  category: 'General Threat',  name: 'Musa Khan',          fatherName: 'Jahangir',    caste: 'Bhittani',      address: 'Nasran Wali',  firNo: '507 dat 29.8.2013 u/s 302/34',   namePS: 'SMA Tank',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '14/11/2015',             remarksSdpo: '25.12.2014',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: '—',               khatKital: '—',             searchStrike: '—', presentStatus: 'Under Trial' },
  { id: 5,  category: 'General Threat',  name: 'Ghani-Ur-Rehman',    fatherName: 'Habib Ullah', caste: 'Nasar',         address: 'Nasran',       firNo: '75 dat 25/7/1986 u/s 17(3)',     namePS: 'Mullazai',  friendsDetail: 'Ismail @ Dhak Gul Muhammad s/o Saimd Muhammad r/o Wad', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '11/2/1988 SJ DIK 07/16/83 EAC Tank', remarksSdpo: '25.12.2014', remarksDpo: '14.11.2015', property: '17-Marla-687 Kanal', zariaAmaash: 'Nil',             khatKital: '—',             searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 6,  category: 'Specific Threat', name: 'Ain Ullah',          fatherName: 'Saif Ullah',  caste: 'Marwat',        address: 'Andari',       firNo: '231 dat 30.03.2014 u/s 302/34',  namePS: 'Lakki',     friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '11/09/2015',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: 'Labour in Wana',  khatKital: 'No.1409 dt 23/06', searchStrike: '—', presentStatus: 'Active'     },
  { id: 7,  category: 'General Threat',  name: 'Muhammad Khalid',    fatherName: 'Aziz Khan',   caste: 'Bhittani',      address: 'Kot Khalid',   firNo: '95 dat 26.4.2011 u/s 302/324',   namePS: 'Mullazai',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: '—',                 zariaAmaash: '—',               khatKital: '—',             searchStrike: '—', presentStatus: 'Convicted'  },
  { id: 8,  category: 'Specific Threat', name: 'Akhtar Munir',       fatherName: 'Ghulam Jan',  caste: 'Kundi',         address: 'Darraki',      firNo: '231 dat 31.10.2013 u/s 302/32',  namePS: 'Mullazai',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: '—',                 zariaAmaash: '—',               khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 10, category: 'General Threat',  name: 'Masti Khan',         fatherName: 'Duranai',     caste: 'Kundi',         address: 'Darraki',      firNo: '63 dat 04/04/2012 u/s 302/32',   namePS: 'Mullazai',  friendsDetail: 'Muhammad Nawaz s/o Haji Mehmod Khan caste Karki Khel r/o Gul Imam', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '25/12/2014',             remarksSdpo: '25.12.2014',  remarksDpo: '14.11.2015', property: 'Nil',               zariaAmaash: '—',               khatKital: '1287 dat 20.3.2014', searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 11, category: 'Specific Threat', name: 'Gul Khan',           fatherName: 'Duranai',     caste: 'Kundi',         address: 'Darraki',      firNo: '63 dat 04/04/2012 u/s 302/32',   namePS: 'Mullazai',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: 'Zamindara',       khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 12, category: 'General Threat',  name: 'Naseeb Khan',        fatherName: 'Din Muhammad',caste: 'Karki Khel',    address: 'Gul Imam',     firNo: '127 dat 15/06/2010 u/s 302/34',  namePS: 'Gul Imam',  friendsDetail: 'Ghani Khan s/o Habib r/o Nasran, Akber Khan s/o Nasrudin r/o Kundi', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '02/10/2015',             remarksSdpo: '02/10/2015',  remarksDpo: '14/11/2015', property: '—',                 zariaAmaash: 'Pak Army (Retd)', khatKital: '5/9/2015',      searchStrike: '—', presentStatus: 'Under Trial' },
  { id: 13, category: 'Specific Threat', name: 'Mati Ullah',         fatherName: 'Baitullah',   caste: 'Marwat',        address: 'Andari',       firNo: '231 dat 30.03.2014 u/s 302/34',  namePS: 'Lakki',     friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: '—',               khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 14, category: 'General Threat',  name: 'Mubarak Shah',       fatherName: 'Yar Muhammad',caste: 'Shadi Khel',    address: 'Nasran',       firNo: '251 dat 27.6.1996 u/s 302/34',   namePS: 'SMA',       friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '25/12/2014',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: 'Nil',             khatKital: '—',             searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 16, category: 'Specific Threat', name: 'Azad Khan @ Babu',   fatherName: 'Malay Khan',  caste: 'Nasar',         address: 'Nasran',       firNo: '89 dat 7/2/2010 u/s 302/34',     namePS: 'SMA Tank',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: '—',                 zariaAmaash: 'Zamindara',       khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 17, category: 'General Threat',  name: 'Mati Ullah',         fatherName: 'Naseeb Khan', caste: 'Marwat',        address: 'Shadi Khel',   firNo: '219 dat 31/10/2012 u/s 302/4',   namePS: 'Mullazai',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Under Trial' },
  { id: 18, category: 'Specific Threat', name: 'Ameer Nawaz',        fatherName: 'Hayat Ullah', caste: 'Kundi Badin Zai',address: 'Darraki',    firNo: '111 dat 5/9/2014 u/s 302/34',    namePS: 'Gul Imam',  friendsDetail: 'Rehmat Ullah s/o Naurang caste Kundi r/o Darraki', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 19, category: 'General Threat',  name: 'Sadurullah',         fatherName: 'Gul Khan',    caste: 'Kundi',         address: 'Darraki',      firNo: '63 dat 4/4/2012 u/s 302/324',    namePS: 'Mullazai',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 23, category: 'Specific Threat', name: 'Shah Wali',          fatherName: 'Hakim Khan',  caste: 'Kundi',         address: 'Darraki',      firNo: '178 dat 01/08/2015 u/s 324/1',   namePS: 'Gul Imam',  friendsDetail: 'Hamayoun s/o Qutab Khan r/o Kirri Haider', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '11/02/1991 SJ DIK', remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Under Trial' },
  { id: 24, category: 'General Threat',  name: 'Khalil Khan',        fatherName: 'Asad Khan',   caste: 'Kundi',         address: 'Darraki',      firNo: '178 dat 01/08/2015 u/s 324/1',   namePS: 'Gul Imam',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: '—',                 zariaAmaash: 'Zamindara',       khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 25, category: 'Specific Threat', name: 'Hidayat Ullah @ 2D', fatherName: 'Yousaf',      caste: 'Kundi',         address: 'Darraki',      firNo: '231 dat 31/10/2013 u/s 302/3',   namePS: 'Gul Imam',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '17/4/2015',              remarksSdpo: '25/12/2014',  remarksDpo: '14/11/2015', property: '—',                 zariaAmaash: 'Loffar',          khatKital: '17/4/2015',     searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 26, category: 'General Threat',  name: 'Azmat',              fatherName: 'Zargar',      caste: 'Bhittani',      address: 'Kirri Haider', firNo: '111 dat 10/04/1996 u/s 302/3',   namePS: 'SMA',       friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 27, category: 'Specific Threat', name: 'Zar Wali Khan',      fatherName: 'Awal Khan',   caste: 'Bhittani',      address: 'Kirri Haider', firNo: '04 dat 03/01/1996 u/s 302/32',   namePS: 'SMA',       friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Under Trial' },
  { id: 28, category: 'General Threat',  name: 'Ihsan Ullah',        fatherName: 'Nasar',       caste: 'Bhittani',      address: 'Kirri Haider', firNo: '514 dat 31/08/2013 u/s 302/1',   namePS: 'SMA',       friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '11/02/1991 SJ DIK',      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 29, category: 'Specific Threat', name: 'Atta Ullah @ Tulai', fatherName: 'Karim Khan',  caste: 'Bhittani',      address: 'Kirri Haider', firNo: '72 dat 18/4/1978 u/s 302/307',   namePS: 'SMA',       friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: 'Nil',               zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Absconder'  },
  { id: 30, category: 'General Threat',  name: 'Nur Islam',          fatherName: 'Hassan Khan', caste: 'Wazir',         address: 'Wana',         firNo: '143 dat 12/03/2013 u/s 302/34',  namePS: 'Jandola',   friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '12/11/2015',  remarksDpo: '12/11/2015', property: '—',                 zariaAmaash: 'Labour',          khatKital: '—',             searchStrike: '—', presentStatus: 'Under Trial' },
  { id: 31, category: 'Specific Threat', name: 'Bakht Zaman',        fatherName: 'Zar Muhammad',caste: 'Nasar',         address: 'Nasran',       firNo: '167 dat 08/05/2014 u/s 302/34',  namePS: 'SMA Tank',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '11/09/2015',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: 'Zamindara',       khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
  { id: 32, category: 'General Threat',  name: 'Sher Baz Khan',      fatherName: 'Jalat Khan',  caste: 'Kundi',         address: 'Darraki',      firNo: '89 dat 14/06/2013 u/s 302/34',   namePS: 'Gul Imam',  friendsDetail: '—', cdrDate: '—', complaint: '0', redressal: '0', ctdRecord: '0', specialBranch: '0', perpetualWarrant: '—',                      remarksSdpo: '28/11/2014',  remarksDpo: '14/11/2015', property: 'Nil',               zariaAmaash: 'Zamindara',       khatKital: '—',             searchStrike: '—', presentStatus: 'Active'     },
]

export const searchThreatsData = terroristData.filter(r =>
  r.category === 'Specific Threat' || r.category === 'General Threat'
)

// ─────────────────────────────────────────────
// TS FACILITATORS
// ─────────────────────────────────────────────
export const facilitatorColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '140px'),
  c('role', 'Role', '150px'),
  c('contact', 'Contact / Network', '200px'),
  c('firNo', 'FIR No', '200px'),
  c('namePS', 'Police Station', '120px'),
  c('dateAdded', 'Date Added', '110px'),
  sc('status', 'Status', '110px'),
]

export const facilitatorData = [
  { id: 1,  name: 'Haji Kamal Khan',    fatherName: 'Sher Zaman',    caste: 'Nasar',      address: 'Nasran',       role: 'Financier',          contact: 'Linked to TTP Mehsud faction',        firNo: '34 dat 12/03/2014 u/s 11-NACTA', namePS: 'SMA Tank', dateAdded: '15/08/2014', status: 'Active'     },
  { id: 2,  name: 'Noor Baz',           fatherName: 'Gul Baz',       caste: 'Bhittani',   address: 'Kirri Haider', role: 'Logistics',          contact: 'Provides transport & safe houses',    firNo: '56 dat 04/11/2013 u/s 11-NACTA', namePS: 'SMA',      dateAdded: '04/11/2013', status: 'Convicted'  },
  { id: 3,  name: 'Farid Khan',         fatherName: 'Rehmat Khan',   caste: 'Kundi',      address: 'Darraki',      role: 'Recruiter',          contact: 'Recruits youth from Darraki area',    firNo: '91 dat 22/06/2015 u/s 11-NACTA', namePS: 'Gul Imam', dateAdded: '22/06/2015', status: 'Absconder'  },
  { id: 4,  name: 'Waqas Ahmad',        fatherName: 'Niamat Ullah',  caste: 'Marwat',     address: 'Andari',       role: 'Propagandist',       contact: 'Distributes extremist material',      firNo: '12 dat 01/02/2016 u/s 11-NACTA', namePS: 'Lakki',    dateAdded: '01/02/2016', status: 'Under Trial'},
  { id: 5,  name: 'Khan Zaman',         fatherName: 'Paio Khan',     caste: 'Nasar',      address: 'Nasran',       role: 'Financier',          contact: 'Money transfer via hawala',           firNo: '67 dat 08/08/2014 u/s 11-NACTA', namePS: 'SMA Tank', dateAdded: '08/08/2014', status: 'Active'     },
  { id: 6,  name: 'Arshad Khan',        fatherName: 'Saif Khan',     caste: 'Bhittani',   address: 'Kot Khalid',   role: 'Arms Supplier',      contact: 'Sources weapons from Afghanistan',    firNo: '23 dat 15/09/2015 u/s 11-NACTA', namePS: 'Mullazai', dateAdded: '15/09/2015', status: 'Arrested'   },
  { id: 7,  name: 'Zia Ullah',          fatherName: 'Muhammad Amin', caste: 'Kundi',      address: 'Darraki',      role: 'Messenger',          contact: 'Carries messages between cells',      firNo: '—',                              namePS: 'Gul Imam', dateAdded: '20/01/2016', status: 'Active'     },
  { id: 8,  name: 'Haji Saif-ud-Din',   fatherName: 'Allah Bakhsh',  caste: 'Shadi Khel', address: 'Nasran',       role: 'Financier',          contact: 'Shop owner, funds operations',        firNo: '44 dat 03/05/2015 u/s 11-NACTA', namePS: 'SMA',      dateAdded: '03/05/2015', status: 'Under Trial'},
  { id: 9,  name: 'Nek Muhammad',       fatherName: 'Wali Khan',     caste: 'Wazir',      address: 'Wana',         role: 'Safe House Provider', contact: 'Operates safe houses in Wana',       firNo: '18 dat 11/11/2015 u/s 11-NACTA', namePS: 'Jandola',  dateAdded: '11/11/2015', status: 'Active'     },
  { id: 10, name: 'Dost Muhammad',      fatherName: 'Feroz Khan',    caste: 'Karki Khel', address: 'Gul Imam',     role: 'Intelligence',       contact: 'Feeds security info to militants',    firNo: '77 dat 07/07/2015 u/s 11-NACTA', namePS: 'Gul Imam', dateAdded: '07/07/2015', status: 'Absconder'  },
  { id: 11, name: 'Salim Ullah',        fatherName: 'Hussain Khan',  caste: 'Nasar',      address: 'Nasran',       role: 'Recruiter',          contact: 'Targets madrassa students',           firNo: '31 dat 19/03/2016 u/s 11-NACTA', namePS: 'SMA Tank', dateAdded: '19/03/2016', status: 'Under Trial'},
  { id: 12, name: 'Gul Faraz',          fatherName: 'Umer Khan',     caste: 'Bhittani',   address: 'Kirri Haider', role: 'Logistics',          contact: 'Vehicle & fuel supplier',             firNo: '55 dat 28/09/2014 u/s 11-NACTA', namePS: 'SMA',      dateAdded: '28/09/2014', status: 'Convicted'  },
]

// ─────────────────────────────────────────────
// HEAD MONEY
// ─────────────────────────────────────────────
export const headMoneyColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '130px'),
  c('crime', 'Crime / Charges', '200px'),
  c('firNo', 'FIR No', '210px'),
  c('reward', 'Reward (Rs.)', '110px'),
  c('announced', 'Date Announced', '130px'),
  c('namePS', 'Police Station', '120px'),
  sc('status', 'Status', '110px'),
  c('remarks', 'Remarks', '200px'),
]

export const headMoneyData = [
  { id: 1,  name: 'Gul Zaman',          fatherName: 'Amir Jan',       caste: 'Nasar',      address: 'Nasran',       crime: 'Murder u/s 302 PPC',               firNo: '112 dat 14/04/2011', reward: '500,000',   announced: '15/09/2013', namePS: 'SMA Tank', status: 'Active'     },
  { id: 2,  name: 'Sher Bahadur',       fatherName: 'Khan Zaman',     caste: 'Bhittani',   address: 'Kirri Haider', crime: 'Murder + Terrorism u/s 302/11-NACTA', firNo: '78 dat 22/08/2013', reward: '1,000,000', announced: '01/01/2014', namePS: 'SMA',      status: 'Absconder'  },
  { id: 3,  name: 'Noor Gul @ Kala',    fatherName: 'Rehmat Gul',     caste: 'Kundi',      address: 'Darraki',      crime: 'Kidnapping + Robbery u/s 365-A/392', firNo: '43 dat 05/03/2014', reward: '300,000',   announced: '10/04/2014', namePS: 'Gul Imam', status: 'Active'     },
  { id: 4,  name: 'Taj Muhammad',       fatherName: 'Din Muhammad',   caste: 'Marwat',     address: 'Andari',       crime: 'Murder u/s 302 PPC',               firNo: '211 dat 17/07/2012', reward: '500,000',   announced: '20/09/2012', namePS: 'Lakki',    status: 'Arrested'   },
  { id: 5,  name: 'Hamid Khan',         fatherName: 'Gul Rahman',     caste: 'Nasar',      address: 'Nasran',       crime: 'Robbery + Murder u/s 392/302',     firNo: '89 dat 12/02/2015', reward: '700,000',   announced: '01/03/2015', namePS: 'SMA Tank', status: 'Active'     },
  { id: 6,  name: 'Rashid Khan',        fatherName: 'Muhammad Ayaz',  caste: 'Bhittani',   address: 'Kot Khalid',   crime: 'Terrorism u/s 7-ATA',              firNo: '56 dat 08/06/2013', reward: '2,000,000', announced: '15/07/2013', namePS: 'Mullazai', status: 'Absconder'  },
  { id: 7,  name: 'Niaz Muhammad',      fatherName: 'Said Ahmad',     caste: 'Wazir',      address: 'Wana',         crime: 'Murder + Arms u/s 302/13-AO',      firNo: '32 dat 29/09/2014', reward: '500,000',   announced: '10/10/2014', namePS: 'Jandola',  status: 'Active'     },
  { id: 8,  name: 'Imran Khan @ Lala',  fatherName: 'Feroz Khan',     caste: 'Kundi',      address: 'Darraki',      crime: 'Robbery u/s 392 PPC',              firNo: '67 dat 11/11/2014', reward: '300,000',   announced: '01/12/2014', namePS: 'Gul Imam', status: 'Convicted'  },
  { id: 9,  name: 'Shah Nawaz',         fatherName: 'Bahadar Khan',   caste: 'Karki Khel', address: 'Gul Imam',     crime: 'Murder + Dacoity u/s 302/412',     firNo: '99 dat 03/03/2013', reward: '750,000',   announced: '15/04/2013', namePS: 'Gul Imam', status: 'Absconder'  },
  { id: 10, name: 'Pervaiz Khan',       fatherName: 'Wahid Khan',     caste: 'Shadi Khel', address: 'Nasran',       crime: 'Kidnapping u/s 365-A PPC',         firNo: '14 dat 19/05/2015', reward: '1,000,000', announced: '01/06/2015', namePS: 'SMA',      status: 'Active'     },
  { id: 11, name: 'Habib Ur Rehman',    fatherName: 'Noor Khan',      caste: 'Nasar',      address: 'Nasran',       crime: 'Murder u/s 302 PPC',               firNo: '188 dat 27/08/2012', reward: '500,000',  announced: '05/10/2012', namePS: 'SMA Tank', status: 'Active'     },
  { id: 12, name: 'Jawad Ullah',                    fatherName: 'Jalal Khan',     caste: 'Bhittani',   address: 'Kirri Haider', crime: 'Terrorism + Murder u/s 7-ATA/302',                                                  firNo: '61 dat 15/02/2016',                                                                                                   reward: '1,500,000',  announced: '01/03/2016', namePS: 'SMA',       status: 'Under Trial', remarks: '' },
  { id: 13, name: 'Molvi Abdul Baseer',             fatherName: 'Din Muhammad',   caste: 'Battani',    address: 'Kirri Marwati',crime: 'Terrorism u/s 302-324-353-10-20B-427-148-149-3/4ESA-7ATA',                               firNo: 'FIR No 73 dat 22-05-2023 u/s 302-324-353-10-20B-427-148-149-3/4ESA-7ATA PS CTD DIK',   reward: '9,000,000',  announced: '—',         namePS: 'CTD DIKhan', status: 'Active',      remarks: 'Owner of Molvi Baseer Bittani Group; Declared PO; Listed in 4th Schedule' },
  { id: 14, name: 'Commander Molvie Daud',          fatherName: 'Makin Khan',     caste: 'Battani',    address: 'Kari Umar Khan',crime: 'Terrorism u/s 302-324-353-3/4ESA-7ATA',                                                  firNo: 'FIR No 63 dat 29.09.2021 u/s 302-324-353-148-149-15AA-5ESA-7ATA PS CTD DIKhan',         reward: '10,000,000', announced: '—',         namePS: 'CTD DIKhan', status: 'Active',      remarks: 'Owner of Mansoori Karwan (Daud Bittani Group); Declared PO; Listed in 4th Schedule' },
  { id: 15, name: 'Gulamat @ Javed @ Mukhlis Qari', fatherName: 'Malay Khan',    caste: 'Battani',    address: 'Dabak Kala',   crime: 'Terrorism u/s 302-324-353-7ATA, multiple FIRs',                                           firNo: 'FIR No 35 dat 30.03.2022 u/s 302-324-353-15AA-4/5ESA-7ATA PS CTD DIKhan',               reward: '6,000,000',  announced: '—',         namePS: 'CTD DIKhan', status: 'Active',      remarks: 'Mansoori Karwan (Daud Bittani Group); Declared PO; Listed in 4th Schedule' },
  { id: 16, name: 'Kalim Ullah @ Usman',            fatherName: 'Salam Gul',     caste: 'Battani',    address: 'Gara Budah',   crime: 'Terrorism u/s 302-324-353-365A-387-3/4ESA-7ATA',                                          firNo: 'FIR No 30 dat 14-09-2019 u/s 365A-387-7HATA PS CTD DIK',                                reward: '6,000,000',  announced: '—',         namePS: 'CTD DIKhan', status: 'Active',      remarks: 'Baseer Bittani Group; Declared PO; Listed in 4th Schedule' },
]

// ─────────────────────────────────────────────
// 4TH SCHEDULE
// ─────────────────────────────────────────────
export const fourthScheduleColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '130px'),
  c('cnic', 'CNIC', '140px'),
  c('section', 'Section', '140px'),
  c('dateEntered', 'Notification No.', '140px'),
  c('dateExpiry', 'Notification Date', '140px'),
  c('namePS', 'Police Station', '120px'),
  c('bailBondDetail', 'Bail Bond Detail', '160px'),
  c('remarks', 'Remarks', '200px'),
  sc('status', 'Status', '110px'),
  c('diccDecision', 'DICC Decision', '160px'),
]

export const fourthScheduleData = [
  { id: 1,  name: 'Khaista Khan',       fatherName: 'Lal Khan',       caste: 'Nasar',      address: 'Nasran',       cnic: '12301-1234567-1', section: 'Sec 11-B ATA',  dateEntered: '12/04/2014', dateExpiry: '12/04/2016', namePS: 'SMA Tank', remarks: 'Links with banned org',           status: 'Active'     },
  { id: 2,  name: 'Nawab Khan',         fatherName: 'Shah Jehan',     caste: 'Kundi',      address: 'Darraki',      cnic: '12301-7654321-9', section: 'Sec 11-B ATA',  dateEntered: '05/07/2015', dateExpiry: '05/07/2017', namePS: 'Gul Imam', remarks: 'Suspected facilitator',          status: 'Active'     },
  { id: 3,  name: 'Tariq Ullah',        fatherName: 'Allah Baksh',    caste: 'Bhittani',   address: 'Kirri Haider', cnic: '12301-1111111-3', section: 'Sec 11-B ATA',  dateEntered: '19/01/2013', dateExpiry: '19/01/2015', namePS: 'SMA',      remarks: 'Previously convicted u/s 302',   status: 'Expired'    },
  { id: 4,  name: 'Gul Nabi',           fatherName: 'Noor Zaman',     caste: 'Marwat',     address: 'Andari',       cnic: '12301-2222222-5', section: 'Sec 11-B ATA',  dateEntered: '08/03/2015', dateExpiry: '08/03/2017', namePS: 'Lakki',    remarks: 'Watched for extremist activities', status: 'Active'     },
  { id: 5,  name: 'Karim Ullah',        fatherName: 'Wali Muhammad',  caste: 'Nasar',      address: 'Nasran',       cnic: '12301-3333333-7', section: 'Sec 11-B ATA',  dateEntered: '22/09/2014', dateExpiry: '22/09/2016', namePS: 'SMA Tank', remarks: 'Relative of designated PO',      status: 'Active'     },
  { id: 6,  name: 'Samiullah',          fatherName: 'Khalid Khan',    caste: 'Kundi',      address: 'Darraki',      cnic: '12301-4444444-1', section: 'Sec 11-B ATA',  dateEntered: '14/06/2013', dateExpiry: '14/06/2015', namePS: 'Mullazai', remarks: 'Habitual offender, arms case',    status: 'Expired'    },
  { id: 7,  name: 'Zubair Khan',        fatherName: 'Asif Khan',      caste: 'Bhittani',   address: 'Kot Khalid',   cnic: '12301-5555555-3', section: 'Sec 11-B ATA',  dateEntered: '30/11/2015', dateExpiry: '30/11/2017', namePS: 'Mullazai', remarks: 'Monitored for propaganda',       status: 'Active'     },
  { id: 8,  name: 'Faqir Muhammad',     fatherName: 'Shah Mir',       caste: 'Wazir',      address: 'Wana',         cnic: '12301-6666666-5', section: 'Sec 11-B ATA',  dateEntered: '17/04/2015', dateExpiry: '17/04/2017', namePS: 'Jandola',  remarks: 'Cross-border links suspected',   status: 'Active'     },
  { id: 9,  name: 'Nisar Ahmad',        fatherName: 'Gulzar Khan',    caste: 'Karki Khel', address: 'Gul Imam',     cnic: '12301-7777777-7', section: 'Sec 11-B ATA',  dateEntered: '03/08/2013', dateExpiry: '03/08/2015', namePS: 'Gul Imam', remarks: 'Released after serving sentence', status: 'Expired'    },
  { id: 10, name: 'Waris Khan',         fatherName: 'Paio Khan',      caste: 'Shadi Khel', address: 'Nasran',       cnic: '12301-8888888-9', section: 'Sec 11-B ATA',  dateEntered: '25/02/2016', dateExpiry: '25/02/2018', namePS: 'SMA',      remarks: 'Propaganda & incitement',        status: 'Active'     },
  { id: 11, name: 'Fida Muhammad',      fatherName: 'Rehmat Ali',     caste: 'Nasar',      address: 'Nasran',       cnic: '12301-9999999-1', section: 'Sec 11-B ATA',  dateEntered: '12/10/2014', dateExpiry: '12/10/2016', namePS: 'SMA Tank', remarks: 'Arms recovery in 2014',          status: 'Active'     },
  { id: 12, name: 'Bashir Ahmad',       fatherName: 'Ahmad Khan',     caste: 'Bhittani',   address: 'Kirri Haider', cnic: '12301-1212121-3', section: 'Sec 11-B ATA',  dateEntered: '06/07/2015', dateExpiry: '06/07/2017', namePS: 'SMA',      remarks: 'Frequent travel to tribal areas', status: 'Active'     },
]

// ─────────────────────────────────────────────
// CRO (Criminal Record Office)
// ─────────────────────────────────────────────
export const croColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '130px'),
  c('crime', 'Crime', '180px'),
  c('section', 'Section', '150px'),
  c('firNo', 'FIR No', '200px'),
  c('conviction', 'Conviction Date', '130px'),
  c('sentence', 'Sentence', '130px'),
  c('namePS', 'Police Station', '120px'),
  sc('status', 'Status', '110px'),
]

export const croData = [
  { id: 1,  name: 'Zarif Khan',         fatherName: 'Shah Wali',      caste: 'Nasar',      address: 'Nasran',       crime: 'Murder',      section: 'u/s 302/34 PPC',    firNo: '55 dat 11/05/2009',  conviction: '14/03/2011', sentence: 'Life Imprisonment', namePS: 'SMA Tank', status: 'Convicted'  },
  { id: 2,  name: 'Mir Gul',            fatherName: 'Gul Mir',        caste: 'Kundi',      address: 'Darraki',      crime: 'Robbery',     section: 'u/s 392/34 PPC',    firNo: '78 dat 02/07/2012',  conviction: '09/11/2013', sentence: '7 Years',           namePS: 'Gul Imam', status: 'Convicted'  },
  { id: 3,  name: 'Sher Afzal',         fatherName: 'Afzal Khan',     caste: 'Bhittani',   address: 'Kirri Haider', crime: 'Dacoity',     section: 'u/s 412/34 PPC',    firNo: '34 dat 18/02/2013',  conviction: '22/08/2014', sentence: '10 Years',          namePS: 'SMA',      status: 'Convicted'  },
  { id: 4,  name: 'Mujahid Khan',       fatherName: 'Nasrullah',      caste: 'Marwat',     address: 'Andari',       crime: 'Arms Offense',section: 'u/s 13-AO 1965',    firNo: '12 dat 29/10/2014',  conviction: '15/06/2015', sentence: '3 Years',           namePS: 'Lakki',    status: 'Released'   },
  { id: 5,  name: 'Habib Khan',         fatherName: 'Zaman Khan',     caste: 'Nasar',      address: 'Nasran',       crime: 'Murder',      section: 'u/s 302/324 PPC',   firNo: '99 dat 07/03/2010',  conviction: '18/12/2011', sentence: '25 Years',          namePS: 'SMA Tank', status: 'Convicted'  },
  { id: 6,  name: 'Hazrat Gul',         fatherName: 'Said Gul',       caste: 'Wazir',      address: 'Wana',         crime: 'Terrorism',   section: 'u/s 7-ATA 1997',    firNo: '23 dat 15/04/2013',  conviction: '03/11/2014', sentence: '14 Years',          namePS: 'Jandola',  status: 'Convicted'  },
  { id: 7,  name: 'Noor Zaman',         fatherName: 'Awal Zaman',     caste: 'Kundi',      address: 'Darraki',      crime: 'Kidnapping',  section: 'u/s 365-A PPC',     firNo: '67 dat 09/08/2011',  conviction: '14/05/2013', sentence: '10 Years',          namePS: 'Mullazai', status: 'Convicted'  },
  { id: 8,  name: 'Allah Noor',         fatherName: 'Dilbar Khan',    caste: 'Bhittani',   address: 'Kot Khalid',   crime: 'Drug Offense', section: 'u/s 9-CNSA 1997',   firNo: '44 dat 21/09/2015',  conviction: '08/04/2016', sentence: '5 Years',           namePS: 'Mullazai', status: 'Convicted'  },
  { id: 9,  name: 'Javed Iqbal',        fatherName: 'Iqbal Khan',     caste: 'Karki Khel', address: 'Gul Imam',     crime: 'Robbery',     section: 'u/s 392 PPC',       firNo: '88 dat 14/12/2013',  conviction: '19/07/2015', sentence: '7 Years',           namePS: 'Gul Imam', status: 'Released'   },
  { id: 10, name: 'Badshah Khan',       fatherName: 'Hussain Khan',   caste: 'Shadi Khel', address: 'Nasran',       crime: 'Murder',      section: 'u/s 302 PPC',       firNo: '101 dat 30/05/2008', conviction: '22/02/2010', sentence: 'Death Sentence',    namePS: 'SMA',      status: 'Convicted'  },
  { id: 11, name: 'Fazal Karim',        fatherName: 'Ghulam Karim',   caste: 'Nasar',      address: 'Nasran',       crime: 'Arms Offense', section: 'u/s 13-AO 1965',    firNo: '38 dat 17/03/2016',  conviction: '11/10/2016', sentence: '2 Years',           namePS: 'SMA Tank', status: 'Released'   },
  { id: 12, name: 'Muhammad Idris',     fatherName: 'Sultan Khan',    caste: 'Bhittani',   address: 'Kirri Haider', crime: 'Dacoity',     section: 'u/s 412/34 PPC',    firNo: '72 dat 05/06/2014',  conviction: '28/01/2016', sentence: '8 Years',           namePS: 'SMA',      status: 'Convicted'  },
]

// ─────────────────────────────────────────────
// DRUG PEDDLERS
// ─────────────────────────────────────────────
export const drugColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '130px'),
  c('drugType', 'Drug Type', '120px'),
  c('quantity', 'Quantity', '100px'),
  c('firNo', 'FIR No', '200px'),
  c('namePS', 'Police Station', '120px'),
  c('arrestDate', 'Arrest Date', '110px'),
  sc('status', 'Status', '110px'),
]

export const drugData = [
  { id: 1,  name: 'Khaista Gul',        fatherName: 'Lal Khan',       caste: 'Nasar',      address: 'Nasran',       drugType: 'Heroin',                quantity: '250g',    firNo: '45 dat 12/03/2018 u/s 9-CNSA', namePS: 'SMA Tank', arrestDate: '12/03/2018', status: 'Convicted'  },
  { id: 2,  name: 'Noor Ahmad',         fatherName: 'Shah Jehan',     caste: 'Kundi',      address: 'Darraki',      drugType: 'Charas',                quantity: '1.5 kg',  firNo: '78 dat 05/07/2019 u/s 9-CNSA', namePS: 'Mullazai', arrestDate: '05/07/2019', status: 'Under Trial'},
  { id: 3,  name: 'Fazal Rahim',        fatherName: 'Gul Rahim',      caste: 'Bhittani',   address: 'Kirri Haider', drugType: 'Opium',                 quantity: '2.3 kg',  firNo: '23 dat 18/01/2017 u/s 9-CNSA', namePS: 'SMA',      arrestDate: '18/01/2017', status: 'Convicted'  },
  { id: 4,  name: 'Wali Jan',           fatherName: 'Jan Muhammad',   caste: 'Marwat',     address: 'Andari',       drugType: 'Ice (Meth)',            quantity: '80g',     firNo: '56 dat 29/08/2020 u/s 9-CNSA', namePS: 'Lakki',    arrestDate: '29/08/2020', status: 'Under Trial'},
  { id: 5,  name: 'Niamatullah',        fatherName: 'Saif Ullah',     caste: 'Nasar',      address: 'Nasran',       drugType: 'Heroin',                quantity: '350g',    firNo: '89 dat 03/11/2018 u/s 9-CNSA', namePS: 'SMA Tank', arrestDate: '03/11/2018', status: 'Convicted'  },
  { id: 6,  name: 'Rehmat Gul',         fatherName: 'Gul Nabi',       caste: 'Kundi',      address: 'Darraki',      drugType: 'Charas',                quantity: '4.1 kg',  firNo: '34 dat 16/04/2019 u/s 9-CNSA', namePS: 'Gul Imam', arrestDate: '16/04/2019', status: 'Convicted'  },
  { id: 7,  name: 'Sajid Khan',         fatherName: 'Feroz Khan',     caste: 'Wazir',      address: 'Wana',         drugType: 'Morphine',              quantity: '500g',    firNo: '11 dat 07/02/2021 u/s 9-CNSA', namePS: 'Jandola',  arrestDate: '07/02/2021', status: 'Under Trial'},
  { id: 8,  name: 'Miran Shah',         fatherName: 'Shah Mir',       caste: 'Bhittani',   address: 'Kot Khalid',   drugType: 'Heroin',                quantity: '180g',    firNo: '67 dat 22/06/2018 u/s 9-CNSA', namePS: 'Mullazai', arrestDate: '22/06/2018', status: 'Convicted'  },
  { id: 9,  name: 'Zarif Ullah',        fatherName: 'Zarif Khan',     caste: 'Karki Khel', address: 'Gul Imam',     drugType: 'Charas',                quantity: '800g',    firNo: '92 dat 30/09/2019 u/s 9-CNSA', namePS: 'Gul Imam', arrestDate: '30/09/2019', status: 'Convicted'  },
  { id: 10, name: 'Shaukat Ali',        fatherName: 'Ali Khan',       caste: 'Shadi Khel', address: 'Nasran',       drugType: 'Ice (Meth)',            quantity: '120g',    firNo: '15 dat 14/03/2022 u/s 9-CNSA', namePS: 'SMA',      arrestDate: '14/03/2022', status: 'Under Trial'},
  { id: 11, name: 'Ghulam Mustafa',     fatherName: 'Mustafa Khan',   caste: 'Nasar',      address: 'Nasran',       drugType: 'Opium',                 quantity: '3.6 kg',  firNo: '43 dat 08/08/2017 u/s 9-CNSA', namePS: 'SMA Tank', arrestDate: '08/08/2017', status: 'Convicted'  },
  { id: 12, name: 'Daud Khan',          fatherName: 'Dost Khan',      caste: 'Bhittani',   address: 'Kirri Haider', drugType: 'Heroin',                quantity: '410g',    firNo: '28 dat 19/12/2020 u/s 9-CNSA', namePS: 'SMA',      arrestDate: '19/12/2020', status: 'Under Trial'},
  { id: 13, name: 'Saleh Muhammad',     fatherName: 'Baz Muhammad',   caste: 'Kundi',      address: 'Darraki',      drugType: 'Charas',                quantity: '2.0 kg',  firNo: '37 dat 11/05/2021 u/s 9-CNSA', namePS: 'Mullazai', arrestDate: '11/05/2021', status: 'Convicted'  },
]

// ─────────────────────────────────────────────
// SNATCHERS
// ─────────────────────────────────────────────
export const snatcherColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '130px'),
  c('items', 'Items Snatched', '200px'),
  c('vehicle', 'Vehicle Used', '140px'),
  c('incidentDate', 'Incident Date', '120px'),
  c('firNo', 'FIR No', '200px'),
  c('namePS', 'Police Station', '120px'),
  sc('status', 'Status', '110px'),
]

export const snatcherData = [
  { id: 1,  name: 'Kamran Khan',        fatherName: 'Babar Khan',     caste: 'Nasar',      address: 'Nasran',       items: 'Honda CD70 + Mobile Phone',    vehicle: 'Honda CG125',    incidentDate: '03/04/2022', firNo: '22 dat 03/04/2022 u/s 382',  namePS: 'SMA Tank', status: 'Arrested'   },
  { id: 2,  name: 'Shahid Ullah',       fatherName: 'Amin Ullah',     caste: 'Kundi',      address: 'Darraki',      items: 'Cash Rs. 25,000 + Gold Ring',  vehicle: 'Yamaha YBR',     incidentDate: '14/07/2022', firNo: '51 dat 14/07/2022 u/s 382',  namePS: 'Gul Imam', status: 'Under Trial'},
  { id: 3,  name: 'Zahir Shah',         fatherName: 'Khan Shah',      caste: 'Bhittani',   address: 'Kirri Haider', items: 'Honda 125 Motorcycle',         vehicle: 'On foot',        incidentDate: '22/01/2022', firNo: '08 dat 22/01/2022 u/s 392',  namePS: 'SMA',      status: 'Convicted'  },
  { id: 4,  name: 'Fawad Ahmad',        fatherName: 'Ahmad Jan',      caste: 'Marwat',     address: 'Andari',       items: 'Mobile Phone + Cash 15,000',   vehicle: 'Honda CD70',     incidentDate: '05/11/2021', firNo: '77 dat 05/11/2021 u/s 382',  namePS: 'Lakki',    status: 'Arrested'   },
  { id: 5,  name: 'Wasim Akram',        fatherName: 'Akram Ullah',    caste: 'Nasar',      address: 'Nasran',       items: 'Laptop + Bag',                 vehicle: 'Honda CG125',    incidentDate: '18/03/2023', firNo: '14 dat 18/03/2023 u/s 382',  namePS: 'SMA Tank', status: 'Under Trial'},
  { id: 6,  name: 'Bilal Khan',         fatherName: 'Ikram Khan',     caste: 'Kundi',      address: 'Darraki',      items: 'Cash Rs. 50,000 (shopkeeper)', vehicle: 'Honda 125',      incidentDate: '29/08/2022', firNo: '64 dat 29/08/2022 u/s 392',  namePS: 'Mullazai', status: 'Convicted'  },
  { id: 7,  name: 'Irfan Ullah',        fatherName: 'Noor Ullah',     caste: 'Wazir',      address: 'Wana',         items: 'Mobile Phone x2 + Watch',     vehicle: 'Honda CD70',     incidentDate: '11/06/2023', firNo: '39 dat 11/06/2023 u/s 382',  namePS: 'Jandola',  status: 'Under Trial'},
  { id: 8,  name: 'Asad Ali',           fatherName: 'Ali Gul',        caste: 'Bhittani',   address: 'Kot Khalid',   items: 'Suzuki GS150 Motorcycle',      vehicle: 'On foot',        incidentDate: '07/02/2022', firNo: '11 dat 07/02/2022 u/s 392',  namePS: 'Mullazai', status: 'Arrested'   },
  { id: 9,  name: 'Naveed Khan',        fatherName: 'Murad Khan',     caste: 'Karki Khel', address: 'Gul Imam',     items: 'Cash Rs. 80,000 (bank)',       vehicle: 'Honda CG125',    incidentDate: '25/09/2021', firNo: '88 dat 25/09/2021 u/s 392',  namePS: 'Gul Imam', status: 'Convicted'  },
  { id: 10, name: 'Salman Khan',        fatherName: 'Rehman Khan',    caste: 'Shadi Khel', address: 'Nasran',       items: 'Mobile + Gold Jewellery',      vehicle: 'Honda CD70',     incidentDate: '16/04/2023', firNo: '27 dat 16/04/2023 u/s 382',  namePS: 'SMA',      status: 'Under Trial'},
  { id: 11, name: 'Usman Gul',          fatherName: 'Gul Zaman',      caste: 'Nasar',      address: 'Nasran',       items: 'Honda 70 + Mobile Phone',      vehicle: 'On foot',        incidentDate: '03/01/2023', firNo: '02 dat 03/01/2023 u/s 382',  namePS: 'SMA Tank', status: 'Arrested'   },
]

// ─────────────────────────────────────────────
// DACOIT / ROBBERS
// ─────────────────────────────────────────────
export const dacoitColumns = [
  c('id', 'ID', '48px'),
  { key: 'photo', label: 'Photo', width: '68px', render: v => v ? <img src={v} alt="" style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} /> : '—' },
  c('name', 'Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('caste', 'Caste', '100px'),
  c('address', 'Address', '130px'),
  c('crimeDetails', 'Crime Details', '230px'),
  c('gangSize', 'Gang Size', '90px'),
  c('firNo', 'FIR No', '210px'),
  c('incidentDate', 'Incident Date', '120px'),
  c('namePS', 'Police Station', '120px'),
  sc('status', 'Status', '110px'),
]

export const dacoitData = [
  { id: 1,  name: 'Painda Khan',        fatherName: 'Mast Khan',      caste: 'Nasar',      address: 'Nasran',       crimeDetails: 'Armed robbery at petrol pump, Rs. 200,000',     gangSize: '4',  firNo: '31 dat 05/02/2020 u/s 412/34', incidentDate: '05/02/2020', namePS: 'SMA Tank', status: 'Arrested'   },
  { id: 2,  name: 'Nasrullah @ Kala',   fatherName: 'Ullah Jan',      caste: 'Kundi',      address: 'Darraki',      crimeDetails: 'Dacoity at farmhouse, Rs. 150,000 + jewellery', gangSize: '6',  firNo: '53 dat 11/06/2021 u/s 412/34', incidentDate: '11/06/2021', namePS: 'Gul Imam', status: 'Convicted'  },
  { id: 3,  name: 'Zafar Iqbal',        fatherName: 'Muhammad Iqbal', caste: 'Bhittani',   address: 'Kirri Haider', crimeDetails: 'Highway robbery, looted 3 vehicles',            gangSize: '5',  firNo: '19 dat 28/09/2019 u/s 392/34', incidentDate: '28/09/2019', namePS: 'SMA',      status: 'Under Trial'},
  { id: 4,  name: 'Kamaluddin',         fatherName: 'Din Muhammad',   caste: 'Marwat',     address: 'Andari',       crimeDetails: 'Bank robbery, Rs. 1.2 million taken',           gangSize: '8',  firNo: '07 dat 14/03/2022 u/s 392/34', incidentDate: '14/03/2022', namePS: 'Lakki',    status: 'Under Trial'},
  { id: 5,  name: 'Adalat Khan',        fatherName: 'Adalat Mir',     caste: 'Nasar',      address: 'Nasran',       crimeDetails: 'Dacoity at wedding, cash + jewels stolen',      gangSize: '3',  firNo: '44 dat 07/07/2021 u/s 412',    incidentDate: '07/07/2021', namePS: 'SMA Tank', status: 'Absconder'  },
  { id: 6,  name: 'Kalo Khan @ Tiger',  fatherName: 'Feroz Khan',     caste: 'Kundi',      address: 'Darraki',      crimeDetails: 'Armed robbery at medical store',                gangSize: '2',  firNo: '66 dat 19/11/2020 u/s 382/34', incidentDate: '19/11/2020', namePS: 'Mullazai', status: 'Convicted'  },
  { id: 7,  name: 'Hasan Gul',          fatherName: 'Gul Hasan',      caste: 'Wazir',      address: 'Wana',         crimeDetails: 'Looting of supplies truck on main road',        gangSize: '7',  firNo: '25 dat 02/04/2019 u/s 412/34', incidentDate: '02/04/2019', namePS: 'Jandola',  status: 'Convicted'  },
  { id: 8,  name: 'Dilawer Khan',       fatherName: 'Bahadur Khan',   caste: 'Bhittani',   address: 'Kot Khalid',   crimeDetails: 'Robbery with firearm, 1 injured',               gangSize: '3',  firNo: '82 dat 30/08/2022 u/s 392/34', incidentDate: '30/08/2022', namePS: 'Mullazai', status: 'Under Trial'},
  { id: 9,  name: 'Qalandar Khan',      fatherName: 'Malik Khan',     caste: 'Karki Khel', address: 'Gul Imam',     crimeDetails: 'House robbery, Rs. 300,000 + weapons',          gangSize: '5',  firNo: '16 dat 21/12/2020 u/s 412/34', incidentDate: '21/12/2020', namePS: 'Gul Imam', status: 'Convicted'  },
  { id: 10, name: 'Manzoor Khan',       fatherName: 'Wazir Khan',     caste: 'Shadi Khel', address: 'Nasran',       crimeDetails: 'Mobile robbery at gunpoint',                    gangSize: '2',  firNo: '39 dat 08/05/2023 u/s 382',    incidentDate: '08/05/2023', namePS: 'SMA',      status: 'Arrested'   },
  { id: 11, name: 'Rashid Gul',         fatherName: 'Said Gul',       caste: 'Nasar',      address: 'Nasran',       crimeDetails: 'Kidnapping + ransom Rs. 500,000',               gangSize: '4',  firNo: '59 dat 17/09/2021 u/s 365-A',  incidentDate: '17/09/2021', namePS: 'SMA Tank', status: 'Convicted'  },
  { id: 12, name: 'Murad Bakhsh',       fatherName: 'Gul Bakhsh',     caste: 'Bhittani',   address: 'Kirri Haider', crimeDetails: 'Dacoity at shops in bazaar',                    gangSize: '6',  firNo: '71 dat 23/06/2022 u/s 412/34', incidentDate: '23/06/2022', namePS: 'SMA',      status: 'Under Trial'},
]

// ─────────────────────────────────────────────
// FIR FOUND NOTIFICATION
// ─────────────────────────────────────────────
export const firColumns = [
  c('id', 'ID', '48px'),
  c('firNo', 'FIR No', '90px'),
  c('firDate', 'FIR Date', '110px'),
  c('section', 'Section / Offense', '200px'),
  c('accused', 'Accused Name', '160px'),
  c('accusedFather', 'Father Name', '140px'),
  c('address', 'Address', '130px'),
  c('namePS', 'Police Station', '120px'),
  c('dispatchDate', 'Dispatch Date', '120px'),
  c('receivedBy', 'Received By', '150px'),
  sc('status', 'Status', '110px'),
]

export const firData = [
  { id: 1,  firNo: '112/2023', firDate: '03/01/2023', section: 'u/s 302/34 PPC (Murder)',         accused: 'Zarif Khan',      accusedFather: 'Shah Wali',    address: 'Nasran',       namePS: 'SMA Tank', dispatchDate: '04/01/2023', receivedBy: 'SP Investigation', status: 'Pending'    },
  { id: 2,  firNo: '045/2023', firDate: '12/02/2023', section: 'u/s 9-CNSA (Drug Offense)',       accused: 'Noor Ahmad',      accusedFather: 'Shah Jehan',   address: 'Darraki',      namePS: 'Mullazai', dispatchDate: '13/02/2023', receivedBy: 'DSP Mullazai',     status: 'Pending'    },
  { id: 3,  firNo: '289/2022', firDate: '18/07/2022', section: 'u/s 7-ATA (Terrorism)',           accused: 'Farid Khan',      accusedFather: 'Rehmat Khan',  address: 'Kirri Haider', namePS: 'SMA',      dispatchDate: '19/07/2022', receivedBy: 'SP Operations',    status: 'Active'     },
  { id: 4,  firNo: '178/2023', firDate: '29/04/2023', section: 'u/s 392/34 PPC (Robbery)',        accused: 'Kamran Khan',     accusedFather: 'Babar Khan',   address: 'Nasran',       namePS: 'SMA Tank', dispatchDate: '30/04/2023', receivedBy: 'DSP Tank',         status: 'Pending'    },
  { id: 5,  firNo: '067/2022', firDate: '19/03/2022', section: 'u/s 302/324 PPC (Attempt Murder)',accused: 'Habib Khan',      accusedFather: 'Zaman Khan',   address: 'Andari',       namePS: 'Lakki',    dispatchDate: '20/03/2022', receivedBy: 'SP Investigation', status: 'Active'     },
  { id: 6,  firNo: '234/2023', firDate: '05/06/2023', section: 'u/s 13-AO (Arms Offense)',        accused: 'Wali Jan',        accusedFather: 'Jan Muhammad', address: 'Wana',         namePS: 'Jandola',  dispatchDate: '06/06/2023', receivedBy: 'DSP Jandola',      status: 'Pending'    },
  { id: 7,  firNo: '099/2022', firDate: '08/05/2022', section: 'u/s 412/34 PPC (Dacoity)',        accused: 'Painda Khan',     accusedFather: 'Mast Khan',    address: 'Nasran',       namePS: 'SMA Tank', dispatchDate: '09/05/2022', receivedBy: 'SP Investigation', status: 'Active'     },
  { id: 8,  firNo: '156/2023', firDate: '14/04/2023', section: 'u/s 11-NACTA (Terrorism)',        accused: 'Haji Kamal Khan', accusedFather: 'Sher Zaman',   address: 'Nasran',       namePS: 'SMA Tank', dispatchDate: '15/04/2023', receivedBy: 'CTD Tank',         status: 'Pending'    },
  { id: 9,  firNo: '312/2022', firDate: '27/09/2022', section: 'u/s 365-A PPC (Kidnapping)',      accused: 'Rashid Gul',      accusedFather: 'Said Gul',     address: 'Nasran',       namePS: 'SMA Tank', dispatchDate: '28/09/2022', receivedBy: 'SP Investigation', status: 'Active'     },
  { id: 10, firNo: '201/2023', firDate: '19/05/2023', section: 'u/s 382/34 PPC (Snatching)',      accused: 'Shahid Ullah',    accusedFather: 'Amin Ullah',   address: 'Darraki',      namePS: 'Gul Imam', dispatchDate: '20/05/2023', receivedBy: 'DSP Gul Imam',     status: 'Pending'    },
  { id: 11, firNo: '088/2022', firDate: '14/04/2022', section: 'u/s 302 PPC (Murder)',             accused: 'Sher Bahadur',    accusedFather: 'Khan Zaman',   address: 'Kirri Haider', namePS: 'SMA',      dispatchDate: '15/04/2022', receivedBy: 'SP Investigation', status: 'Active'     },
  { id: 12, firNo: '267/2023', firDate: '12/07/2023', section: 'u/s 9-CNSA (Drug Offense)',       accused: 'Fazal Rahim',     accusedFather: 'Gul Rahim',    address: 'Kirri Haider', namePS: 'SMA',      dispatchDate: '13/07/2023', receivedBy: 'DSP SMA',          status: 'Pending'    },
]

// ─────────────────────────────────────────────
// MONEY CHANGERS
// ─────────────────────────────────────────────
export const moneyChangerColumns = [
  c('id', 'ID', '48px'),
  c('name', 'Owner Name', '160px'),
  c('fatherName', 'Father Name', '140px'),
  c('businessName', 'Business Name', '180px'),
  c('address', 'Address', '160px'),
  c('cnic', 'CNIC', '140px'),
  c('licenseNo', 'License No', '150px'),
  c('contact', 'Contact No', '120px'),
  c('issuedBy', 'Issued By', '150px'),
  c('expiryDate', 'Expiry Date', '110px'),
  sc('status', 'Status', '110px'),
]

export const moneyChangerData = [
  { id: 1,  name: 'Haji Noor Jan',      fatherName: 'Jan Muhammad',   businessName: 'Noor Jan Currency Exchange', address: 'Main Bazar Tank',    cnic: '12301-1234501-1', licenseNo: 'SBP-TK-001/2019', contact: '0300-9551234', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2024', status: 'Valid'      },
  { id: 2,  name: 'Muhammad Amin',      fatherName: 'Amin Khan',      businessName: 'Amin Brothers Exchange',     address: 'Saddar Bazar Tank',  cnic: '12301-2234502-3', licenseNo: 'SBP-TK-002/2020', contact: '0333-9552345', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2025', status: 'Valid'      },
  { id: 3,  name: 'Fazl Rabbi',         fatherName: 'Rabbi Khan',     businessName: 'Al-Rabbi Exchange',          address: 'Mullazai Chowk',     cnic: '12301-3234503-5', licenseNo: 'SBP-TK-003/2018', contact: '0345-9553456', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2023', status: 'Expired'    },
  { id: 4,  name: 'Said Amin',          fatherName: 'Amin Said',      businessName: 'Said Money Exchange',        address: 'Tank Chowk',         cnic: '12301-4234504-7', licenseNo: 'SBP-TK-004/2021', contact: '0312-9554567', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2026', status: 'Valid'      },
  { id: 5,  name: 'Gul Nawaz',          fatherName: 'Nawaz Khan',     businessName: 'Gul Exchange Co.',           address: 'Gul Imam Road',      cnic: '12301-5234505-9', licenseNo: 'SBP-TK-005/2022', contact: '0321-9555678', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2027', status: 'Valid'      },
  { id: 6,  name: 'Hidayatullah',       fatherName: 'Allah Nawaz',    businessName: 'Hidayat Currency',           address: 'Main Bazar Tank',    cnic: '12301-6234506-1', licenseNo: 'SBP-TK-006/2019', contact: '0301-9556789', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2024', status: 'Valid'      },
  { id: 7,  name: 'Hamidullah',         fatherName: 'Ullah Jan',      businessName: 'Hamid Exchange',              address: 'Nasran Chowk',       cnic: '12301-7234507-3', licenseNo: 'SBP-TK-007/2020', contact: '0344-9557890', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2025', status: 'Pending'    },
  { id: 8,  name: 'Rahim Khan',         fatherName: 'Khan Rahman',    businessName: 'Rahman Exchange',             address: 'Jandola Road',       cnic: '12301-8234508-5', licenseNo: 'SBP-TK-008/2017', contact: '0315-9558901', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2022', status: 'Expired'    },
  { id: 9,  name: 'Zar Gul',            fatherName: 'Gul Zaman',      businessName: 'Zar Gul Currency Exchange',  address: 'Mullazai',           cnic: '12301-9234509-7', licenseNo: 'SBP-TK-009/2021', contact: '0336-9559012', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2026', status: 'Valid'      },
  { id: 10, name: 'Asadullah',          fatherName: 'Allah Dad',      businessName: 'Asad Exchange Point',        address: 'Tank Cantt Area',    cnic: '12301-1034510-9', licenseNo: 'SBP-TK-010/2023', contact: '0311-9550123', issuedBy: 'SBP Field Office DIK', expiryDate: '31/12/2028', status: 'Pending'    },
]

// ─────────────────────────────────────────────
// ARMS VERIFICATION
// ─────────────────────────────────────────────
export const armsColumns = [
  c('id', 'ID', '48px'),
  c('name', 'License Holder Name', '180px'),
  c('fatherName', 'Father Name', '140px'),
  c('address', 'Address', '140px'),
  c('cnic', 'CNIC', '140px'),
  c('weaponType', 'Weapon Type', '160px'),
  c('bore', 'Bore', '80px'),
  c('licenseNo', 'License No', '170px'),
  c('issuedDate', 'Issue Date', '110px'),
  c('expiryDate', 'Expiry Date', '110px'),
  c('issuedBy', 'Issued By', '150px'),
  sc('status', 'Status', '90px'),
]

export const armsData = [
  { id: 1,  name: 'Khan Zaman',         fatherName: 'Paio Khan',      address: 'Nasran',       cnic: '12301-1111111-1', weaponType: 'Pistol',             bore: '30',  licenseNo: 'KPK-TK-ARM-0112', issuedDate: '15/03/2020', expiryDate: '14/03/2025', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 2,  name: 'Habib Ullah',        fatherName: 'Saif Ullah',     address: 'Andari',       cnic: '12301-2222222-3', weaponType: 'Shotgun',            bore: '12',  licenseNo: 'KPK-TK-ARM-0234', issuedDate: '08/07/2019', expiryDate: '07/07/2024', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 3,  name: 'Shah Wali Khan',     fatherName: 'Wali Jan',       address: 'Kirri Haider', cnic: '12301-3333333-5', weaponType: 'Rifle',              bore: '.303',licenseNo: 'KPK-TK-ARM-0356', issuedDate: '22/01/2018', expiryDate: '21/01/2023', issuedBy: 'Deputy Commissioner Tank', status: 'Expired' },
  { id: 4,  name: 'Gul Rahman',         fatherName: 'Rahman Gul',     address: 'Darraki',      cnic: '12301-4444444-7', weaponType: 'Pistol',             bore: '9mm', licenseNo: 'KPK-TK-ARM-0478', issuedDate: '14/09/2021', expiryDate: '13/09/2026', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 5,  name: 'Fazal Muhammad',     fatherName: 'Noor Muhammad',  address: 'Nasran',       cnic: '12301-5555555-9', weaponType: 'Kalashnikov (AK-47)', bore: 'KPK',licenseNo: 'KPK-TK-ARM-0512', issuedDate: '03/05/2022', expiryDate: '02/05/2027', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 6,  name: 'Karim Baksh',        fatherName: 'Baksh Khan',     address: 'Gul Imam',     cnic: '12301-6666666-1', weaponType: 'SMG',               bore: '9mm', licenseNo: 'KPK-TK-ARM-0634', issuedDate: '29/11/2017', expiryDate: '28/11/2022', issuedBy: 'Deputy Commissioner Tank', status: 'Expired' },
  { id: 7,  name: 'Sher Afzal',         fatherName: 'Afzal Din',      address: 'Kot Khalid',   cnic: '12301-7777777-3', weaponType: 'Shotgun',            bore: '12',  licenseNo: 'KPK-TK-ARM-0745', issuedDate: '17/06/2020', expiryDate: '16/06/2025', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 8,  name: 'Noor Ul Amin',       fatherName: 'Amin Khan',      address: 'Nasran',       cnic: '12301-8888888-5', weaponType: 'Pistol',             bore: '30',  licenseNo: 'KPK-TK-ARM-0856', issuedDate: '11/02/2023', expiryDate: '10/02/2028', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 9,  name: 'Wazir Khan',         fatherName: 'Khan Baz',       address: 'Wana',         cnic: '12301-9999999-7', weaponType: 'Rifle',              bore: '.303',licenseNo: 'KPK-TK-ARM-0967', issuedDate: '05/10/2019', expiryDate: '04/10/2024', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 10, name: 'Muhammad Nawaz',     fatherName: 'Nawaz Gul',      address: 'Shadi Khel',   cnic: '12301-1234321-9', weaponType: 'Pistol',             bore: '9mm', licenseNo: 'KPK-TK-ARM-1012', issuedDate: '20/08/2021', expiryDate: '19/08/2026', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
  { id: 11, name: 'Taj Muhammad',       fatherName: 'Taj Khan',       address: 'Mullazai',     cnic: '12301-1357924-1', weaponType: 'Shotgun',            bore: '12',  licenseNo: 'KPK-TK-ARM-1123', issuedDate: '14/04/2016', expiryDate: '13/04/2021', issuedBy: 'Deputy Commissioner Tank', status: 'Expired' },
  { id: 12, name: 'Said Ahmad',         fatherName: 'Ahmad Said',     address: 'Darraki',      cnic: '12301-2468135-3', weaponType: 'Pistol',             bore: '30',  licenseNo: 'KPK-TK-ARM-1234', issuedDate: '09/12/2022', expiryDate: '08/12/2027', issuedBy: 'Deputy Commissioner Tank', status: 'Valid'   },
]

// ─────────────────────────────────────────────
// USER LIST
// ─────────────────────────────────────────────
export const userColumns = [
  c('id', 'ID', '48px'),
  c('name', 'Full Name', '160px'),
  c('username', 'Username', '130px'),
  c('role', 'Role', '140px'),
  c('rank', 'Rank', '130px'),
  c('department', 'Department', '180px'),
  c('contact', 'Contact No', '120px'),
  c('email', 'Email', '200px'),
  c('lastLogin', 'Last Login', '130px'),
  sc('status', 'Status', '90px'),
]

export const userData = [
  { id: 1,  name: 'Muhammad Asif',      username: 'admin',         role: 'Administrator', rank: 'SP',            department: 'DSB Tank HQ',          contact: '0300-1234567', email: 'sp.tank@kppolice.gov.pk',    lastLogin: '08/05/2026', status: 'Active' },
  { id: 2,  name: 'Noor Khan',          username: 'nkhan',         role: 'Operator',      rank: 'Inspector',     department: 'DSB Operations',        contact: '0301-2345678', email: 'nkhan@kppolice.gov.pk',       lastLogin: '07/05/2026', status: 'Active' },
  { id: 3,  name: 'Zia Ul Haq',         username: 'zhaq',          role: 'Viewer',        rank: 'Sub-Inspector', department: 'Intelligence Wing',     contact: '0312-3456789', email: 'zhaq@kppolice.gov.pk',        lastLogin: '05/05/2026', status: 'Active' },
  { id: 4,  name: 'Shah Faisal',        username: 'sfaisal',       role: 'Operator',      rank: 'Inspector',     department: 'Crime Branch',          contact: '0321-4567890', email: 'sfaisal@kppolice.gov.pk',     lastLogin: '06/05/2026', status: 'Active' },
  { id: 5,  name: 'Waqar Ahmad',        username: 'wahmad',        role: 'Viewer',        rank: 'ASI',           department: 'SMA Tank PS',           contact: '0333-5678901', email: 'wahmad@kppolice.gov.pk',      lastLogin: '04/05/2026', status: 'Active' },
  { id: 6,  name: 'Pervaiz Akhtar',     username: 'pakhtar',       role: 'Operator',      rank: 'Sub-Inspector', department: 'Mullazai PS',           contact: '0344-6789012', email: 'pakhtar@kppolice.gov.pk',     lastLogin: '01/05/2026', status: 'Active' },
  { id: 7,  name: 'Hamid Ullah',        username: 'hullah',        role: 'Viewer',        rank: 'HC',            department: 'Gul Imam PS',           contact: '0345-7890123', email: 'hullah@kppolice.gov.pk',      lastLogin: '03/05/2026', status: 'Active' },
  { id: 8,  name: 'Adnan Rashid',       username: 'arashid',       role: 'Operator',      rank: 'Inspector',     department: 'CTD Liaison',           contact: '0311-8901234', email: 'arashid@kppolice.gov.pk',     lastLogin: '08/05/2026', status: 'Active' },
  { id: 9,  name: 'Tariq Mehmood',      username: 'tmehmood',      role: 'Viewer',        rank: 'ASI',           department: 'Jandola PS',            contact: '0315-9012345', email: 'tmehmood@kppolice.gov.pk',    lastLogin: '02/05/2026', status: 'Active' },
  { id: 10, name: 'Babar Ali',          username: 'bali',          role: 'Viewer',        rank: 'HC',            department: 'Arms Branch',           contact: '0336-0123456', email: 'bali@kppolice.gov.pk',        lastLogin: '30/04/2026', status: 'Active' },
]

// ─────────────────────────────────────────────
// DATA ENTRY REPORT
// ─────────────────────────────────────────────
export const dataEntryColumns = [
  c('id', 'ID', '48px'),
  c('entryDate', 'Entry Date', '110px'),
  c('category', 'Category', '150px'),
  c('enteredBy', 'Entered By', '140px'),
  c('rank', 'Rank', '110px'),
  c('recordsCount', 'Records Added', '110px'),
  c('subject', 'Subject', '200px'),
  c('namePS', 'Police Station', '120px'),
  c('approvedBy', 'Approved By', '150px'),
  c('approvalDate', 'Approval Date', '120px'),
  sc('status', 'Status', '90px'),
]

export const dataEntryData = [
  { id: 1,  entryDate: '08/05/2026', category: 'Terrorists List',    enteredBy: 'Noor Khan',     rank: 'Inspector',     recordsCount: '5',  subject: 'New POs added - Darraki area',               namePS: 'Gul Imam', approvedBy: 'SP Muhammad Asif', approvalDate: '08/05/2026', status: 'Active'     },
  { id: 2,  entryDate: '07/05/2026', category: '4th Schedule',       enteredBy: 'Shah Faisal',   rank: 'Inspector',     recordsCount: '2',  subject: '4th Schedule entries - Nasran area',         namePS: 'SMA Tank', approvedBy: 'SP Muhammad Asif', approvalDate: '07/05/2026', status: 'Active'     },
  { id: 3,  entryDate: '06/05/2026', category: 'Drug Peddlers',      enteredBy: 'Zia Ul Haq',    rank: 'Sub-Inspector', recordsCount: '3',  subject: 'Drug arrests - Mullazai PS',                 namePS: 'Mullazai', approvedBy: 'SP Muhammad Asif', approvalDate: '06/05/2026', status: 'Active'     },
  { id: 4,  entryDate: '05/05/2026', category: 'FIR Notification',   enteredBy: 'Pervaiz Akhtar',rank: 'Sub-Inspector', recordsCount: '8',  subject: 'Monthly FIR dispatch to SP office',         namePS: 'SMA Tank', approvedBy: 'SP Muhammad Asif', approvalDate: '05/05/2026', status: 'Active'     },
  { id: 5,  entryDate: '04/05/2026', category: 'Arms Verification',  enteredBy: 'Babar Ali',     rank: 'HC',            recordsCount: '12', subject: 'Annual arms license verification drive',     namePS: 'SMA Tank', approvedBy: 'Noor Khan',        approvalDate: '04/05/2026', status: 'Active'     },
  { id: 6,  entryDate: '03/05/2026', category: 'Head Money',         enteredBy: 'Shah Faisal',   rank: 'Inspector',     recordsCount: '1',  subject: 'Head money announced for Sher Bahadur',     namePS: 'SMA',      approvedBy: 'SP Muhammad Asif', approvalDate: '03/05/2026', status: 'Active'     },
  { id: 7,  entryDate: '02/05/2026', category: 'Snatchers',          enteredBy: 'Hamid Ullah',   rank: 'HC',            recordsCount: '4',  subject: 'Snatching cases - Tank city area',          namePS: 'SMA Tank', approvedBy: 'Noor Khan',        approvalDate: '02/05/2026', status: 'Active'     },
  { id: 8,  entryDate: '01/05/2026', category: 'CRO Update',         enteredBy: 'Adnan Rashid',  rank: 'Inspector',     recordsCount: '7',  subject: 'CRO records update - released prisoners',   namePS: 'SMA Tank', approvedBy: 'SP Muhammad Asif', approvalDate: '01/05/2026', status: 'Active'     },
  { id: 9,  entryDate: '30/04/2026', category: 'Dacoit / Robbers',   enteredBy: 'Zia Ul Haq',    rank: 'Sub-Inspector', recordsCount: '3',  subject: 'Highway robbery gang members added',        namePS: 'Jandola',  approvedBy: 'SP Muhammad Asif', approvalDate: '30/04/2026', status: 'Active'     },
  { id: 10, entryDate: '29/04/2026', category: 'Money Changers',     enteredBy: 'Tariq Mehmood', rank: 'ASI',           recordsCount: '2',  subject: 'New money changer registration - Bazar',    namePS: 'SMA Tank', approvedBy: 'Noor Khan',        approvalDate: '29/04/2026', status: 'Active'     },
  { id: 11, entryDate: '28/04/2026', category: 'Ts Facilitators',    enteredBy: 'Noor Khan',     rank: 'Inspector',     recordsCount: '2',  subject: 'Identified facilitators - Wana road',       namePS: 'Jandola',  approvedBy: 'SP Muhammad Asif', approvalDate: '28/04/2026', status: 'Active'     },
  { id: 12, entryDate: '27/04/2026', category: 'Terrorists List',    enteredBy: 'Shah Faisal',   rank: 'Inspector',     recordsCount: '3',  subject: 'POs transferred from Lakki district',       namePS: 'Lakki',    approvedBy: 'SP Muhammad Asif', approvalDate: '27/04/2026', status: 'Active'     },
]
