import React, { useEffect } from 'react';
import { useApp } from '../store/AppContext';
import LegacyHtmlFrame from './LegacyHtmlFrame';
import dailyTrackerHtml from '../../daily-tracker.html?raw';
import clientContractHtml from '../../client-contract.html?raw';
import clientInvoiceHtml from '../../client-invoice.html?raw';
import momentumHtml from '../../momentum.html?raw';

export default function PageShell() {
  const { curPage, renderTick } = useApp();

  useEffect(() => {
    if (window.renderAll) window.renderAll();
  }, [curPage, renderTick]);

  return (
    <div className="content">

      {/* ── ALL PROJECTS ── */}
      <div className="page on" id="pg-projects">
        <div className="sh">
          <div><div className="sh-title">All Projects</div><div className="sh-sub">Manage multiple construction sites</div></div>
          <button className="btn btn-navy" onClick={()=>window.openModal?.('project')}>+ New Project</button>
        </div>
        <div className="proj-grid" id="proj-grid"></div>
      </div>

      {/* ── DASHBOARD ── */}
      <div className="page" id="pg-dashboard">
        <div className="ceqa" id="ceqa-banner">
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <div style={{width:'9px',height:'9px',borderRadius:'50%',background:'var(--purple)',flexShrink:0}}></div>
            <div>
              <div style={{fontSize:'12px',fontWeight:700,color:'var(--purple)'}}>CEQA — Mitigated Negative Declaration · PRC §21080</div>
              <div style={{fontSize:'10px',color:'var(--purple)',opacity:.75}} id="ceqa-sub">Public Review closed 14 Jan 2026 · No unmitigated impacts</div>
            </div>
          </div>
          <div className="ceqa-pills"><span className="ceqa-pill">✓ NOD Filed</span><span className="ceqa-pill">✓ City Cleared</span></div>
        </div>
        <div className="metrics" id="dash-metrics"></div>
        <div className="two-col">
          <div>
            <div className="panel"><div className="ph"><span className="ph-title">🏗 Works</span><a onClick={()=>window.nav?.('works')} style={{fontSize:'11px',color:'var(--blue)',cursor:'pointer',fontWeight:600}}>All →</a></div><div id="d-works"></div></div>
            <div className="panel"><div className="ph"><span className="ph-title">💰 Quotes</span><a onClick={()=>window.nav?.('quotes')} style={{fontSize:'11px',color:'var(--blue)',cursor:'pointer',fontWeight:600}}>All →</a></div><div id="d-quotes"></div></div>
          </div>
          <div>
            <div className="panel"><div className="ph"><span className="ph-title">🏆 Milestones</span><a onClick={()=>window.nav?.('milestones')} style={{fontSize:'11px',color:'var(--blue)',cursor:'pointer',fontWeight:600}}>All →</a></div><div id="d-ms"></div></div>
            <div className="panel"><div className="ph"><span className="ph-title">🔍 Inspections</span><a onClick={()=>window.nav?.('inspections')} style={{fontSize:'11px',color:'var(--blue)',cursor:'pointer',fontWeight:600}}>All →</a></div><div id="d-ins"></div></div>
          </div>
        </div>
      </div>

      {/* ── WORKS ── */}
      <div className="page" id="pg-works">
        <div className="sh"><div><div className="sh-title">Works at Site</div><div className="sh-sub">CBC 2022 · CalOSHA · ACI 318</div></div><button className="btn btn-navy" onClick={()=>window.openModal?.('work')}>+ Add Work</button></div>
        <div className="panel"><div className="ph"><span className="ph-title">🏗 Work Items <span className="ph-ct" id="wc">0</span></span></div>
          <div className="tw"><table><thead><tr><th style={{width:'28%'}}>Work Item</th><th>CBC Ref.</th><th>Contractor</th><th>Status</th><th>Progress</th><th>Actions</th></tr></thead><tbody id="w-tbody"></tbody></table></div>
        </div>
      </div>

      {/* ── MILESTONES ── */}
      <div className="page" id="pg-milestones">
        <div className="sh">
          <div><div className="sh-title">Project Milestones</div><div className="sh-sub">CBC §105 · §110 · §111</div></div>
          <div style={{display:'flex',gap:'8px'}}>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.exportMilestonePDF?.()} title="Print / Save as PDF">🖨 PDF</button>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.exportMilestoneExcel?.()} title="Download Excel">📊 Excel</button>
            <button className="btn btn-navy" onClick={()=>window.openModal?.('milestone')}>+ Add Milestone</button>
          </div>
        </div>
        <div className="sum-grid">
          <div className="sum-card"><div className="sum-v" id="ms-done" style={{color:'var(--green)'}}>0</div><div className="sum-l">Achieved</div></div>
          <div className="sum-card"><div className="sum-v" id="ms-prog" style={{color:'var(--amber)'}}>0</div><div className="sum-l">In Progress</div></div>
          <div className="sum-card"><div className="sum-v" id="ms-up" style={{color:'var(--gray)'}}>0</div><div className="sum-l">Upcoming</div></div>
          <div className="sum-card" style={{borderTop:'3px solid var(--green)'}}><div className="sum-v" id="ms-paid" style={{color:'var(--green)',fontSize:'18px'}}>$0</div><div className="sum-l">✓ Paid</div></div>
          <div className="sum-card" style={{borderTop:'3px solid var(--red)'}}><div className="sum-v" id="ms-bal" style={{color:'var(--red)',fontSize:'18px'}}>$0</div><div className="sum-l">Balance Due</div></div>
          <div className="sum-card" style={{borderTop:'3px solid var(--navy)'}}><div className="sum-v" id="ms-total" style={{color:'var(--navy)',fontSize:'18px'}}>$0</div><div className="sum-l">Total Contract</div></div>
        </div>
        <div className="panel" style={{marginBottom:'18px'}}>
          <div className="ph" style={{background:'var(--navy)'}}>
            <span className="ph-title" style={{color:'#fff'}}>📒 Payment Ledger — All Milestones</span>
            <span style={{fontSize:'11px',color:'#8AAAC8'}}>Full breakdown of contract amounts, payments received &amp; balance</span>
          </div>
          <div id="ms-ledger"></div>
        </div>
        <div className="panel"><div className="ph"><span className="ph-title">🏆 Milestones <span className="ph-ct" id="msc">0</span></span></div>
          <div className="tw"><table><thead><tr><th style={{width:'24%'}}>Milestone</th><th>CBC Ref.</th><th>Date</th><th>Status</th><th>Contract Amt.</th><th>Progress Payments</th><th>Actions</th></tr></thead><tbody id="ms-tbody"></tbody></table></div>
        </div>
      </div>

      {/* ── QUOTES ── */}
      <div className="page" id="pg-quotes">
        <div className="sh"><div><div className="sh-title">Quotes Received</div><div className="sh-sub">CSI Divisions · California Codes · Attachments</div></div><button className="btn btn-navy" onClick={()=>window.openModal?.('quote')}>+ Add Quote</button></div>
        <div className="panel"><div className="ph"><span className="ph-title">💰 Quotes <span className="ph-ct" id="qc">0</span></span></div>
          <div className="tw"><table><thead><tr><th style={{width:'24%'}}>Vendor / Scope</th><th>Code Ref.</th><th>CSI</th><th>Amount</th><th>Date</th><th>Status</th><th>Files</th><th>Actions</th></tr></thead><tbody id="q-tbody"></tbody></table></div>
          <div style={{padding:'12px 16px',borderTop:'1px solid var(--border)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{display:'flex',gap:'22px',alignItems:'center'}}>
              <div><div style={{fontSize:'10px',color:'var(--muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'.5px'}}>All Quotes</div><span className="sum-v" id="q-total" style={{fontSize:'15px',color:'var(--muted)'}}>$0</span></div>
              <div style={{width:'1px',height:'28px',background:'var(--border)'}}></div>
              <div><div style={{fontSize:'10px',color:'var(--green)',fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px'}}>✓ Approved Total</div><span className="sum-v" id="q-approved" style={{fontSize:'20px',color:'var(--green)'}}>$0</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PLANS ── */}
      <div className="page" id="pg-plans">
        <div className="sh"><div><div className="sh-title">Plans &amp; Documents</div><div className="sh-sub">Drawings, permits, reports, and project files</div></div><button className="btn btn-navy" onClick={()=>window.openModal?.('plan')}>+ Upload Document</button></div>
        <div className="panel"><div className="ph"><span className="ph-title">📐 Documents <span className="ph-ct" id="plc">0</span></span></div>
          <div style={{padding:'16px'}} id="plans-wrap"></div>
        </div>
      </div>

      {/* ── INSPECTIONS ── */}
      <div className="page" id="pg-inspections">
        <div className="sh"><div><div className="sh-title">Inspections Scheduled</div><div className="sh-sub">City of Cupertino Building Division · CalOSHA · CBC §110</div></div><button className="btn btn-navy" onClick={()=>window.openModal?.('inspection')}>+ Add Inspection</button></div>
        <div className="panel"><div className="ph"><span className="ph-title">🔍 Inspections <span className="ph-ct" id="ic">0</span></span></div><div id="ins-list"></div></div>
        <div className="panel"><div className="ph"><span className="ph-title">👤 Key Contacts</span></div>
          <table><thead><tr><th>Role</th><th>Name</th><th>Contact</th><th>AHJ</th></tr></thead>
          <tbody>
            <tr><td className="tn">Building Division</td><td>John Park</td><td>(408) 777-3228</td><td><span className="badge b-blue">Cupertino</span></td></tr>
            <tr><td className="tn">Project EOR</td><td>Sarah Kim, SE</td><td>Bay Structural Group</td><td><span className="badge b-teal">Structural</span></td></tr>
            <tr><td className="tn">CalOSHA District</td><td>District Office</td><td>San Jose, CA</td><td><span className="badge b-red">CalOSHA</span></td></tr>
          </tbody></table>
        </div>
      </div>

      {/* ── PAYMENTS ── */}
      <div className="page" id="pg-payments">
        <div className="sh">
          <div><div className="sh-title">Payments</div><div className="sh-sub">Vendor contracts · Invoice milestones · Lien waivers</div></div>
          <div style={{display:'flex',gap:'8px'}}>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.exportPaymentLedgerPDF?.()} title="Print / Save as PDF">🖨 Ledger PDF</button>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.exportPaymentLedgerExcel?.()} title="Download Excel spreadsheet">📊 Ledger Excel</button>
          </div>
        </div>
        <div id="pay-export-bar" style={{display:'none',background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'9px',padding:'10px 16px',marginBottom:'14px',flexWrap:'wrap',gap:'8px',alignItems:'center'}}>
          <span style={{fontSize:'12px',fontWeight:600,color:'var(--muted)'}}>Export per subcontractor:</span>
          <div id="sub-export-btns" style={{display:'flex',gap:'6px',flexWrap:'wrap'}}></div>
        </div>
        <div id="pay-smart-search-bar" style={{display:'none',marginBottom:'16px'}}>
          <div style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'10px',boxShadow:'var(--sh)',overflow:'hidden'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 16px',borderBottom:'1px solid var(--border)'}}>
              <span style={{fontSize:'18px',color:'var(--blue)'}}>🔍</span>
              <input id="pay-smart-search" type="text" placeholder="Search vendor by name or trade…" onInput={()=>window.runPaySmartSearch?.()} autoComplete="off"
                style={{border:'none',outline:'none',fontSize:'14px',fontWeight:500,flex:1,background:'transparent',fontFamily:"'Barlow',sans-serif",color:'var(--text)'}}/>
              <button id="pay-smart-clear" onClick={()=>window.clearPaySmartSearch?.()} style={{display:'none',background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'5px',color:'var(--muted)',cursor:'pointer',fontSize:'12px',padding:'3px 9px'}}>✕ Clear</button>
            </div>
            <div id="pay-smart-results" style={{display:'none'}}></div>
          </div>
        </div>
        <div id="pay-filter-bar" style={{display:'none',background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'9px',padding:'12px 16px',marginBottom:'14px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px',flexWrap:'wrap'}}>
            <div style={{display:'flex',alignItems:'center',gap:'7px',flex:1,minWidth:'200px',background:'#fff',border:'1px solid var(--border)',borderRadius:'7px',padding:'5px 10px'}}>
              <span style={{color:'var(--muted)',fontSize:'14px'}}>🔍</span>
              <input id="pay-search" type="text" placeholder="Search vendor name…" onInput={()=>window.filterPayVendors?.()} style={{border:'none',outline:'none',fontSize:'12px',flex:1,background:'transparent'}}/>
              <button onClick={()=>window.clearPaySearch?.()} style={{background:'none',border:'none',color:'var(--muted)',cursor:'pointer',fontSize:'14px',padding:0}} title="Clear">×</button>
            </div>
            <div id="pay-vendor-checks" style={{display:'flex',flexWrap:'wrap',gap:'6px'}}></div>
            <button onClick={()=>window.showAllPayVendors?.()} className="btn btn-ghost btn-xs" style={{fontSize:'10px'}}>Show All</button>
          </div>
        </div>
        <div id="pay-pie-panel" style={{display:'none',marginBottom:'18px'}}>
          <div className="panel">
            <div className="ph"><span className="ph-title">📊 Vendor Payment Status Overview</span></div>
            <div style={{display:'flex',alignItems:'flex-start',gap:'24px',padding:'16px 20px',flexWrap:'wrap'}}>
              <div id="pay-pie-svg-wrap" style={{flexShrink:0,width:'180px',height:'180px',position:'relative'}}></div>
              <div id="pay-pie-legend" style={{flex:1,minWidth:'200px'}}></div>
            </div>
          </div>
        </div>
        <div className="panel" id="pay-ledger-panel" style={{display:'none',marginBottom:'18px'}}>
          <div className="ph" style={{background:'var(--navy)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <span className="ph-title" style={{color:'#fff'}}>📒 VENDOR PAYMENT LEDGER</span>
              <span style={{fontSize:'10px',color:'#8AAAC8'}}>Contract · Paid · Balance by vendor</span>
            </div>
            <div style={{display:'flex',gap:'6px'}}>
              <button onClick={()=>window.exportVCPaymentLedgerPDF?.()} className="btn btn-xs" style={{background:'rgba(255,255,255,.13)',color:'#fff',border:'1px solid rgba(255,255,255,.25)',fontSize:'10px'}}>🖨 PDF</button>
              <button onClick={()=>window.exportVCPaymentLedgerExcel?.()} className="btn btn-xs" style={{background:'rgba(255,255,255,.13)',color:'#fff',border:'1px solid rgba(255,255,255,.25)',fontSize:'10px'}}>📊 Excel</button>
            </div>
          </div>
          <div id="pay-ledger"></div>
        </div>
        <div id="pay-list"></div>
        <div id="pay-trade-panel" style={{display:'none',marginTop:'4px'}}></div>
        <div id="pay-empty" style={{display:'none'}} className="empty"><div className="empty-ic">💳</div>No approved quotes yet. Mark a quote as Approved to start tracking payments.</div>
      </div>

      {/* ── VENDOR CONTRACTS ── */}
      <div className="page" id="pg-vendors">
        <div className="sh">
          <div><div className="sh-title">Vendor Contracts</div><div className="sh-sub">Subcontractor agreements · Signed contracts · SOW documents</div></div>
          <button className="btn btn-navy" onClick={()=>window.openModal?.('vendor')}>+ Add Vendor Contract</button>
        </div>
        <div id="ven-content"></div>
      </div>

      {/* ── INVOICES ── */}
      <div className="page" id="pg-invoices">
        <div className="sh">
          <div><div className="sh-title">Invoice Tracker</div><div className="sh-sub">Track invoices against contract · Due &amp; paid amounts per subcontractor</div></div>
          <div style={{display:'flex',gap:'8px'}}>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.exportInvoicePDF?.()}>🖨 PDF</button>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.exportInvoiceExcel?.()}>📊 Excel</button>
            <button className="btn btn-navy" onClick={()=>window.openModal?.('invoice')}>+ Add Invoice</button>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'18px'}}>
          <div className="mc" style={{'--ac':'var(--navy)'}}><div className="mc-lbl">Total Contract Value</div><div className="mc-val" id="inv-contract" style={{fontSize:'22px'}}>$0</div><div className="mc-sub">All signed vendor contracts</div></div>
          <div className="mc" style={{'--ac':'var(--blue)'}}><div className="mc-lbl">Total Invoiced</div><div className="mc-val" id="inv-invoiced" style={{fontSize:'22px',color:'var(--blue)'}}>$0</div><div className="mc-sub">Sum of all invoices</div></div>
          <div className="mc" style={{'--ac':'var(--green)'}}><div className="mc-lbl">✓ Total Paid</div><div className="mc-val" id="inv-paid" style={{fontSize:'22px',color:'var(--green)'}}>$0</div><div className="mc-sub">Invoices marked paid</div></div>
          <div className="mc" style={{'--ac':'var(--red)'}}><div className="mc-lbl">Due / Outstanding</div><div className="mc-val" id="inv-due" style={{fontSize:'22px',color:'var(--red)'}}>$0</div><div className="mc-sub">Invoiced but unpaid</div></div>
        </div>
        <div id="inv-content"></div>
      </div>

      {/* ── CHECKLIST ── */}
      <div className="page" id="pg-checklist">
        <div className="sh">
          <div><div className="sh-title">Project Checklist</div><div className="sh-sub">Tasks, punch lists, and pre-construction checklists</div></div>
          <div style={{display:'flex',gap:'8px'}}>
            <button className="btn btn-ghost btn-sm" onClick={()=>window.openModal?.('chklist-cat')}>+ Add Category</button>
            <button className="btn btn-navy" onClick={()=>window.openModal?.('chklist-item')}>+ Add Item</button>
          </div>
        </div>
        <div style={{display:'flex',gap:'10px',marginBottom:'16px',flexWrap:'wrap'}}>
          <div className="mc" style={{'--ac':'var(--navy)'}}><div className="mc-lbl">Total Items</div><div className="mc-val" id="chk-total" style={{fontSize:'22px'}}>0</div></div>
          <div className="mc" style={{'--ac':'var(--green)'}}><div className="mc-lbl">✓ Complete</div><div className="mc-val" id="chk-done" style={{fontSize:'22px',color:'var(--green)'}}>0</div></div>
          <div className="mc" style={{'--ac':'var(--amber)'}}><div className="mc-lbl">In Progress</div><div className="mc-val" id="chk-prog" style={{fontSize:'22px',color:'var(--amber)'}}>0</div></div>
          <div className="mc" style={{'--ac':'var(--red)'}}><div className="mc-lbl">Not Started</div><div className="mc-val" id="chk-open" style={{fontSize:'22px',color:'var(--red)'}}>0</div></div>
        </div>
        <div id="chk-content"></div>
      </div>

      {/* ── QA/QC ── */}
      <div className="page" id="pg-qaqc">
        <div className="sh">
          <div><div className="sh-title">QA/QC Log</div><div className="sh-sub">Quality assurance · Non-conformance reports · Observations</div></div>
          <button className="btn btn-navy" onClick={()=>window.openModal?.('qaqc-item')}>+ Add QA/QC Entry</button>
        </div>
        <div style={{display:'flex',gap:'10px',marginBottom:'16px',flexWrap:'wrap'}}>
          <div className="mc" style={{'--ac':'var(--navy)'}}><div className="mc-lbl">Total Entries</div><div className="mc-val" id="qa-total" style={{fontSize:'22px'}}>0</div></div>
          <div className="mc" style={{'--ac':'var(--red)'}}><div className="mc-lbl">Open NCR</div><div className="mc-val" id="qa-ncr" style={{fontSize:'22px',color:'var(--red)'}}>0</div></div>
          <div className="mc" style={{'--ac':'var(--green)'}}><div className="mc-lbl">Closed</div><div className="mc-val" id="qa-closed" style={{fontSize:'22px',color:'var(--green)'}}>0</div></div>
          <div className="mc" style={{'--ac':'var(--amber)'}}><div className="mc-lbl">Observations</div><div className="mc-val" id="qa-obs" style={{fontSize:'22px',color:'var(--amber)'}}>0</div></div>
        </div>
        <div id="qa-content"></div>
      </div>

      {/* ── COMPLIANCE ── */}
      <div className="page" id="pg-compliance">
        <div className="sh"><div><div className="sh-title">Compliance Tracker</div><div className="sh-sub">Title 24 · CALGreen · CBC 2022</div></div></div>
        <div className="two-col">
          <div className="panel"><div className="ph"><span className="ph-title">⚡ Title 24 Energy (Part 6)</span><span className="ph-ct">2025</span></div><div style={{padding:'10px 16px'}} id="t24-list"></div></div>
          <div className="panel"><div className="ph"><span className="ph-title">🌿 CALGreen Div 4 Mandatory</span><span className="ph-ct">2022</span></div><div style={{padding:'10px 16px'}} id="cg-list"></div></div>
        </div>
        <div className="panel"><div className="ph"><span className="ph-title">📋 Regulatory Summary</span></div>
          <table><thead><tr><th>Code</th><th>Description</th><th>Section</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td className="tn">CBC 2022</td><td>California Building Code</td><td>All applicable</td><td><span className="badge b-blue">Active</span></td></tr>
            <tr><td className="tn">CPC 2022</td><td>California Plumbing Code</td><td>§903 DWV</td><td><span className="badge b-blue">Active</span></td></tr>
            <tr><td className="tn">CMC 2022</td><td>California Mechanical Code</td><td>Mechanical systems</td><td><span className="badge b-blue">Active</span></td></tr>
            <tr><td className="tn">CEC 2022</td><td>California Electrical Code</td><td>All electrical</td><td><span className="badge b-blue">Active</span></td></tr>
            <tr><td className="tn">CALGreen 2022</td><td>Green Building Standards</td><td>Div 4 Mandatory</td><td><span className="badge b-amber">In Progress</span></td></tr>
            <tr><td className="tn">Title 24 Part 6</td><td>Energy Efficiency — 2025</td><td>Envelope/Mech/Lighting</td><td><span className="badge b-amber">In Progress</span></td></tr>
            <tr><td className="tn">CEQA</td><td>Environmental Quality Act</td><td>PRC §21080</td><td><span className="badge b-green">MND Approved</span></td></tr>
            <tr><td className="tn">CalOSHA</td><td>Worker Safety — Title 8</td><td>§1735</td><td><span className="badge b-blue">Enforced</span></td></tr>
            <tr><td className="tn">ASCE 7-22</td><td>Structural Loads — SDC D</td><td>Ch.11/12</td><td><span className="badge b-green">Compliant</span></td></tr>
          </tbody></table>
        </div>
      </div>

      {/* ── EXPORT ── */}
      <div className="page" id="pg-export">
        <div className="sh"><div><div className="sh-title">Export &amp; Download</div><div className="sh-sub">Reports, backups, and attached files</div></div></div>
        <div style={{marginBottom:'18px'}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'15px',fontWeight:700,letterSpacing:'.5px',textTransform:'uppercase',color:'var(--muted)',marginBottom:'10px'}}>📄 Export Document</div>
          <div className="exp-grid">
            <div className="exp-card" onClick={()=>window.exportPDF?.()} style={{position:'relative'}}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>📕</div>
              <div style={{fontSize:'14px',fontWeight:700}}>PDF Report</div>
              <div style={{fontSize:'11px',color:'var(--muted)',marginTop:'4px'}}>.pdf — direct download</div>
              <div style={{marginTop:'10px'}}>
                <span style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'var(--red-l)',color:'var(--red)',fontSize:'11px',fontWeight:700,padding:'4px 12px',borderRadius:'5px',border:'1px solid #F5C0C0'}}>🖨 Print / Save as PDF</span>
              </div>
            </div>
            <div className="exp-card" onClick={()=>window.exportWord?.()}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>📘</div>
              <div style={{fontSize:'14px',fontWeight:700}}>Word Document</div>
              <div style={{fontSize:'11px',color:'var(--muted)',marginTop:'4px'}}>.doc — editable report</div>
              <div style={{marginTop:'10px'}}><span style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'var(--blue-l)',color:'var(--blue)',fontSize:'11px',fontWeight:700,padding:'4px 12px',borderRadius:'5px',border:'1px solid #B0D0F0'}}>⬇ Download Word</span></div>
            </div>
            <div className="exp-card" onClick={()=>window.exportPPTX?.()}>
              <div style={{fontSize:'32px',marginBottom:'8px'}}>📙</div>
              <div style={{fontSize:'14px',fontWeight:700}}>PowerPoint</div>
              <div style={{fontSize:'11px',color:'var(--muted)',marginTop:'4px'}}>.pptx — presentation deck</div>
              <div style={{marginTop:'10px'}}><span style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'var(--amber-l)',color:'var(--amber)',fontSize:'11px',fontWeight:700,padding:'4px 12px',borderRadius:'5px',border:'1px solid #F5D9A0'}}>⬇ Download PPTX</span></div>
            </div>
          </div>
        </div>
        <div style={{marginBottom:'18px'}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'15px',fontWeight:700,letterSpacing:'.5px',textTransform:'uppercase',color:'var(--muted)',marginBottom:'10px'}}>💾 Data &amp; Files</div>
          <div className="exp-grid">
            <div className="exp-card" onClick={()=>window.exportJSON?.()}><div style={{fontSize:'28px',marginBottom:'8px'}}>📦</div><div style={{fontSize:'14px',fontWeight:700}}>Export Project Data</div><div style={{fontSize:'11px',color:'var(--muted)',marginTop:'4px'}}>JSON backup — re-importable</div></div>
            <div className="exp-card" onClick={()=>window.exportAllFiles?.()}><div style={{fontSize:'28px',marginBottom:'8px'}}>🗂</div><div style={{fontSize:'14px',fontWeight:700}}>Download All Files</div><div style={{fontSize:'11px',color:'var(--muted)',marginTop:'4px'}}>All attachments in this project</div></div>
          </div>
        </div>
        <div className="panel"><div className="ph"><span className="ph-title">📂 Project Files</span></div><div style={{padding:'16px'}} id="exp-files"></div></div>
        <div className="panel" style={{marginTop:0}}><div className="ph"><span className="ph-title">📥 Import Project</span></div>
          <div style={{padding:'16px'}}><p style={{fontSize:'13px',color:'var(--muted)',marginBottom:'10px'}}>Restore a previously exported JSON backup.</p>
            <label className="btn btn-ghost" style={{cursor:'pointer'}}>📂 Choose JSON File<input type="file" accept=".json" onChange={e=>window.importJSON?.(e.target)} style={{display:'none'}}/></label>
          </div>
        </div>
      </div>

      <div className="page" id="pg-daily-tracker" style={{padding:0,overflow:'hidden',height:'calc(100vh - 54px)'}}>
        <LegacyHtmlFrame
          frameId="daily-tracker-frame"
          title="Daily Tracker"
          html={dailyTrackerHtml}
          isActive={curPage === 'daily-tracker'}
        />
      </div>

      <div className="page" id="pg-client-contract" style={{padding:0,overflow:'hidden',height:'calc(100vh - 54px)'}}>
        <LegacyHtmlFrame
          frameId="client-contract-frame"
          title="Client Contract"
          html={clientContractHtml}
          isActive={curPage === 'client-contract'}
          onActivate={(frameWindow) => frameWindow.syncActiveProject?.()}
        />
      </div>

      <div className="page" id="pg-client-invoice" style={{padding:0,overflow:'hidden',height:'calc(100vh - 54px)'}}>
        <LegacyHtmlFrame
          frameId="client-invoice-frame"
          title="Client Invoice"
          html={clientInvoiceHtml}
          isActive={curPage === 'client-invoice'}
          onActivate={(frameWindow) => frameWindow.syncActiveProject?.()}
        />
      </div>

      {/* ── SETTINGS ── */}
      <div className="page" id="pg-settings">
        <div className="sh">
          <div><div className="sh-title">⚙ Settings</div><div className="sh-sub">Email configuration · App preferences</div></div>
        </div>
        <div className="panel" style={{maxWidth:'760px',marginBottom:'20px'}}>
          <div className="ph" style={{background:'var(--navy)'}}>
            <span className="ph-title" style={{color:'#fff'}}>📧 Email Setup — Direct Send via SMTP</span>
          </div>
          <div style={{padding:'20px 24px'}}>
            <div style={{background:'var(--blue-l)',border:'1px solid #B0D0F0',borderRadius:'8px',padding:'12px 16px',marginBottom:'20px',fontSize:'12px',lineHeight:'1.8',color:'var(--navy)'}}>
              <strong>How to enable SMTP sending:</strong><br/>
              1. Start the Livio backend on <code style={{background:'#e8f2fc',padding:'1px 4px',borderRadius:'3px'}}>http://127.0.0.1:3001</code><br/>
              2. Enter your SMTP server details below, or keep them blank if the backend already has them in <code style={{background:'#e8f2fc',padding:'1px 4px',borderRadius:'3px'}}>backend/.env</code><br/>
              3. Use an app password for Gmail / Outlook when required by your mail provider<br/>
              4. Save, then click <strong>Send Test Email</strong> to verify everything before emailing vendors or clients
            </div>
            <div id="email-cfg-status" style={{marginBottom:'16px'}}></div>
            <div className="fr">
              <label className="fl">Backend API Base</label>
              <input className="fi" id="cfg-api-base" placeholder="http://127.0.0.1:3001/api" autoComplete="off"/>
              <div style={{fontSize:'10px',color:'var(--muted)',marginTop:'3px'}}>Leave as default unless your backend runs on a different URL</div>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}>
                <label className="fl">SMTP Host</label>
                <input className="fi" id="cfg-smtp-host" placeholder="smtp.gmail.com" autoComplete="off"/>
              </div>
              <div className="fr" style={{margin:0}}>
                <label className="fl">SMTP Port</label>
                <input className="fi" id="cfg-smtp-port" type="number" placeholder="587" autoComplete="off"/>
              </div>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}>
                <label className="fl">SMTP Username</label>
                <input className="fi" id="cfg-smtp-user" placeholder="yourname@company.com" autoComplete="off"/>
              </div>
              <div className="fr" style={{margin:0}}>
                <label className="fl">SMTP Password</label>
                <input className="fi" id="cfg-smtp-pass" type="password" placeholder="App password or SMTP password" autoComplete="off"/>
              </div>
            </div>
            <div className="fr" style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <input id="cfg-smtp-secure" type="checkbox" style={{width:'16px',height:'16px',accentColor:'var(--blue)'}}/>
              <label className="fl" htmlFor="cfg-smtp-secure" style={{margin:0,cursor:'pointer'}}>Use secure SMTP / SSL</label>
            </div>
            <div className="fg">
              <div className="fr" style={{margin:0}}>
                <label className="fl">From Name</label>
                <input className="fi" id="cfg-from-name" placeholder="Livio Building Systems" autoComplete="off"/>
              </div>
              <div className="fr" style={{margin:0}}>
                <label className="fl">Reply-To Email</label>
                <input className="fi" id="cfg-from-email" type="email" placeholder="billing@company.com"/>
              </div>
            </div>
            <div style={{display:'flex',gap:'10px',marginTop:'8px'}}>
              <button onClick={()=>window.saveEmailConfig?.()} className="btn btn-navy" style={{padding:'9px 22px'}}>💾 Save Email Settings</button>
              <button onClick={()=>window.testEmailConfig?.()} className="btn btn-ghost" style={{padding:'9px 22px'}}>🧪 Send Test Email</button>
              <button onClick={()=>window.clearEmailConfig?.()} className="btn" style={{padding:'9px 16px',background:'var(--red-l)',color:'var(--red)',border:'1px solid #F5B8B8',marginLeft:'auto'}}>🗑 Clear</button>
            </div>
          </div>
        </div>
      </div>

      <div className="page" id="pg-momentum" style={{padding:0,overflow:'hidden',height:'calc(100vh - 54px)'}}>
        <LegacyHtmlFrame
          frameId="momentum-frame"
          title="Momentum"
          html={momentumHtml}
          isActive={curPage === 'momentum'}
        />
      </div>

      {/* ── VENDOR DIRECTORY ── */}
      <div className="page" id="pg-vendor-directory">
        <div className="sh">
          <div><div className="sh-title">Vendor Directory</div><div className="sh-sub">Subcontractor profiles · Payment details · License &amp; banking info</div></div>
          <button className="btn btn-navy" onClick={()=>window.openVDirModal?.()}>+ Add Vendor</button>
        </div>
        <div id="vdir-content"></div>
      </div>

    </div>
  );
}
