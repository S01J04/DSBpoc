// Common option lists
const CASTES = ['Nasar', 'Bhittani', 'Kundi', 'Marwat', 'Wazir', 'Karki Khel', 'Shadi Khel', 'Kundi Badin Zai', 'Miankhel', 'Other']
const PS = ['SMA Tank', 'Mullazai', 'Gul Imam', 'Lakki', 'Jandola', 'SMA']
const GENERAL_STATUS = ['Active', 'Convicted', 'Absconder', 'Under Trial', 'Released', 'Arrested']
const DATE_PH = 'DD/MM/YYYY'

// ─── TERRORISTS LIST ────────────────────────────────────────
export const terroristFF = [
  { key: 'category',         label: 'Category',          type: 'select',   options: ['Specific Threat', 'General Threat', 'New'], required: true },
  { key: 'name',             label: 'Name',              type: 'text',     required: true },
  { key: 'fatherName',       label: "Father's Name",     type: 'text' },
  { key: 'caste',            label: 'Caste',             type: 'select',   options: CASTES },
  { key: 'address',          label: 'Address / Area',    type: 'text' },
  { key: 'firNo',            label: 'FIR No',            type: 'text',     placeholder: '89 dat 07/2/2010 u/s 302/34' },
  { key: 'namePS',           label: 'Police Station',    type: 'select',   options: PS },
  { key: 'perpetualWarrant', label: 'Perpetual Warrant', type: 'text',     placeholder: DATE_PH },
  { key: 'remarksDpo',       label: 'Remarks DPO OG 10', type: 'text' },
  { key: 'zariaAmaash',      label: 'Zaria Maash',       type: 'text',     placeholder: 'e.g. Zamindara, Labour' },
  { key: 'property',         label: 'Moveable/Immovable Property', type: 'text' },
  { key: 'friendsDetail',    label: 'Friends Detail',    type: 'textarea', placeholder: 'Names, s/o, r/o …' },
  { key: 'presentStatus',    label: 'Present Status',    type: 'select',   options: GENERAL_STATUS },
]

// ─── TS FACILITATORS ────────────────────────────────────────
export const facilitatorFF = [
  { key: 'name',       label: 'Name',              type: 'text',     required: true },
  { key: 'fatherName', label: "Father's Name",     type: 'text',     required: true },
  { key: 'caste',      label: 'Caste',             type: 'select',   options: CASTES },
  { key: 'address',    label: 'Address',           type: 'text' },
  { key: 'role',       label: 'Role',              type: 'select',   options: ['Financier', 'Logistics', 'Recruiter', 'Propagandist', 'Arms Supplier', 'Messenger', 'Safe House Provider', 'Intelligence', 'Other'], required: true },
  { key: 'contact',    label: 'Contact / Network', type: 'textarea', placeholder: 'Links, associates …' },
  { key: 'firNo',      label: 'FIR No',            type: 'text' },
  { key: 'namePS',     label: 'Police Station',    type: 'select',   options: PS },
  { key: 'dateAdded',  label: 'Date Added',        type: 'text',     placeholder: DATE_PH },
  { key: 'status',     label: 'Status',            type: 'select',   options: GENERAL_STATUS },
]

// ─── HEAD MONEY ─────────────────────────────────────────────
export const headMoneyFF = [
  { key: 'name',       label: 'Name',            type: 'text',    required: true },
  { key: 'fatherName', label: "Father's Name",   type: 'text',    required: true },
  { key: 'caste',      label: 'Caste',           type: 'select',  options: CASTES },
  { key: 'address',    label: 'Address',         type: 'text' },
  { key: 'crime',      label: 'Crime / Charges', type: 'text',    required: true },
  { key: 'firNo',      label: 'FIR No',          type: 'text' },
  { key: 'reward',     label: 'Reward (Rs.)',     type: 'text',    placeholder: '500,000', required: true },
  { key: 'announced',  label: 'Date Announced',  type: 'text',    placeholder: DATE_PH },
  { key: 'namePS',     label: 'Police Station',  type: 'select',  options: PS },
  { key: 'status',     label: 'Status',          type: 'select',  options: GENERAL_STATUS },
]

