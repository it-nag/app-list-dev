import React, {useEffect, useRef, useState} from 'react'
import Tooltip from '../../SubComponents/Tooltip/Tooltip'
import './AppList.css'
import { SignalBit, NDS, Process, ManageEmployee, EndLine, FinishLine, PackingLine, Regular, Qr, QrHardware, DefectInOut, RejectInOut, Report, Daily, Summary, Dashboard, Factory, Line, Doc, NAG } from '../imports'
import { GrClose } from 'react-icons/gr'

function AppList() {
  const ndsRef = useRef()
  const endLineRef = useRef()
  const finishLineRef = useRef()
  const packingLineRef = useRef()
  const defectInOutRef = useRef()
  const rejectInOutRef = useRef()
  const sewingReportRef = useRef()
  const sewingDashboardRef = useRef()
  const linkSelectionRef = useRef()
  const linkSelectionTitleRef = useRef()

  const [open, setOpen] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [localeLink, setLocaleLink] = useState('')
  const [onlineLink, setOnlineLink] = useState('')

  useEffect(()=>{
      if(open === true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
  })

  const openPopUp = async (selected) => {
    setOpen(!open)

    if (selected === 'nds') {
      ndsRef.current.style.display = 'flex'
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'endline') {
      endLineRef.current.style.display = 'flex'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'finishline') {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'flex'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'packingline') {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'flex'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'sewingreport') {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'flex'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'sewingdashboard') {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'flex'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'defectinout') {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'flex'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else if (selected === 'rejectinout') {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'flex'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    } else {
      endLineRef.current.style.display = 'none'
      finishLineRef.current.style.display = 'none'
      packingLineRef.current.style.display = 'none'
      sewingReportRef.current.style.display = 'none'
      sewingDashboardRef.current.style.display = 'none'
      defectInOutRef.current.style.display = 'none'
      rejectInOutRef.current.style.display = 'none'
      ndsRef.current.style.display = 'none'
      linkSelectionRef.current.style.display = 'none'
    }
  }

  const openLinkSelection = (link) => {
    setOpenModal(!openModal)

    linkSelectionTitleRef.current.textContent = link;

    if (link === 'erp') {
      setLocaleLink('http://10.10.5.62:8080/erp')
      setOnlineLink('http://nag.ddns.net:8080/erp')
    } else if (link === 'nds') {
      setLocaleLink('http://10.10.5.62:8000/nds_wip')
      setOnlineLink('http://nag.ddns.net:8003/nds_wip')
    } 

    linkSelectionRef.current.style.display = 'flex'    
  }

  return (
    <div className='app-list'>
      <div className='header'>
        <img src={NAG} className='logo' alt='nag' />
        <h1 className='title'> PORTAL NAG</h1>
      </div>
      <hr className='title-line' />
      <div className='list'>

        <div className='app current' onClick={() => openLinkSelection('erp')}>
          <img src={SignalBit} className='img-language' alt='html' />
          <ul className='app-sub'>
            <li className='current'>SignalBit ERP</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi SignalBit ERP' position='top'/>
        </div>  

        <div className='app current' onClick={() => openPopUp('nds')}>
          <img src={NDS} className='img-language' alt='html' />
          <ul className='app-sub'>
            <li className='current'>WIP</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi WIP' position='top'/>
        </div>

        <div className='app current' onClick={() => openPopUp('endline')}>
          <img src={EndLine} className='img-language' alt='html' />
          <ul className='app-sub'>
            <li className='current'>QC EndLine</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi untuk Input Output Sewing' position='top'/>
        </div>

        <div className='app current' onClick={() => openPopUp('finishline')}>
          <img src={FinishLine} className='img-language' alt='php' />
          <ul className='app-sub'>
            <li className='current'>QC FinishLine</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi untuk Input Output Finish Line' position='top'/>
        </div>

        <div className='app current' onClick={() => openPopUp('packingline')}>
          <img src={PackingLine} className='img-language' alt='css' />
          <ul className='app-sub'>
            <li className='current'>QC PackingLine</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi untuk Input Output Packing Line' position='top'/>
        </div>

        <div className='app current'  onClick={() => openPopUp('defectinout')}>
          <img src={DefectInOut} className='img-language' alt='html' />
          <ul className='app-sub'>
            <li className='current'>Defect In Out</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi untuk Input Defect Masuk/Defect Keluar di Manding/Spotcleaning' position='top'/>
        </div>  
        
        <div className='app current'  onClick={() => openPopUp('rejectinout')}>
          <img src={RejectInOut} className='img-language' alt='html' />
          <ul className='app-sub'>
            <li className='current'>Reject In Out</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi untuk Input Reject Masuk/Reject Keluar di QC Reject' position='top'/>
        </div>  

        <div className='app current' style={{display: 'none'}} onClick={() => openPopUp('sewingreport')}>
          <img src={Report} className='img-language' alt='css' />
          <ul className='app-sub'>
            <li className='current'>Sewing Report</li>
          </ul>
          <Tooltip className='tooltip' message='Aplikasi untuk Menampilkan Output Sewing/Finish/Packing dsb.' position='top'/>
        </div>

        <div className='app current' onClick={() => openPopUp('sewingdashboard')}>
          <img src={Dashboard} className='img-language' alt='css' />
          <ul className='app-sub'>
            <li className='current'>Sewing Dashboard</li>
          </ul>
          <Tooltip className='tooltip' message='Dashboard untuk Output Sewing' position='top'/>
        </div>

        <a className='app current' style={{ display: 'none' }} href='http://10.10.5.62:8000/nds_simple_docs' target='_blank' rel='noreferrer'>
          <img src={Doc} className='img-language' alt='html' />
          <ul className='app-sub'>
            <li className='current'>Documentation</li>
          </ul>
          <Tooltip className='tooltip' message='Dokumentasi NDS (sederhana)' position='top'/>
        </a> 
      </div>

      <div className='sub-list' style={{display: open ? 'flex' : 'none'}}>
        {/* NDS */}
        <div className='list' ref={ndsRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>WIP</h1>
          <div onClick={() => openLinkSelection('nds')} className='app current'>
            <img src={Process} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>WIP Produksi</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk merekam input dan tracking data produksi.' position='top'/>
          </div>
          <a href='https://10.10.5.62/qr-checker' target='_blank' rel='noreferrer' className='app current'>
            <img src={Qr} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Cek QR Produksi</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk akses data QR di produksi.' position='top'/>
          </a>
          <a href='http://10.10.5.111/mutasi_karyawan' target='_blank' rel='noreferrer' className='app current' style={{display: 'none'}}>
            <img src={ManageEmployee} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Mutasi Karyawan</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk merekam input data mutasi karyawan.' position='top'/>
          </a>
        </div>

        {/* EndLine */} 
        <div className='list' ref={endLineRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>QC ENDLINE</h1>
          <a href='http://10.10.5.12:8001/nds_qc' target='_blank' rel='noreferrer' className='app current'>
            <img src={Regular} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC EndLine Manual</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di QC secara Manual.' position='top'/>
          </a>
          <a href='https://10.10.5.62/sb_wip_qr' target='_blank' rel='noreferrer' className='app'>
            <img src={Qr} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li>QC EndLine QR Camera</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di QC dengan cara Scan (Kamera).' position='top'/>
          </a>
          <a href='http://10.10.5.12:8001/nds_qc_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC EndLine QR Hardware</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di QC menggunakan Alat Scan.' position='top'/>
          </a>
          {/* <a href='http://10.10.5.12:8001/nds_qc_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC EndLine QR 12</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di QC secara Manual.' position='top'/>
          </a> */}
          {/* <a href='http://10.10.5.133/nds_qc_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC EndLine QR 133</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di QC secara Manual.' position='top'/>
          </a> */}
        </div>

        {/* FinishLine */}
        <div className='list' ref={finishLineRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>QC FINISHLINE</h1>
          <a href='http://10.10.5.62:8000/nds_finishing' target='_blank' rel='noreferrer' className='app current'>
            <img src={Qr} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC FinishLine Manual/Scan</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di Finishing secara Manual maupun Scan.' position='top'/>
          </a>
          <a href='http://10.10.5.12:8001/nds_pc' target='_blank' rel='noreferrer' className='app current'>
            <img src={Regular} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC Finishline Manual</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di Packing secara Manual.' position='top'/>
          </a>
          <a href='http://10.10.5.12:8001/nds_pc_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC Finishline QR Hardware</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di Packing menggunakan Alat Scan.' position='top'/>
          </a>
          {/* <a href='http://10.10.5.133/nds_pc_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>QC Finishline QR Hardware 133</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di Packing menggunakan Alat Scan.' position='top'/>
          </a> */}
          {/* <a href='https://10.10.5.130/sb_wip_qr_hardware_fin_dev' target='_blank' rel='noreferrer' className='app'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li>QC FinishLine QR Hardware</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di QC Finish menggunakan Alat Scan.' position='top'/>
          </a> */}
        </div>

        {/* PackingLine */}
        <div className='list' ref={packingLineRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>QC PACKINGLINE</h1>
          <a href='http://10.10.5.12:8001/nds_pc_po' target='_blank' rel='noreferrer' className='app current'>
            <img src={Regular} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>PackingLine Manual</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di Packing Line menggunakan Alat Scan.' position='top'/>
          </a>
          <a href='http://10.10.5.12:8001/nds_pc_po_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>PackingLine QR Hardware</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk input output Sewing di Packing Line menggunakan Alat Scan.' position='top'/>
          </a>
        </div>

        {/* DefectInOut */}
        <div className='list' ref={defectInOutRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>Defect In Out</h1>
          <a href='http://10.10.5.12:8001/nds_defect' target='_blank' rel='noreferrer' className='app current'>
            <img src={Regular} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Defect In Out Manual</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk Input Defect Masuk/Defect Keluar di Manding/Spotcleaning secara Manual.' position='top'/>
          </a>
          <a href='https://10.10.5.62/sb_wip_defect_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={Qr} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Defect In Out QR Camera</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk Input Defect Masuk/Defect Keluar di Manding/Spotcleaning dengan cara Scan (Kamera).' position='top'/>
          </a>
          <a href='http://10.10.5.12:8001/nds_defect_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Defect In Out QR Hardware</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk Input Defect Masuk/Defect Keluar di Manding/Spotcleaning menggunakan Alat Scan.' position='top'/>
          </a>
        </div>

        {/* RejectInOut */}
        <div className='list' ref={rejectInOutRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>Reject In Out</h1>
          <a href='http://10.10.5.12:8001/nds_reject' target='_blank' rel='noreferrer' className='app current'>
            <img src={Regular} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Reject In Out Manual</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk Input Reject Masuk/Reject Keluar di QC Reject secara Manual.' position='top'/>
          </a>
          {/* <a href='https://10.10.5.62/sb_wip_defect_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={Qr} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Defect In Out QR Camera</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk Input Defect Masuk/Defect Keluar di Manding/Spotcleaning dengan cara Scan (Kamera).' position='top'/>
          </a> */}
          <a href='http://10.10.5.12:8001/nds_reject_qr' target='_blank' rel='noreferrer' className='app current'>
            <img src={QrHardware} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Reject In Out QR Hardware</li>
            </ul>
            <Tooltip className='tooltip' message='Aplikasi untuk Input Reject Masuk/Reject Keluar di QC Reject menggunakan Alat Scan.' position='top'/>
          </a>
        </div>

        {/* Sewing Report */}
        <div className='list' ref={sewingReportRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>SEWING REPORT</h1>
          <a href='http://10.10.5.62:8000/sb_wip_report' target='_blank' rel='noreferrer' className='app current'>
            <img src={Daily} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Daily Report</li>
            </ul>
            <Tooltip className='tooltip' message='Menampilkan Output Sewing/Finish/Packing secara Daily' position='top'/>
          </a>
          {/* <a href='http://10.10.5.62:8000/sb_wip_summary' target='_blank' rel='noreferrer' className='app'>
            <img src={Summary} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li>Summary Report</li>
            </ul>
            <Tooltip className='tooltip' message='Menampilkan Output Sewing secara Summary' position='top'/>
          </a> */}
        </div>

        {/* Sewing Dashboard */}
        <div className='list' ref={sewingDashboardRef}>
          <h1 style={{width: '100%', textAlign: 'center', color: '#fbfbfb', textShadow: '-1px 1px 3px #000'}}>SEWING DASHBOARD</h1>
          <a href='http://10.10.5.62:8000/dashboard-wip/factory' target='_blank' rel='noreferrer' className='app current'>
            <img src={Factory} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Factory Dashboard</li>
            </ul>
            <Tooltip className='tooltip' message='Dashboard Summary Semua Line' position='top'/>
          </a>
          <a href='http://10.10.5.62:8000/nds_wip/public/index.php/dashboard-wip' target='_blank' rel='noreferrer' className='app current'>
            <img src={Line} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Line Dashboard</li>
            </ul>
            <Tooltip className='tooltip' message='Dashboard Output Sewing per Line ' position='top'/>
          </a>
          <a href='http://10.10.5.62:8000/dashboard-wip/factory_defect' target='_blank' rel='noreferrer' className='app current'>
            <img src={DefectInOut} className='img-language' alt='html' />
            <ul className='app-sub'>
              <li className='current'>Factory Defect Dashboard</li>
            </ul>
            <Tooltip className='tooltip' message='Dashboard Defect Semua Line' position='top'/>
          </a>
        </div>

        <div className='close' onClick={openPopUp}><GrClose size={30} /></div>
      </div>

      {/* Link Selection */}
      <div className='modal' style={{display: openModal ? 'flex' : 'none'}}>
        <div className='list' ref={linkSelectionRef}>
          <div style={{margin: '10px'}}>
            <h3 style={{textAlign: 'center', margin: '5px'}} ref={linkSelectionTitleRef}></h3>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '5px'}}>
              <a href={localeLink} target='_blank' rel='noreferrer' className='btn' style={{backgroundColor: 'rgba(36, 131, 195, 1)', color: '#fbfbfb'}}>Local</a>
              <a href={onlineLink} target='_blank' rel='noreferrer' className='btn' style={{backgroundColor: 'rgba(39, 179, 67, 1)', color: '#fbfbfb'}}>Online</a>
            </div>
          </div>
        </div>

        <div className='close' onClick={openLinkSelection}><GrClose size={30} /></div>

      </div>

    </div>
  )
}

export default AppList