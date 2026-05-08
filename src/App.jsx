import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ListPage from './pages/ListPage'
import {
  terroristColumns, terroristData,
  facilitatorColumns, facilitatorData,
  headMoneyColumns, headMoneyData,
  fourthScheduleColumns, fourthScheduleData,
  croColumns, croData,
  drugColumns, drugData,
  snatcherColumns, snatcherData,
  dacoitColumns, dacoitData,
  firColumns, firData,
  moneyChangerColumns, moneyChangerData,
  armsColumns, armsData,
  userColumns, userData,
  dataEntryColumns, dataEntryData,
} from './data/dummyData.jsx'
import {
  terroristFF, facilitatorFF, headMoneyFF, fourthScheduleFF,
  croFF, drugFF, snatcherFF, dacoitFF, firFF,
  moneyChangerFF, armsFF, userFF, dataEntryFF,
} from './data/formFields.jsx'

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

function PublicRoute({ children }) {
  const { user } = useAuth()
  return user ? <Navigate to="/" replace /> : children
}

// Shorthand to avoid repeating ListPage each time
function P(props) { return <ListPage {...props} /> }

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />

            {/* Search pages — read-only, share terrorist storage */}
            <Route path="search-dsb" element={
              <P title="Search DSB Reports" columns={terroristColumns} data={terroristData} storageKey="dsb_terrorists" />
            } />
            <Route path="search-threats" element={
              <P
                title="Search Threats"
                columns={terroristColumns}
                data={terroristData}
                storageKey="dsb_terrorists"
                filter={r => r.category === 'Specific Threat' || r.category === 'General Threat'}
              />
            } />

            <Route path="user-list" element={
              <P title="User List" columns={userColumns} data={userData} formFields={userFF} storageKey="dsb_users" />
            } />
            <Route path="data-entry" element={
              <P title="Data Entry Report" columns={dataEntryColumns} data={dataEntryData} formFields={dataEntryFF} storageKey="dsb_dataentry" />
            } />
            <Route path="terrorists-lists" element={
              <P title="Terrorists Lists" columns={terroristColumns} data={terroristData} formFields={terroristFF} storageKey="dsb_terrorists" />
            } />
            <Route path="ts-facilitators" element={
              <P title="Ts Facilitators" columns={facilitatorColumns} data={facilitatorData} formFields={facilitatorFF} storageKey="dsb_facilitators" />
            } />
            <Route path="head-money" element={
              <P title="Head Money" columns={headMoneyColumns} data={headMoneyData} formFields={headMoneyFF} storageKey="dsb_headmoney" />
            } />
            <Route path="4th-schedule" element={
              <P title="4th Schedule" columns={fourthScheduleColumns} data={fourthScheduleData} formFields={fourthScheduleFF} storageKey="dsb_4thschedule" />
            } />
            <Route path="cro" element={
              <P title="CRO — Criminal Record Office" columns={croColumns} data={croData} formFields={croFF} storageKey="dsb_cro" />
            } />
            <Route path="drug-peddlers" element={
              <P title="Drug Peddlers List" columns={drugColumns} data={drugData} formFields={drugFF} storageKey="dsb_drugs" />
            } />
            <Route path="snatchers-list" element={
              <P title="Snatchers List" columns={snatcherColumns} data={snatcherData} formFields={snatcherFF} storageKey="dsb_snatchers" />
            } />
            <Route path="dacoit-robbers" element={
              <P title="Dacoit / Robbers" columns={dacoitColumns} data={dacoitData} formFields={dacoitFF} storageKey="dsb_dacoit" />
            } />
            <Route path="fir-notification" element={
              <P title="FIR Found Notification" columns={firColumns} data={firData} formFields={firFF} storageKey="dsb_fir" />
            } />
            <Route path="money-changers" element={
              <P title="Money Changers" columns={moneyChangerColumns} data={moneyChangerData} formFields={moneyChangerFF} storageKey="dsb_moneychangers" />
            } />
            <Route path="arms-verification" element={
              <P title="Arms Verification Dastak App" columns={armsColumns} data={armsData} formFields={armsFF} storageKey="dsb_arms" />
            } />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