// ─── 4TH SCHEDULE ───────────────────────────────────────────
export const fourthScheduleFF = [
  { key: 'name',        label: 'Name',           type: 'text',   required: true },
  { key: 'fatherName',  label: "Father's Name",  type: 'text',   required: true },
  { key: 'caste',       label: 'Caste',          type: 'select', options: CASTES },
  { key: 'address',     label: 'Address',        type: 'text' },
  { key: 'cnic',        label: 'CNIC',           type: 'text',   placeholder: '12301-1234567-1' },
  { key: 'section',     label: 'Section',        type: 'text',   placeholder: 'e.g. Sec 11-B ATA' },
  { key: 'dateEntered', label: 'Date of Entry',  type: 'text',   placeholder: DATE_PH, required: true },
  { key: 'dateExpiry',  label: 'Date of Expiry', type: 'text',   placeholder: DATE_PH },
  { key: 'namePS',      label: 'Police Station', type: 'select', options: PS },
  { key: 'remarks',     label: 'Remarks',        type: 'textarea' },
  { key: 'status',      label: 'Status',         type: 'select', options: ['Active', 'Expired'] },
]

// ─── CRO ────────────────────────────────────────────────────
export const croFF = [
  { key: 'name',       label: 'Name',            type: 'text',   required: true },
  { key: 'fatherName', label: "Father's Name",   type: 'text',   required: true },
  { key: 'caste',      label: 'Caste',           type: 'select', options: CASTES },
  { key: 'address',    label: 'Address',         type: 'text' },
  { key: 'crime',      label: 'Crime',           type: 'text',   required: true },
  { key: 'section',    label: 'Section',         type: 'text',   placeholder: 'e.g. u/s 302/34 PPC' },
  { key: 'firNo',      label: 'FIR No',          type: 'text' },
  { key: 'conviction', label: 'Conviction Date', type: 'text',   placeholder: DATE_PH },
  { key: 'sentence',   label: 'Sentence',        type: 'text',   placeholder: 'e.g. Life Imprisonment, 7 Years' },
  { key: 'namePS',     label: 'Police Station',  type: 'select', options: PS },
  { key: 'status',     label: 'Status',          type: 'select', options: ['Convicted', 'Released', 'Under Trial'] },
]

// ─── DRUG PEDDLERS ──────────────────────────────────────────
export const drugFF = [
  { key: 'name',        label: 'Name',           type: 'text',   required: true },
  { key: 'fatherName',  label: "Father's Name",  type: 'text',   required: true },
  { key: 'caste',       label: 'Caste',          type: 'select', options: CASTES },
  { key: 'address',     label: 'Address',        type: 'text' },
  { key: 'drugType',    label: 'Drug Type',      type: 'select', options: ['Heroin', 'Charas', 'Opium', 'Ice (Meth)', 'Morphine', 'Other'], required: true },
  { key: 'quantity',    label: 'Quantity',       type: 'text',   placeholder: 'e.g. 250g, 1.5 kg', required: true },
  { key: 'firNo',       label: 'FIR No',         type: 'text',   placeholder: '45 dat 12/03/2018 u/s 9-CNSA' },
  { key: 'namePS',      label: 'Police Station', type: 'select', options: PS },
  { key: 'arrestDate',  label: 'Arrest Date',    type: 'text',   placeholder: DATE_PH },
  { key: 'status',      label: 'Status',         type: 'select', options: ['Under Trial', 'Convicted', 'Released'] },
]

// ─── SNATCHERS ──────────────────────────────────────────────
export const snatcherFF = [
  { key: 'name',         label: 'Name',           type: 'text',   required: true },
  { key: 'fatherName',   label: "Father's Name",  type: 'text',   required: true },
  { key: 'caste',        label: 'Caste',          type: 'select', options: CASTES },
  { key: 'address',      label: 'Address',        type: 'text' },
  { key: 'items',        label: 'Items Snatched', type: 'text',   required: true, placeholder: 'e.g. Honda CD70 + Mobile Phone' },
  { key: 'vehicle',      label: 'Vehicle Used',   type: 'text',   placeholder: 'e.g. Honda CG125, On foot' },
  { key: 'incidentDate', label: 'Incident Date',  type: 'text',   placeholder: DATE_PH, required: true },
  { key: 'firNo',        label: 'FIR No',         type: 'text',   placeholder: '22 dat 03/04/2022 u/s 382' },
  { key: 'namePS',       label: 'Police Station', type: 'select', options: PS },
  { key: 'status',       label: 'Status',         type: 'select', options: ['Arrested', 'Under Trial', 'Convicted', 'Absconder'] },
]

// ─── DACOIT / ROBBERS ───────────────────────────────────────
export const dacoitFF = [
  { key: 'name',         label: 'Name',           type: 'text',     required: true },
  { key: 'fatherName',   label: "Father's Name",  type: 'text',     required: true },
  { key: 'caste',        label: 'Caste',          type: 'select',   options: CASTES },
  { key: 'address',      label: 'Address',        type: 'text' },
  { key: 'crimeDetails', label: 'Crime Details',  type: 'textarea', required: true, placeholder: 'Describe the crime, amount stolen …' },
  { key: 'gangSize',     label: 'Gang Size',      type: 'text',     placeholder: 'Number of members' },
  { key: 'incidentDate', label: 'Incident Date',  type: 'text',     placeholder: DATE_PH, required: true },
  { key: 'firNo',        label: 'FIR No',         type: 'text',     placeholder: '31 dat 05/02/2020 u/s 412/34' },
  { key: 'namePS',       label: 'Police Station', type: 'select',   options: PS },
  { key: 'status',       label: 'Status',         type: 'select',   options: ['Arrested', 'Under Trial', 'Convicted', 'Absconder'] },
]

// ─── FIR FOUND NOTIFICATION ─────────────────────────────────
export const firFF = [
  { key: 'firNo',       label: 'FIR No',          type: 'text',   required: true, placeholder: '112/2023' },
  { key: 'firDate',     label: 'FIR Date',        type: 'text',   placeholder: DATE_PH, required: true },
  { key: 'section',     label: 'Section / Offense', type: 'text', required: true, placeholder: 'u/s 302/34 PPC (Murder)' },
  { key: 'accused',     label: 'Accused Name',    type: 'text',   required: true },
  { key: 'accusedFather', label: "Father's Name", type: 'text' },
  { key: 'address',     label: 'Address',         type: 'text' },
  { key: 'namePS',      label: 'Police Station',  type: 'select', options: PS },
  { key: 'dispatchDate', label: 'Dispatch Date',  type: 'text',   placeholder: DATE_PH },
  { key: 'receivedBy',  label: 'Received By',     type: 'text',   placeholder: 'e.g. SP Investigation' },
  { key: 'status',      label: 'Status',          type: 'select', options: ['Pending', 'Active', 'Closed'] },
]

// ─── MONEY CHANGERS ─────────────────────────────────────────
export const moneyChangerFF = [
  { key: 'name',         label: 'Owner Name',     type: 'text', required: true },
  { key: 'fatherName',   label: "Father's Name",  type: 'text', required: true },
  { key: 'businessName', label: 'Business Name',  type: 'text', required: true },
  { key: 'address',      label: 'Business Address', type: 'text' },
  { key: 'cnic',         label: 'CNIC',           type: 'text', placeholder: '12301-1234567-1' },
  { key: 'licenseNo',    label: 'License No',     type: 'text', placeholder: 'SBP-TK-011/2024' },
  { key: 'contact',      label: 'Contact No',     type: 'text', placeholder: '0300-XXXXXXX' },
  { key: 'issuedBy',     label: 'Issued By',      type: 'text', placeholder: 'SBP Field Office DIK' },
  { key: 'expiryDate',   label: 'Expiry Date',    type: 'text', placeholder: DATE_PH },
  { key: 'status',       label: 'Status',         type: 'select', options: ['Valid', 'Expired', 'Pending'] },
]

// ─── ARMS VERIFICATION ──────────────────────────────────────
export const armsFF = [
  { key: 'name',        label: 'License Holder Name', type: 'text',   required: true },
  { key: 'fatherName',  label: "Father's Name",       type: 'text',   required: true },
  { key: 'address',     label: 'Address',             type: 'text' },
  { key: 'cnic',        label: 'CNIC',                type: 'text',   placeholder: '12301-1234567-1' },
  { key: 'weaponType',  label: 'Weapon Type',         type: 'select', options: ['30 bore pistol', '9mm pistol', '12 bore shotgun', 'Kalashnikov (AK-47)', 'Rifle .303', 'SMG', 'Other'], required: true },
  { key: 'bore',        label: 'Bore',                type: 'text',   placeholder: 'e.g. 30, 9mm, 12, .303' },
  { key: 'licenseNo',   label: 'License No',          type: 'text',   placeholder: 'KPK-TK-ARM-XXXX' },
  { key: 'issuedDate',  label: 'Issue Date',          type: 'text',   placeholder: DATE_PH },
  { key: 'expiryDate',  label: 'Expiry Date',         type: 'text',   placeholder: DATE_PH },
  { key: 'issuedBy',    label: 'Issued By',           type: 'text',   placeholder: 'Deputy Commissioner Tank' },
  { key: 'status',      label: 'Status',              type: 'select', options: ['Valid', 'Expired'] },
]

// ─── USER LIST ──────────────────────────────────────────────
export const userFF = [
  { key: 'name',       label: 'Full Name',     type: 'text',   required: true },
  { key: 'username',   label: 'Username',      type: 'text',   required: true },
  { key: 'role',       label: 'Role',          type: 'select', options: ['Administrator', 'Operator', 'Viewer'], required: true },
  { key: 'rank',       label: 'Rank',          type: 'select', options: ['SP', 'DSP', 'Inspector', 'Sub-Inspector', 'ASI', 'HC', 'Constable'] },
  { key: 'department', label: 'Department',    type: 'text',   placeholder: 'e.g. DSB Operations, Crime Branch' },
  { key: 'contact',    label: 'Contact No',    type: 'text',   placeholder: '0300-XXXXXXX' },
  { key: 'email',      label: 'Email',         type: 'text',   placeholder: 'name@kppolice.gov.pk' },
  { key: 'status',     label: 'Status',        type: 'select', options: ['Active', 'Inactive'] },
]

// ─── DATA ENTRY REPORT ──────────────────────────────────────
export const dataEntryFF = [
  { key: 'entryDate',     label: 'Entry Date',      type: 'text',   placeholder: DATE_PH, required: true },
  { key: 'category',      label: 'Category',        type: 'select', options: ['Terrorists List', '4th Schedule', 'Drug Peddlers', 'FIR Notification', 'Arms Verification', 'Head Money', 'Snatchers', 'CRO Update', 'Dacoit / Robbers', 'Money Changers', 'Ts Facilitators', 'Other'], required: true },
  { key: 'enteredBy',     label: 'Entered By',      type: 'text',   required: true },
  { key: 'rank',          label: 'Rank',            type: 'select', options: ['SP', 'DSP', 'Inspector', 'Sub-Inspector', 'ASI', 'HC', 'Constable'] },
  { key: 'recordsCount',  label: 'Records Added',   type: 'text',   placeholder: 'Number of records' },
  { key: 'namePS',        label: 'Police Station',  type: 'select', options: PS },
  { key: 'approvedBy',    label: 'Approved By',     type: 'text' },
  { key: 'approvalDate',  label: 'Approval Date',   type: 'text',   placeholder: DATE_PH },
  { key: 'subject',       label: 'Subject / Notes', type: 'textarea', required: true },
  { key: 'status',        label: 'Status',          type: 'select', options: ['Active', 'Pending'] },
]
