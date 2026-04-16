
// ══════════════════════════════════════════════════════════════════
//  CONSTANTS & HELPERS
// ══════════════════════════════════════════════════════════════════
const SK = 'livio_v1';
const COLORS = ['#1A6BC4','#2D6A0F','#A86200','#9B1F1F','#0D6E58','#4A3FB0','#555451','#7A3535'];

const CITY_DB = {
  // ── Santa Clara County ──
  'cupertino':              {county:'Santa Clara County',   state:'CA', zip:'95014', prefix:'CUPR'},
  'san jose':               {county:'Santa Clara County',   state:'CA', zip:'95101', prefix:'SJBP'},
  'santa clara':            {county:'Santa Clara County',   state:'CA', zip:'95050', prefix:'SCLR'},
  'sunnyvale':              {county:'Santa Clara County',   state:'CA', zip:'94086', prefix:'SVBP'},
  'mountain view':          {county:'Santa Clara County',   state:'CA', zip:'94040', prefix:'MVBP'},
  'palo alto':              {county:'Santa Clara County',   state:'CA', zip:'94301', prefix:'PABP'},
  'los altos':              {county:'Santa Clara County',   state:'CA', zip:'94022', prefix:'LABP'},
  'los altos hills':        {county:'Santa Clara County',   state:'CA', zip:'94022', prefix:'LAHB'},
  'campbell':               {county:'Santa Clara County',   state:'CA', zip:'95008', prefix:'CMPB'},
  'los gatos':              {county:'Santa Clara County',   state:'CA', zip:'95030', prefix:'LGBP'},
  'saratoga':               {county:'Santa Clara County',   state:'CA', zip:'95070', prefix:'SRBP'},
  'milpitas':               {county:'Santa Clara County',   state:'CA', zip:'95035', prefix:'MLBP'},
  'gilroy':                 {county:'Santa Clara County',   state:'CA', zip:'95020', prefix:'GLBP'},
  'morgan hill':            {county:'Santa Clara County',   state:'CA', zip:'95037', prefix:'MHBP'},
  'monte sereno':           {county:'Santa Clara County',   state:'CA', zip:'95030', prefix:'MSBP'},
  // ── San Mateo County ──
  'san mateo':              {county:'San Mateo County',     state:'CA', zip:'94401', prefix:'SMTB'},
  'redwood city':           {county:'San Mateo County',     state:'CA', zip:'94061', prefix:'RWBP'},
  'menlo park':             {county:'San Mateo County',     state:'CA', zip:'94025', prefix:'MPBP'},
  'foster city':            {county:'San Mateo County',     state:'CA', zip:'94404', prefix:'FCBP'},
  'burlingame':             {county:'San Mateo County',     state:'CA', zip:'94010', prefix:'BLBP'},
  'daly city':              {county:'San Mateo County',     state:'CA', zip:'94014', prefix:'DCBP'},
  'south san francisco':    {county:'San Mateo County',     state:'CA', zip:'94080', prefix:'SSFB'},
  'san carlos':             {county:'San Mateo County',     state:'CA', zip:'94070', prefix:'SCBP'},
  'belmont':                {county:'San Mateo County',     state:'CA', zip:'94002', prefix:'BLMB'},
  'half moon bay':          {county:'San Mateo County',     state:'CA', zip:'94019', prefix:'HMBB'},
  'millbrae':               {county:'San Mateo County',     state:'CA', zip:'94030', prefix:'MLRB'},
  'san bruno':              {county:'San Mateo County',     state:'CA', zip:'94066', prefix:'SBRB'},
  'pacifica':               {county:'San Mateo County',     state:'CA', zip:'94044', prefix:'PCFB'},
  'east palo alto':         {county:'San Mateo County',     state:'CA', zip:'94303', prefix:'EPAB'},
  'atherton':               {county:'San Mateo County',     state:'CA', zip:'94027', prefix:'ATHN'},
  'woodside':               {county:'San Mateo County',     state:'CA', zip:'94062', prefix:'WDSB'},
  'portola valley':         {county:'San Mateo County',     state:'CA', zip:'94028', prefix:'PVBP'},
  // ── Alameda County ──
  'oakland':                {county:'Alameda County',       state:'CA', zip:'94601', prefix:'OAKB'},
  'fremont':                {county:'Alameda County',       state:'CA', zip:'94536', prefix:'FRBP'},
  'hayward':                {county:'Alameda County',       state:'CA', zip:'94541', prefix:'HWBP'},
  'berkeley':               {county:'Alameda County',       state:'CA', zip:'94710', prefix:'BKBP'},
  'san leandro':            {county:'Alameda County',       state:'CA', zip:'94577', prefix:'SLBP'},
  'newark':                 {county:'Alameda County',       state:'CA', zip:'94560', prefix:'NWKB'},
  'union city':             {county:'Alameda County',       state:'CA', zip:'94587', prefix:'UCBP'},
  'livermore':              {county:'Alameda County',       state:'CA', zip:'94550', prefix:'LVRB'},
  'pleasanton':             {county:'Alameda County',       state:'CA', zip:'94566', prefix:'PLSB'},
  'dublin':                 {county:'Alameda County',       state:'CA', zip:'94568', prefix:'DBLB'},
  'alameda':                {county:'Alameda County',       state:'CA', zip:'94501', prefix:'ALMB'},
  'emeryville':             {county:'Alameda County',       state:'CA', zip:'94608', prefix:'EMRB'},
  'albany':                 {county:'Alameda County',       state:'CA', zip:'94706', prefix:'ALBX'},
  'piedmont':               {county:'Alameda County',       state:'CA', zip:'94611', prefix:'PDMB'},
  // ── San Francisco County ──
  'san francisco':          {county:'San Francisco County', state:'CA', zip:'94103', prefix:'SFDB'},
  // ── Contra Costa County ──
  'walnut creek':           {county:'Contra Costa County',  state:'CA', zip:'94596', prefix:'WCBP'},
  'concord':                {county:'Contra Costa County',  state:'CA', zip:'94520', prefix:'CNBP'},
  'richmond':               {county:'Contra Costa County',  state:'CA', zip:'94801', prefix:'RCBP'},
  'antioch':                {county:'Contra Costa County',  state:'CA', zip:'94509', prefix:'ATCB'},
  'pittsburg':              {county:'Contra Costa County',  state:'CA', zip:'94565', prefix:'PTBP'},
  'san ramon':              {county:'Contra Costa County',  state:'CA', zip:'94582', prefix:'SRNB'},
  'danville':               {county:'Contra Costa County',  state:'CA', zip:'94526', prefix:'DNVB'},
  'martinez':               {county:'Contra Costa County',  state:'CA', zip:'94553', prefix:'MRTZ'},
  'el cerrito':             {county:'Contra Costa County',  state:'CA', zip:'94530', prefix:'ELCB'},
  'hercules':               {county:'Contra Costa County',  state:'CA', zip:'94547', prefix:'HRCB'},
  'brentwood':              {county:'Contra Costa County',  state:'CA', zip:'94513', prefix:'BTWB'},
  'oakley':                 {county:'Contra Costa County',  state:'CA', zip:'94561', prefix:'OKLY'},
  'orinda':                 {county:'Contra Costa County',  state:'CA', zip:'94563', prefix:'ORNB'},
  'moraga':                 {county:'Contra Costa County',  state:'CA', zip:'94556', prefix:'MRGB'},
  // ── Marin County ──
  'san rafael':             {county:'Marin County',         state:'CA', zip:'94901', prefix:'SRFB'},
  'novato':                 {county:'Marin County',         state:'CA', zip:'94945', prefix:'NVTB'},
  'mill valley':            {county:'Marin County',         state:'CA', zip:'94941', prefix:'MVLB'},
  'san anselmo':            {county:'Marin County',         state:'CA', zip:'94960', prefix:'SANB'},
  'fairfax':                {county:'Marin County',         state:'CA', zip:'94930', prefix:'FFXB'},
  'corte madera':           {county:'Marin County',         state:'CA', zip:'94925', prefix:'CMBP'},
  'tiburon':                {county:'Marin County',         state:'CA', zip:'94920', prefix:'TBRN'},
  'sausalito':              {county:'Marin County',         state:'CA', zip:'94965', prefix:'SLTB'},
  // ── Sonoma County ──
  'santa rosa':             {county:'Sonoma County',        state:'CA', zip:'95401', prefix:'SNRB'},
  'petaluma':               {county:'Sonoma County',        state:'CA', zip:'94952', prefix:'PTLB'},
  'rohnert park':           {county:'Sonoma County',        state:'CA', zip:'94928', prefix:'RPKB'},
  'windsor':                {county:'Sonoma County',        state:'CA', zip:'95492', prefix:'WDSB'},
  'healdsburg':             {county:'Sonoma County',        state:'CA', zip:'95448', prefix:'HLDB'},
  // ── Napa County ──
  'napa':                   {county:'Napa County',          state:'CA', zip:'94559', prefix:'NAPB'},
  'american canyon':        {county:'Napa County',          state:'CA', zip:'94503', prefix:'ACNB'},
  // ── Solano County ──
  'vallejo':                {county:'Solano County',        state:'CA', zip:'94590', prefix:'VLJB'},
  'fairfield':              {county:'Solano County',        state:'CA', zip:'94533', prefix:'FFLB'},
  'vacaville':              {county:'Solano County',        state:'CA', zip:'95688', prefix:'VCVB'},
  'benicia':                {county:'Solano County',        state:'CA', zip:'94510', prefix:'BNCB'},
  'dixon':                  {county:'Solano County',        state:'CA', zip:'95620', prefix:'DIXB'},
  // ── Los Angeles County ──
  'los angeles':            {county:'Los Angeles County',   state:'CA', zip:'90001', prefix:'LABC'},
  'long beach':             {county:'Los Angeles County',   state:'CA', zip:'90801', prefix:'LBBP'},
  'glendale':               {county:'Los Angeles County',   state:'CA', zip:'91201', prefix:'GLDB'},
  'pasadena':               {county:'Los Angeles County',   state:'CA', zip:'91101', prefix:'PSDB'},
  'torrance':               {county:'Los Angeles County',   state:'CA', zip:'90501', prefix:'TRRB'},
  'burbank':                {county:'Los Angeles County',   state:'CA', zip:'91501', prefix:'BRBP'},
  'santa monica':           {county:'Los Angeles County',   state:'CA', zip:'90401', prefix:'STMB'},
  'inglewood':              {county:'Los Angeles County',   state:'CA', zip:'90301', prefix:'INGLB'},
  'hawthorne':              {county:'Los Angeles County',   state:'CA', zip:'90250', prefix:'HWTH'},
  'el monte':               {county:'Los Angeles County',   state:'CA', zip:'91731', prefix:'ELMB'},
  'pomona':                 {county:'Los Angeles County',   state:'CA', zip:'91766', prefix:'PMNB'},
  'carson':                 {county:'Los Angeles County',   state:'CA', zip:'90745', prefix:'CRSNB'},
  'compton':                {county:'Los Angeles County',   state:'CA', zip:'90220', prefix:'CMPB'},
  'downey':                 {county:'Los Angeles County',   state:'CA', zip:'90240', prefix:'DWNB'},
  'norwalk':                {county:'Los Angeles County',   state:'CA', zip:'90650', prefix:'NWKB'},
  'west covina':            {county:'Los Angeles County',   state:'CA', zip:'91790', prefix:'WCVB'},
  'alhambra':               {county:'Los Angeles County',   state:'CA', zip:'91801', prefix:'ALHB'},
  'whittier':               {county:'Los Angeles County',   state:'CA', zip:'90601', prefix:'WHTB'},
  'beverly hills':          {county:'Los Angeles County',   state:'CA', zip:'90210', prefix:'BVHB'},
  'culver city':            {county:'Los Angeles County',   state:'CA', zip:'90230', prefix:'CCIB'},
  'west hollywood':         {county:'Los Angeles County',   state:'CA', zip:'90046', prefix:'WHWB'},
  'calabasas':              {county:'Los Angeles County',   state:'CA', zip:'91302', prefix:'CLBB'},
  'santa clarita':          {county:'Los Angeles County',   state:'CA', zip:'91350', prefix:'SCLB'},
  'lancaster':              {county:'Los Angeles County',   state:'CA', zip:'93534', prefix:'LNCB'},
  'palmdale':               {county:'Los Angeles County',   state:'CA', zip:'93550', prefix:'PLMB'},
  'el segundo':             {county:'Los Angeles County',   state:'CA', zip:'90245', prefix:'ELGB'},
  'manhattan beach':        {county:'Los Angeles County',   state:'CA', zip:'90266', prefix:'MNHB'},
  'hermosa beach':          {county:'Los Angeles County',   state:'CA', zip:'90254', prefix:'HRMB'},
  'redondo beach':          {county:'Los Angeles County',   state:'CA', zip:'90277', prefix:'RDBB'},
  // ── Orange County ──
  'anaheim':                {county:'Orange County',        state:'CA', zip:'92801', prefix:'ANHB'},
  'irvine':                 {county:'Orange County',        state:'CA', zip:'92602', prefix:'IRVB'},
  'santa ana':              {county:'Orange County',        state:'CA', zip:'92701', prefix:'SNAB'},
  'huntington beach':       {county:'Orange County',        state:'CA', zip:'92647', prefix:'HNBB'},
  'garden grove':           {county:'Orange County',        state:'CA', zip:'92840', prefix:'GDGB'},
  'fullerton':              {county:'Orange County',        state:'CA', zip:'92831', prefix:'FLTB'},
  'orange':                 {county:'Orange County',        state:'CA', zip:'92856', prefix:'ORGB'},
  'newport beach':          {county:'Orange County',        state:'CA', zip:'92660', prefix:'NPBB'},
  'costa mesa':             {county:'Orange County',        state:'CA', zip:'92626', prefix:'CSMB'},
  'mission viejo':          {county:'Orange County',        state:'CA', zip:'92691', prefix:'MVJB'},
  'lake forest':            {county:'Orange County',        state:'CA', zip:'92630', prefix:'LFSTB'},
  'yorba linda':            {county:'Orange County',        state:'CA', zip:'92886', prefix:'YRLB'},
  'tustin':                 {county:'Orange County',        state:'CA', zip:'92780', prefix:'TSTB'},
  'laguna niguel':          {county:'Orange County',        state:'CA', zip:'92677', prefix:'LGNB'},
  'aliso viejo':            {county:'Orange County',        state:'CA', zip:'92656', prefix:'ALVB'},
  'rancho santa margarita': {county:'Orange County',        state:'CA', zip:'92688', prefix:'RSMB'},
  'laguna hills':           {county:'Orange County',        state:'CA', zip:'92653', prefix:'LGHB'},
  'brea':                   {county:'Orange County',        state:'CA', zip:'92821', prefix:'BREB'},
  'buena park':             {county:'Orange County',        state:'CA', zip:'90620', prefix:'BNPB'},
  'placentia':              {county:'Orange County',        state:'CA', zip:'92870', prefix:'PLCB'},
  // ── San Diego County ──
  'san diego':              {county:'San Diego County',     state:'CA', zip:'92101', prefix:'SDBP'},
  'chula vista':            {county:'San Diego County',     state:'CA', zip:'91910', prefix:'CVBP'},
  'oceanside':              {county:'San Diego County',     state:'CA', zip:'92054', prefix:'OCNB'},
  'escondido':              {county:'San Diego County',     state:'CA', zip:'92025', prefix:'ESBB'},
  'el cajon':               {county:'San Diego County',     state:'CA', zip:'92020', prefix:'ELCB'},
  'carlsbad':               {county:'San Diego County',     state:'CA', zip:'92008', prefix:'CLSB'},
  'vista':                  {county:'San Diego County',     state:'CA', zip:'92083', prefix:'VSTB'},
  'san marcos':             {county:'San Diego County',     state:'CA', zip:'92069', prefix:'SNMB'},
  'encinitas':              {county:'San Diego County',     state:'CA', zip:'92024', prefix:'ENCB'},
  'national city':          {county:'San Diego County',     state:'CA', zip:'91950', prefix:'NCIB'},
  'poway':                  {county:'San Diego County',     state:'CA', zip:'92064', prefix:'POWB'},
  'santee':                 {county:'San Diego County',     state:'CA', zip:'92071', prefix:'SNTB'},
  'la mesa':                {county:'San Diego County',     state:'CA', zip:'91941', prefix:'LMSB'},
  'lemon grove':            {county:'San Diego County',     state:'CA', zip:'91945', prefix:'LGRB'},
  'coronado':               {county:'San Diego County',     state:'CA', zip:'92118', prefix:'CRNB'},
  'solana beach':           {county:'San Diego County',     state:'CA', zip:'92075', prefix:'SLBB'},
  'del mar':                {county:'San Diego County',     state:'CA', zip:'92014', prefix:'DLMB'},
  // ── Sacramento County ──
  'sacramento':             {county:'Sacramento County',    state:'CA', zip:'95814', prefix:'SACB'},
  'elk grove':              {county:'Sacramento County',    state:'CA', zip:'95757', prefix:'EGVB'},
  'folsom':                 {county:'Sacramento County',    state:'CA', zip:'95630', prefix:'FLSB'},
  'rancho cordova':         {county:'Sacramento County',    state:'CA', zip:'95670', prefix:'RCDB'},
  'citrus heights':         {county:'Sacramento County',    state:'CA', zip:'95610', prefix:'CTHB'},
  'galt':                   {county:'Sacramento County',    state:'CA', zip:'95632', prefix:'GLTB'},
  // ── Fresno County ──
  'fresno':                 {county:'Fresno County',        state:'CA', zip:'93701', prefix:'FRSB'},
  'clovis':                 {county:'Fresno County',        state:'CA', zip:'93612', prefix:'CLVB'},
  'sanger':                 {county:'Fresno County',        state:'CA', zip:'93657', prefix:'SNGB'},
  // ── Riverside County ──
  'riverside':              {county:'Riverside County',     state:'CA', zip:'92501', prefix:'RVSB'},
  'moreno valley':          {county:'Riverside County',     state:'CA', zip:'92553', prefix:'MVLB'},
  'corona':                 {county:'Riverside County',     state:'CA', zip:'92879', prefix:'CRNB'},
  'temecula':               {county:'Riverside County',     state:'CA', zip:'92590', prefix:'TMCB'},
  'palm springs':           {county:'Riverside County',     state:'CA', zip:'92262', prefix:'PSPB'},
  'cathedral city':         {county:'Riverside County',     state:'CA', zip:'92234', prefix:'CTCB'},
  'palm desert':            {county:'Riverside County',     state:'CA', zip:'92260', prefix:'PLDB'},
  'indio':                  {county:'Riverside County',     state:'CA', zip:'92201', prefix:'INDB'},
  'murrieta':               {county:'Riverside County',     state:'CA', zip:'92562', prefix:'MRRB'},
  'lake elsinore':          {county:'Riverside County',     state:'CA', zip:'92530', prefix:'LEBP'},
  // ── San Bernardino County ──
  'san bernardino':         {county:'San Bernardino County',state:'CA', zip:'92401', prefix:'SNBB'},
  'fontana':                {county:'San Bernardino County',state:'CA', zip:'92335', prefix:'FNTB'},
  'rancho cucamonga':       {county:'San Bernardino County',state:'CA', zip:'91730', prefix:'RCBP'},
  'ontario':                {county:'San Bernardino County',state:'CA', zip:'91761', prefix:'ONTB'},
  'victorville':            {county:'San Bernardino County',state:'CA', zip:'92392', prefix:'VCVB'},
  'rialto':                 {county:'San Bernardino County',state:'CA', zip:'92376', prefix:'RLTB'},
  'colton':                 {county:'San Bernardino County',state:'CA', zip:'92324', prefix:'CLTB'},
  'chino':                  {county:'San Bernardino County',state:'CA', zip:'91710', prefix:'CHNB'},
  'upland':                 {county:'San Bernardino County',state:'CA', zip:'91784', prefix:'UPLB'},
  'redlands':               {county:'San Bernardino County',state:'CA', zip:'92373', prefix:'RDLB'},
  'highland':               {county:'San Bernardino County',state:'CA', zip:'92346', prefix:'HLDB'},
  'chino hills':            {county:'San Bernardino County',state:'CA', zip:'91709', prefix:'CHHB'},
  'montclair':              {county:'San Bernardino County',state:'CA', zip:'91763', prefix:'MTCB'},
  // ── Ventura County ──
  'oxnard':                 {county:'Ventura County',       state:'CA', zip:'93030', prefix:'OXNB'},
  'ventura':                {county:'Ventura County',       state:'CA', zip:'93001', prefix:'VNTB'},
  'thousand oaks':          {county:'Ventura County',       state:'CA', zip:'91360', prefix:'TOKB'},
  'simi valley':            {county:'Ventura County',       state:'CA', zip:'93063', prefix:'SMVB'},
  'camarillo':              {county:'Ventura County',       state:'CA', zip:'93010', prefix:'CMLB'},
  'moorpark':               {county:'Ventura County',       state:'CA', zip:'93021', prefix:'MPKB'},
  'santa barbara':          {county:'Santa Barbara County', state:'CA', zip:'93101', prefix:'SBRB'},
  // ── Other States ──
  'phoenix':                {county:'Maricopa County',      state:'AZ', zip:'85001', prefix:'PHXB'},
  'scottsdale':             {county:'Maricopa County',      state:'AZ', zip:'85251', prefix:'SCTB'},
  'tempe':                  {county:'Maricopa County',      state:'AZ', zip:'85281', prefix:'TMPB'},
  'mesa':                   {county:'Maricopa County',      state:'AZ', zip:'85201', prefix:'MESB'},
  'chandler':               {county:'Maricopa County',      state:'AZ', zip:'85224', prefix:'CHNB'},
  'tucson':                 {county:'Pima County',          state:'AZ', zip:'85701', prefix:'TCSB'},
  'las vegas':              {county:'Clark County',         state:'NV', zip:'89101', prefix:'LVBP'},
  'henderson':              {county:'Clark County',         state:'NV', zip:'89002', prefix:'HNDB'},
  'reno':                   {county:'Washoe County',        state:'NV', zip:'89501', prefix:'RNOB'},
  'seattle':                {county:'King County',          state:'WA', zip:'98101', prefix:'SETB'},
  'bellevue':               {county:'King County',          state:'WA', zip:'98004', prefix:'BLVB'},
  'tacoma':                 {county:'Pierce County',        state:'WA', zip:'98401', prefix:'TACB'},
  'portland':               {county:'Multnomah County',     state:'OR', zip:'97201', prefix:'PRTB'},
  'beaverton':              {county:'Washington County',    state:'OR', zip:'97005', prefix:'BVTB'},
  'houston':                {county:'Harris County',        state:'TX', zip:'77001', prefix:'HSTB'},
  'austin':                 {county:'Travis County',        state:'TX', zip:'78701', prefix:'AUSBP'},
  'dallas':                 {county:'Dallas County',        state:'TX', zip:'75201', prefix:'DLSB'},
  'san antonio':            {county:'Bexar County',         state:'TX', zip:'78201', prefix:'SATB'},
  'miami':                  {county:'Miami-Dade County',    state:'FL', zip:'33101', prefix:'MIAB'},
  'orlando':                {county:'Orange County',        state:'FL', zip:'32801', prefix:'ORLB'},
  'tampa':                  {county:'Hillsborough County',  state:'FL', zip:'33601', prefix:'TMPB'},
  'new york':               {county:'New York County',      state:'NY', zip:'10001', prefix:'NYCB'},
  'brooklyn':               {county:'Kings County',         state:'NY', zip:'11201', prefix:'BRKB'},
  'bronx':                  {county:'Bronx County',         state:'NY', zip:'10451', prefix:'BRNB'},
  'queens':                 {county:'Queens County',        state:'NY', zip:'11354', prefix:'QNSB'},
  'staten island':          {county:'Richmond County',      state:'NY', zip:'10301', prefix:'STIB'},
};

const FA = {}; // file attachment registry: id → {data,name,size}

const fmtMoney = n => '$' + Number(n||0).toLocaleString();
const fmtDate = d => { if(!d) return '—'; try { return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); } catch(e){ return d; }};
const fmtTime = t => { if(!t) return '—'; const [h,m]=t.split(':').map(Number); return `${(h%12)||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`; };
const uid = () => 'x'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const LIVIO_COMPANY_NAME = 'Livio Building Systems';
const LIVIO_OFFICE_ADDRESS = '121 Main St #563, Los Altos, California (CA) 94022';
const LIVIO_REPLY_EMAIL = 'ap@golivio.com';
const getProjectAddressLine = p => p?.address || p?.clientAddr || '—';
const getLivioOfficeLine = () => `${LIVIO_COMPANY_NAME} · ${LIVIO_OFFICE_ADDRESS}`;
const getLivioEmailSignature = () => `${LIVIO_COMPANY_NAME}\n${LIVIO_OFFICE_ADDRESS}\nReply Email: ${LIVIO_REPLY_EMAIL}`;
function getVendorEmailAcrossProjects(vendorName){
  const matchName = String(vendorName||'').trim().toLowerCase();
  if(!matchName) return '';
  try{
    const directory = typeof getVDirList === 'function' ? getVDirList() : [];
    const dirHit = directory.find(entry => {
      const company = String(entry?.company||'').trim().toLowerCase();
      const name = String(entry?.name||'').trim().toLowerCase();
      return !!entry?.email && (company===matchName || name===matchName);
    });
    if(dirHit?.email) return String(dirHit.email).trim();
  }catch{}
  const projects = Array.isArray(DB?.projects) ? DB.projects : [];
  for(const project of projects){
    for(const vendor of (project?.vendors||[])){
      if(String(vendor?.vendor||'').trim().toLowerCase()===matchName && vendor?.vendorEmail){
        return String(vendor.vendorEmail).trim();
      }
    }
  }
  return '';
}
// Returns today's date as YYYY-MM-DD in LOCAL time (avoids UTC offset shifting date by 1 day for IST etc.)
const localDateStr = (d=new Date()) => {
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), dd=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}`;
};
const fmtBytes = b => b<1024?b+'B':b<1048576?(b/1024).toFixed(1)+'KB':(b/1048576).toFixed(1)+'MB';
const fileIcon = n => ({pdf:'📄',dwg:'📐',dxf:'📐',png:'🖼',jpg:'🖼',jpeg:'🖼',xlsx:'📊',xls:'📊',docx:'📝',doc:'📝',zip:'🗜',rvt:'🏗',ifc:'🏗'}[n.split('.').pop().toLowerCase()]||'📎');
const vEl = id => document.getElementById(id);
const vVal = id => { const e=vEl(id); return e?e.value.trim():''; };
const toast = (msg,d=2600) => { const t=vEl('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),d); };

function statusBadge(s) {
  const cfg = {
    active:      {cls:'b-blue',  lbl:'Active'},
    inprogress:  {cls:'b-amber', lbl:'In Progress'},
    starting:    {cls:'b-teal',  lbl:'Starting'},
    hold:        {cls:'b-gray',  lbl:'On Hold'},
    caloshahold: {cls:'b-red',   lbl:'CalOSHA Hold'},
    complete:    {cls:'b-green', lbl:'Complete'},
    done:        {cls:'b-green', lbl:'Done'},
    upcoming:    {cls:'b-gray',  lbl:'Upcoming'},
    approved:    {cls:'b-green', lbl:'Approved'},
    review:      {cls:'b-blue',  lbl:'Under Review'},
    new:         {cls:'b-teal',  lbl:'New'},
    negotiating: {cls:'b-amber', lbl:'Negotiating'},
  };
  const c = cfg[s]||{cls:'b-gray',lbl:s};
  return `<span class="badge ${c.cls}">${c.lbl}</span>`;
}
function pColor(s,p) {
  if(s==='complete'||s==='done') return 'var(--green-m)';
  if(s==='caloshahold') return 'var(--red-m)';
  if(s==='starting') return 'var(--teal-m)';
  return p>=70?'var(--blue-m)':'var(--amber-m)';
}

// ══════════════════════════════════════════════════════════════════
//  DATA LAYER
// ══════════════════════════════════════════════════════════════════
const SEED = {
  id:'proj_madera', name:'1510 Madera Drive', street:'1510 Madera Drive',
  city:'Cupertino', county:'Santa Clara County', state:'CA', zip:'95014',
  address:'1510 Madera Drive, Cupertino, CA 95014',
  permit:'CUPR-2025-00891', apn:'326-10-044', type:'R-3 Single-Family Residential',
  color:'#1A6BC4', createdAt:'2025-11-01',
  works:[
    {id:'w1',name:'Shoring & Excavation',         ref:'CBC §1804',         contractor:'GeoDigit Inc.',          status:'caloshahold',pct:40, notes:'Zone B · Soils report on file per CBC 1803.6'},
    {id:'w2',name:'Concrete Foundation Walls',     ref:'CBC §1901',         contractor:'ConcretePro LLC',        status:'active',     pct:78, notes:'ACI 318-19 mix design · Seismic Zone D'},
    {id:'w3',name:'Structural Steel Erection',     ref:'CBC §2205',         contractor:'Apex Steel',             status:'active',     pct:61, notes:'AISC 341 seismic provisions · SMRF system'},
    {id:'w4',name:'Rough Framing — Level 3',       ref:'CBC §2308',         contractor:'Bay Builders',           status:'inprogress', pct:55, notes:'Hold-down connectors per SDPWS 2021'},
    {id:'w5',name:'MEP Rough-In Levels 1–2',       ref:'CPC · CMC · CEC',   contractor:'Voltline MEP',           status:'inprogress', pct:44, notes:'CALGreen 4.303.1 fixture requirements'},
    {id:'w6',name:'Exterior Waterproofing',        ref:'CBC §1805',         contractor:'Shreeji Waterproofing',  status:'complete',   pct:100,notes:'Below-grade dampproofing · Basement walls'},
    {id:'w7',name:'Fire Sprinkler Rough-In',       ref:'CBC §903/NFPA 13',  contractor:'CalFire Suppression',    status:'starting',   pct:12, notes:'High-rise provisions · CFC §903.3.1.1'},
  ],
  milestones:[
    {id:'m1',name:'Grading Permit Issued',         ref:'CBC Ch.18',    date:'2025-11-08',status:'done',      notes:'Cupertino Building Division', payAmt:5000,  payPaid:true,  payDate:'2025-11-10',payFiles:[],progressPayments:[]},
    {id:'m2',name:'Geotechnical Report Approved',  ref:'CBC §1803',    date:'2025-12-02',status:'done',      notes:'Soils EOR sign-off',           payAmt:8500,  payPaid:true,  payDate:'2025-12-05',payFiles:[],progressPayments:[]},
    {id:'m3',name:'Building Permit Issued',        ref:'CBC §105',     date:'2025-12-15',status:'done',      notes:'Cupertino Permit #00891',      payAmt:12000, payPaid:false, payDate:'',          payFiles:[],progressPayments:[]},
    {id:'m4',name:'Footing Inspection Passed',     ref:'CBC §110.3.1', date:'2026-01-18',status:'done',      notes:'Cupertino Inspector #C-221',   payAmt:45000, payPaid:false, payDate:'',          payFiles:[],progressPayments:[]},
    {id:'m5',name:'Concrete Framing Level 2',      ref:'CBC §110.3.2', date:'2026-04-10',status:'inprogress',notes:'EOR inspection required',       payAmt:85000, payPaid:false, payDate:'',          payFiles:[],progressPayments:[]},
    {id:'m6',name:'Title 24 Energy CF1R',          ref:'T-24 Part 6',  date:'2026-04-20',status:'inprogress',notes:'HERS rater required',           payAmt:3500,  payPaid:false, payDate:'',          payFiles:[],progressPayments:[]},
    {id:'m7',name:'Frame Inspection',              ref:'CBC §110.3.4', date:'2026-06-15',status:'upcoming',  notes:'All trades rough-in complete',  payAmt:120000,payPaid:false, payDate:'',          payFiles:[],progressPayments:[]},
    {id:'m8',name:'Certificate of Occupancy',      ref:'CBC §111',     date:'2027-02-01',status:'upcoming',  notes:'Final Cupertino sign-off',      payAmt:25000, payPaid:false, payDate:'',          payFiles:[],progressPayments:[]},
  ],
  quotes:[
    {id:'q1',vendor:'Pacific Coast HVAC Inc.',     scope:'Central mechanical — all floors',       ref:'CMC 2022 · T-24 Part 6',         csi:'Div 23',    amount:484000,date:'2026-03-10',status:'review',      files:[],payMilestones:[]},
    {id:'q2',vendor:'CalFire Suppression Systems', scope:'High-rise sprinkler — NFPA 13',         ref:'CFC §903 · CBC §903.3.1.1',      csi:'Div 21',    amount:212500,date:'2026-03-08',status:'approved',    files:[],payMilestones:[
      {id:'pm1',name:'Mobilization (20%)',    amount:42500, dueDate:'2026-03-20',paid:true, paidDate:'2026-03-22',files:[],lienFiles:[]},
      {id:'pm2',name:'Progress Payment (50%)',amount:106250,dueDate:'2026-05-01',paid:false,paidDate:'',          files:[],lienFiles:[]},
      {id:'pm3',name:'Final Payment (30%)',   amount:63750, dueDate:'2026-07-01',paid:false,paidDate:'',          files:[],lienFiles:[]},
    ]},
    {id:'q3',vendor:'SunPath Solar + Electrical',  scope:'PV system + EV charging rough-in',      ref:'CALGreen §4.106.4 · CEC 2022',   csi:'Div 26/48', amount:318000,date:'2026-03-14',status:'negotiating',  files:[],payMilestones:[]},
    {id:'q4',vendor:'BayArea Glass & Facade',      scope:'Curtainwall + glazing system',          ref:'CBC §2404 · T-24 fenestration',  csi:'Div 08',    amount:920000,date:'2026-03-12',status:'review',      files:[],payMilestones:[]},
    {id:'q5',vendor:'LA Seismic Retrofit Group',   scope:'SMRF connection inspection & testing',  ref:'CBC §1705.12 · AISC 341',        csi:'Div 05',    amount:98400, date:'2026-03-15',status:'new',         files:[],payMilestones:[]},
  ],
  plans:[],
  invoices:[], vendors:[],
  checklist:[
    // ── Water Supply ──
    {id:'chk01',name:'Verify copper Type L piping for all water supply lines',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'All piping to be non-combustible metallic material per CPC §609',status:'open'},
    {id:'chk02',name:'Confirm min 15 PSI at each fixture',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Inspector',notes:'Per water supply notes, water supply shall be no less than 15 PSI',status:'open'},
    {id:'chk03',name:'Backflow prevention device installed upstream of all fixtures',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Required per water supply note 7',status:'open'},
    {id:'chk04',name:'Vacuum breakers provided at all hose bibbs',category:'Water Supply',priority:'medium',dueDate:'',assignee:'Plumbing Contractor',notes:'Permanent vacuum breakers at hose bibbs per water supply note 9',status:'open'},
    {id:'chk05',name:'Water heater (AO Smith HPTU-66N) anchored/strapped in garage',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'66 gal, 4.5 kW, 208V — strap to resist seismic displacement per CPC §508.2',status:'open'},
    {id:'chk06',name:'Expansion tank installed per CPC §608.3',category:'Water Supply',priority:'medium',dueDate:'',assignee:'Plumbing Contractor',notes:'Or other approved pressure relief method',status:'open'},
    {id:'chk07',name:'All hot water piping insulated per CPC §609.11.2',category:'Water Supply',priority:'medium',dueDate:'',assignee:'Plumbing Contractor',notes:'Insulation wall thickness ≥ pipe diameter for pipes up to 2"; ≥ 2" for larger',status:'open'},
    {id:'chk08',name:'Mixing valves installed on all showers and tub-shower combos',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per CPC §408.3',status:'open'},
    {id:'chk09',name:'Potable water system disinfected prior to use',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per CPC §609.9 — document disinfection method and results',status:'open'},
    {id:'chk10',name:'Fixture flow rates verified: lavatory ≤1.2 GPM, kitchen ≤1.8 GPM, shower ≤2.0 GPM, WC ≤1.28 GPF',category:'Water Supply',priority:'high',dueDate:'',assignee:'Plumbing Inspector',notes:'Per CALGreen and CPC §402.0',status:'open'},
    // ── Drain Waste Vent ──
    {id:'chk11',name:'All sanitary drain and vent piping — Schedule 40 ABS installed',category:'Drain Waste Vent',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per DWV note 12 — CPC §701.0 and §903.0',status:'open'},
    {id:'chk12',name:'Vent pipes extend through roof min 6" above roof deck',category:'Drain Waste Vent',priority:'high',dueDate:'',assignee:'Plumbing Inspector',notes:'Vent pipe through roof flashing, terminate vertically ≥6" above roof per DWV note 4',status:'open'},
    {id:'chk13',name:'4" main drain pipe connected to drainage system',category:'Drain Waste Vent',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per DWV note 2 — comply with Table 7-5 of 2022 CPC',status:'open'},
    {id:'chk14',name:'Horizontal drain slope min 1/4 inch per foot (2% slope)',category:'Drain Waste Vent',priority:'high',dueDate:'',assignee:'Plumbing Inspector',notes:'Per CPC §708.0',status:'open'},
    {id:'chk15',name:'Floors sloped to all floor drains',category:'Drain Waste Vent',priority:'medium',dueDate:'',assignee:'Plumbing Contractor',notes:'Per CPC §411.4',status:'open'},
    {id:'chk16',name:'Backwater valve installed on basement/floor-level fixtures',category:'Drain Waste Vent',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per CPC §710.1 — see sanitary drainage table for manhole elevations',status:'open'},
    {id:'chk17',name:'Roof drain risers installed: 4" RD and 4" ORD at all drain locations',category:'Drain Waste Vent',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Sheet P3.2 — multiple 699SF, 509SF, 388SF, 222SF, 215SF drainage areas',status:'open'},
    // ── Fuel Gas ──
    {id:'chk18',name:'3/4" gas piping installed — total developed length 69 ft verified',category:'Fuel Gas',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Sheet P4.0 — 22 ft + 44 ft + 15-3 ft segments, new gas meter location',status:'open'},
    {id:'chk19',name:'Gas piping pressure test performed and documented',category:'Fuel Gas',priority:'high',dueDate:'',assignee:'Plumbing Inspector',notes:'All gas connections tested before cover-up',status:'open'},
    {id:'chk20',name:'Gas meter (N) installed at approved location',category:'Fuel Gas',priority:'high',dueDate:'',assignee:'Utility / Plumbing',notes:'New gas meter per P4.0 plan',status:'open'},
    // ── Coordination ──
    {id:'chk21',name:'Contractor verified all equipment model numbers, capacities and voltages with manufacturer',category:'Pre-Construction',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per general note 1 — coordinate with all applicable trades',status:'open'},
    {id:'chk22',name:'No structural members cut/drilled/notched without written EOR approval',category:'Pre-Construction',priority:'high',dueDate:'',assignee:'Project Manager',notes:'Per general note 7 — written authorization from Structural Engineer of Record required',status:'open'},
    {id:'chk23',name:'All utility invert elevations coordinated prior to installation',category:'Pre-Construction',priority:'high',dueDate:'',assignee:'Plumbing Contractor',notes:'Per general note 8 — verify locations, sizes, point of connections',status:'open'},
    {id:'chk24',name:'All plumbing materials listed/certified by approved listing agency',category:'Pre-Construction',priority:'medium',dueDate:'',assignee:'Plumbing Contractor',notes:'Per general plumbing note 5 — 2022 CPC referenced standards',status:'open'},
    {id:'chk25',name:'Compliance certificates provided with equipment submittals (Title 24 / CALGreen)',category:'Pre-Construction',priority:'medium',dueDate:'',assignee:'Plumbing Contractor',notes:'Per general plumbing note 4 — EES §110.3',status:'open'},
  ],
  qaqcLog:[
    {id:'qa01',refNo:'QA-PLUMB-001',type:'observation',description:'Verify pipe sizing matches fixture schedule — total 47.0 CW FU, 31.8 HW FU, 33 DFU as shown on Sheet P1.0',location:'Throughout building',raisedBy:'Engineer of Record',assignedTo:'Plumbing Contractor',date:'2026-03-25',dueDate:'',status:'open',correctiveAction:'',files:[]},
    {id:'qa02',refNo:'QA-PLUMB-002',type:'observation',description:'Water heater flue/condensate: AO Smith HPTU-66N in garage requires condensate drain — verify drain availability or condensate pump provided',location:'Garage',raisedBy:'Engineer',assignedTo:'Plumbing Contractor',date:'2026-03-25',dueDate:'',status:'open',correctiveAction:'',files:[]},
    {id:'qa03',refNo:'QA-PLUMB-003',type:'observation',description:'Roof drain shop drawings must be coordinated with Structural Engineer before installation — water/sewer/storm lines must not run along grade beams',location:'Roof / Foundation',raisedBy:'Engineer of Record',assignedTo:'Plumbing Contractor',date:'2026-03-25',dueDate:'',status:'open',correctiveAction:'Per P3.2 note 1',files:[]},
    {id:'qa04',refNo:'QA-PLUMB-004',type:'observation',description:'CPVC piping not permitted above grade — verify all above-grade piping is copper Type L as specified',location:'All floors',raisedBy:'Inspector',assignedTo:'Plumbing Contractor',date:'2026-03-25',dueDate:'',status:'open',correctiveAction:'',files:[]},
    {id:'qa05',refNo:'QA-PLUMB-005',type:'punch',description:'Lead content compliance required for all pipes/fittings conveying potable water — submit documentation per Health & Safety Code §116875',location:'Entire plumbing system',raisedBy:'Building Dept',assignedTo:'Plumbing Contractor',date:'2026-03-25',dueDate:'',status:'open',correctiveAction:'',files:[]},
  ],
  inspections:[
    {id:'i1',name:'Concrete Pour — Level 2 Slab',     inspDate:'2026-03-25',inspTime:'09:00',location:'1510 Madera Dr · Level 2',               refs:'CBC §110.3.2 · §1905',    ahj:'cupertino',notes:'EOR required on site',files:[]},
    {id:'i2',name:'Rough Electrical (CEC) Inspection', inspDate:'2026-04-02',inspTime:'10:30',location:'All Floors · Cupertino Electrical Insp.',  refs:'CEC 2022',                ahj:'cupertino',notes:'',               files:[]},
    {id:'i3',name:'Rough Plumbing + Mechanical',       inspDate:'2026-04-08',inspTime:'11:00',location:'Zone 2–3 · Cupertino Plumbing Insp.',     refs:'CPC 2022 · CMC 2022',     ahj:'cupertino',notes:'',               files:[]},
    {id:'i4',name:'CalOSHA Fall Protection Audit',     inspDate:'2026-04-22',inspTime:'08:00',location:'Cal/OSHA District Office · Floors 3–6',   refs:'CalOSHA §1735',           ahj:'calosha',  notes:'Mandatory',      files:[]},
    {id:'i5',name:'Special Inspection — Welding',      inspDate:'2026-05-10',inspTime:'09:00',location:'SMRF Joints · CBC §1705.12',              refs:'CBC §1705.12 · AISC 341', ahj:'icc',      notes:'ICC-Certified inspector required',files:[]},
  ],
};

function loadDB(){
  try{
    if(typeof localStorage!=='undefined'){
      const raw=localStorage.getItem(SK);
      if(raw){
        const parsed=JSON.parse(raw);
        if(parsed&&typeof parsed==='object') return parsed;
      }
    }
  }catch(e){
    console.warn('Local DB load failed:',e?.message||e);
  }
  return {projects:[JSON.parse(JSON.stringify(SEED))],activeId:'proj_madera',activeProjectId:'proj_madera'};
}
function saveDB(){
  try{
    DB.activeProjectId=DB.activeId??DB.activeProjectId??null;
  }catch(e){
    const msg=e.name==='QuotaExceededError'||e.code===22
      ?'⚠ Browser storage full — files are too large for local storage. Export your project to save data.'
      :'⚠ Save failed: '+e.message;
    toast(msg,5000);
    console.error('saveDB error:',e);
  }
  registerAllFiles();
}
function registerAllFiles(){
  (DB.projects||[]).forEach(p=>{
    (p.plans||[]).forEach(f=>regFiles([f]));
    (p.quotes||[]).forEach(q=>{
      regFiles(q.files||[]);
      (q.payMilestones||[]).forEach(pm=>{regFiles(pm.files||[]);regFiles(pm.invoiceFiles||[]);regFiles(pm.lienFiles||[]);});
    });
    (p.milestones||[]).forEach(m=>{
      regFiles(m.payFiles||[]);
      (m.progressPayments||[]).forEach(pp=>regFiles(pp.files||[]));
    });
    (p.inspections||[]).forEach(i=>regFiles(i.files||[]));
    (p.vendors||[]).forEach(v=>regFiles(v.files||[]));
    (p.invoices||[]).forEach(inv=>{
      regFiles(inv.files||[]);
      regFiles(inv.proofFiles||[]);
      regFiles(inv.lienFiles||[]);
      (inv.partialPayments||[]).forEach(pp=>regFiles(pp.files||[]));
      (inv.payments||[]).forEach(pay=>regFiles(pay.proofFiles||[]));
    });
    (p.checklist||[]).forEach(it=>{
      regFiles(it.files||[]);
      (it.comments||[]).forEach(c=>regFiles(c.files||[]));
    });
    (p.qaqcLog||[]).forEach(it=>regFiles(it.files||[]));
  });
}
let DB = loadDB();
registerAllFiles();
const proj = () => DB.projects.find(p=>p.id===DB.activeId)||DB.projects[0]||null;
const setProj = id => { DB.activeId=id; saveDB(); };

function regFiles(arr){ (arr||[]).forEach(f=>{ if(f&&f.id&&(f.data||f.path)) FA[f.id]=f; }); }

// ══════════════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════════════
let curPage = 'projects';
const PAGE_TITLES = {projects:'All Projects',dashboard:'Dashboard Overview',works:'Works at Site',milestones:'Project Milestones',quotes:'Quotes Received',plans:'Plans & Documents',inspections:'Inspections Scheduled',payments:'Payments',invoices:'Invoice Tracker',vendors:'Vendor Contracts',checklist:'Project Checklist',qaqc:'QA/QC Log',compliance:'Compliance Tracker',export:'Export & Download',momentum:'Momentum','daily-tracker':'Daily Tracker','client-contract':'Client Contract','client-invoice':'Client Invoice','vendor-directory':'Vendor Directory'};
const NEEDS_PROJECT = ['dashboard','works','milestones','quotes','plans','inspections','payments','invoices','vendors','checklist','qaqc','compliance','export'];

function buildSidebarNav(){
  const cu=currentUser();
  const pages=getUserPages(cu);
  // Show/hide each nav item
  document.querySelectorAll('.sb-nav li[data-page]').forEach(li=>{
    const pg=li.dataset.page;
    li.style.display=pages.includes(pg)||pg==='projects'?'':'none';
  });
}

function nav(page) {
  if(!canAccessPage(page)){ toast('⚠ You do not have access to this page'); page='projects'; return; }
  if(NEEDS_PROJECT.includes(page)&&!proj()){ toast('⚠ Select or create a project first'); page='projects'; }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  vEl('pg-'+page)?.classList.add('on');
  document.querySelectorAll('.sb-nav a').forEach(a=>a.classList.remove('on'));
  vEl('n-'+page)?.classList.add('on');
  vEl('page-title').textContent = PAGE_TITLES[page]||page;
  const addMap = {projects:'+ New Project',works:'+ Add Work',milestones:'+ Add Milestone',quotes:'+ Add Quote',plans:'+ Upload Doc',inspections:'+ Add Inspection',payments:'',invoices:'',vendors:'',checklist:'',qaqc:'',compliance:'',export:'',momentum:'','daily-tracker':'','client-contract':'','client-invoice':'','vendor-directory':''};
  const addModal = {projects:'project',works:'work',milestones:'milestone',quotes:'quote',plans:'plan',inspections:'inspection'};
  const btn=vEl('add-btn');
  if(addMap[page]){btn.style.display=''; btn.textContent=addMap[page]; btn.onclick=()=>openModal(addModal[page]);}
  else btn.style.display='none';
  const strip=vEl('bal-strip');
  strip.classList.toggle('show', page==='payments');
  if(page==='client-contract'){const f=vEl('client-contract-frame');if(f&&f.contentWindow)try{f.contentWindow.syncActiveProject&&f.contentWindow.syncActiveProject();}catch(e){}}
  if(page==='client-invoice'){const f=vEl('client-invoice-frame');if(f&&f.contentWindow)try{f.contentWindow.syncActiveProject&&f.contentWindow.syncActiveProject();}catch(e){}}
  if(page==='vendor-directory'){renderVendorDirectory();}
  if(page==='settings'){renderSettingsPage();}
  curPage=page; renderAll();
}
function handleAdd(){ nav(curPage); }

// ══════════════════════════════════════════════════════════════════
//  RENDER ALL
// ══════════════════════════════════════════════════════════════════
function renderAll(){
  // Rebuild sidebar nav first so visible pages are correct
  buildSidebarNav();
  // Apply viewer / view-only read-only UI
  const viewer=isViewer();
  const cu=currentUser();
  setTimeout(()=>{
    document.querySelectorAll('.btn-navy,.btn-green,.btn-red,.btn-blue,.btn-ghost').forEach(b=>{
      // Skip modal buttons
      if(b.closest('#mo')) return;
      const pg=curPage;
      const readOnly=viewer||(pg&&isPageReadOnly(pg));
      if(readOnly){b.setAttribute('data-viewer-disabled','1');}
      else{b.removeAttribute('data-viewer-disabled');}
    });
    // Show a read-only banner on view-only pages
    const existing=document.getElementById('view-only-banner');
    if(existing) existing.remove();
    if(curPage&&isPageReadOnly(curPage)){
      const banner=document.createElement('div');
      banner.id='view-only-banner';
      banner.style.cssText='position:fixed;bottom:16px;right:16px;background:#A86200;color:#fff;padding:8px 14px;border-radius:7px;font-size:11px;font-weight:700;z-index:500;box-shadow:0 4px 16px rgba(0,0,0,.3)';
      banner.textContent='👁 View Only — editing disabled on this page';
      document.body.appendChild(banner);
      setTimeout(()=>banner.remove(),3000);
    }
  },50);
  updateSidebar(); renderProjects(); renderDashboard(); renderWorks();
  renderMilestones(); renderQuotes(); renderPlans(); renderInspections();
  renderPayments(); renderInvoices(); renderVendors(); renderChecklist(); renderQAQC(); renderCompliance(); renderExport(); renderVendorDirectory();
}

function updateSidebar(){
  const p=proj();
  vEl('ct-projects').textContent=DB.projects.length;
  vEl('sb-proj').textContent=p?p.name:'No project';
  vEl('sb-foot').innerHTML=p?`${p.city||''}${p.county?' · '+p.county:''}<br>Permit: ${p.permit||'—'}<br>APN: ${p.apn||'—'}`:'No project selected';
  if(p){
    vEl('ct-works').textContent=(p.works||[]).length;
    vEl('ct-ms').textContent=(p.milestones||[]).length;
    vEl('ct-q').textContent=(p.quotes||[]).length;
    vEl('ct-plans').textContent=(p.plans||[]).length;
    vEl('ct-ins').textContent=(p.inspections||[]).length;
    vEl('ct-pay').textContent=(p.quotes||[]).filter(q=>q.status==='approved').length;
    vEl('ct-inv').textContent=(p.invoices||[]).length;
    vEl('ct-ven').textContent=(p.vendors||[]).length;
    vEl('ct-chk').textContent=(p.checklist||[]).length;
    vEl('ct-qaqc').textContent=(p.qaqcLog||[]).length;
  }
}

// ── PROJECTS ──
function renderProjects(){
  const grid=vEl('proj-grid');
  let html=DB.projects.map(p=>{
    const active=(p.works||[]).filter(w=>['active','inprogress','starting'].includes(w.status)).length;
    const msDone=(p.milestones||[]).filter(m=>m.status==='done').length;
    const total=(p.quotes||[]).reduce((a,q)=>a+Number(q.amount||0),0);
    const isActive=p.id===DB.activeId;
    return`<div class="proj-card" onclick="switchProj('${p.id}')" style="${isActive?'border:2px solid '+p.color:''}">
      <div class="proj-card-bar" style="background:${p.color||'#1A6BC4'}"></div>
      <div class="proj-card-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div class="proj-card-name">${p.name}</div>
            <div class="proj-card-addr">${p.city||p.address||''}</div>
            ${p.client?`<div style="font-size:10px;color:var(--blue);margin-top:2px;font-weight:600">👤 ${p.client}</div>`:''}
            <div style="font-size:10px;color:var(--muted);margin-top:2px">${p.county?p.county+' · ':''} ${p.permit||'—'}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openModal('project','${p.id}')">✏</button>
            <button class="btn btn-red btn-xs" onclick="event.stopPropagation();delProj('${p.id}')">🗑</button>
          </div>
        </div>
      </div>
      <div class="proj-card-foot">
        <div class="text-center"><div class="ps-val" style="color:var(--amber)">${active}</div><div class="ps-lbl">Active</div></div>
        <div><div class="ps-val" style="color:var(--green)">${msDone}/${(p.milestones||[]).length}</div><div class="ps-lbl">Milestones</div></div>
        <div><div class="ps-val" style="color:var(--blue);font-size:14px">${fmtMoney(total)}</div><div class="ps-lbl">Quoted</div></div>
        ${isActive?'<span class="badge b-blue">Active</span>':'<span class="badge b-gray" style="font-size:9px">Click to open</span>'}
      </div>
    </div>`;
  }).join('');
  html+=`<div class="add-card" onclick="openModal('project')"><div style="font-size:28px;opacity:.35;margin-bottom:8px">➕</div><div style="font-size:13px;color:var(--muted);font-weight:500">Add New Project</div></div>`;
  grid.innerHTML=html;
}
function switchProj(id){ setProj(id); nav('dashboard'); }

// ── DASHBOARD ──
function renderDashboard(){
  const p=proj(); if(!p) return;
  vEl('ceqa-sub').textContent=`${p.name} · ${p.address||''} · Public Review closed 14 Jan 2026`;
  const active=(p.works||[]).filter(w=>['active','inprogress','starting'].includes(w.status)).length;
  const msDone=(p.milestones||[]).filter(m=>m.status==='done').length;
  const total=(p.quotes||[]).reduce((a,q)=>a+Number(q.amount||0),0);
  const nextIns=(p.inspections||[]).sort((a,b)=>(a.inspDate||'')>(b.inspDate||'')?1:-1)[0];
  vEl('dash-metrics').innerHTML=`
    <div class="mc" style="--ac:var(--amber)"><div class="mc-lbl">Works Active</div><div class="mc-val">${active}</div><div class="mc-sub">${(p.works||[]).length} total</div></div>
    <div class="mc" style="--ac:var(--teal)"><div class="mc-lbl">Milestones</div><div class="mc-val">${msDone}/${(p.milestones||[]).length}</div><div class="mc-sub">${(p.milestones||[]).length?Math.round(msDone/(p.milestones||[]).length*100):0}% done</div></div>
    <div class="mc" style="--ac:var(--blue)"><div class="mc-lbl">Quotes</div><div class="mc-val">${fmtMoney(total)}</div><div class="mc-sub">${(p.quotes||[]).length} quotes</div></div>
    <div class="mc" style="--ac:var(--red)"><div class="mc-lbl">Inspections</div><div class="mc-val">${(p.inspections||[]).length}</div><div class="mc-sub">Next: ${nextIns&&nextIns.inspDate?new Date(nextIns.inspDate+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'}):'—'}</div></div>`;
  const er=(msg)=>`<div style="padding:24px;text-align:center;color:var(--muted);font-size:12px">${msg}</div>`;
  vEl('d-works').innerHTML=(p.works||[]).length?(p.works||[]).slice(0,5).map(w=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:10px">
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${w.name}</div><div style="font-size:10px;color:var(--muted)">${w.ref}</div></div>
      <div class="prog-wrap"><div class="prog-bar"><div class="prog-fill" style="width:${w.pct}%;background:${pColor(w.status,w.pct)}"></div></div><span class="prog-pct" style="color:${pColor(w.status,w.pct)}">${w.pct}%</span>${statusBadge(w.status)}</div>
    </div>`).join(''):er('No works added yet');
  vEl('d-ms').innerHTML=(p.milestones||[]).length?(p.milestones||[]).slice(0,5).map(m=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:9px">
      <div style="width:9px;height:9px;border-radius:50%;background:${m.status==='done'?'var(--green-m)':m.status==='inprogress'?'var(--amber-m)':'var(--border)'};flex-shrink:0"></div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${m.name}</div><div style="font-size:10px;color:var(--muted)">${fmtDate(m.date)}</div></div>
      ${statusBadge(m.status)}
    </div>`).join(''):er('No milestones yet');
  vEl('d-quotes').innerHTML=(p.quotes||[]).length?(p.quotes||[]).slice(0,4).map(q=>`
    <div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-size:13px;font-weight:600">${q.vendor}</div><div style="font-size:10px;color:var(--muted)">${q.scope}</div></div>
      <div style="text-align:right"><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${fmtMoney(q.amount)}</div>${statusBadge(q.status)}</div>
    </div>`).join(''):er('No quotes yet');
  vEl('d-ins').innerHTML=(p.inspections||[]).length?(p.inspections||[]).slice(0,4).map(i=>{
    const dt=i.inspDate?new Date(i.inspDate+'T12:00:00'):null;
    const day=dt?dt.getDate():'—'; const mon=dt?dt.toLocaleString('en-US',{month:'short'}).toUpperCase():'—';
    return`<div style="padding:9px 16px;border-bottom:1px solid #F0EDE6;display:flex;align-items:center;gap:11px">
      <div class="datebox" style="background:var(--amber-l)"><div class="db-d" style="color:var(--amber)">${day}</div><div class="db-m" style="color:var(--amber)">${mon}</div></div>
      <div><div style="font-size:13px;font-weight:600">${i.name}</div><div style="font-size:10px;color:var(--muted)">${fmtTime(i.inspTime)} · ${i.location||''}</div></div>
    </div>`;}).join(''):er('No inspections yet');
}

// ── WORKS ──
function renderWorks(){
  const p=proj(); if(!p) return;
  vEl('wc').textContent=(p.works||[]).length;
  const tb=vEl('w-tbody');
  if(!(p.works||[]).length){tb.innerHTML=`<tr><td colspan="6"><div class="empty"><div class="empty-ic">🏗</div>No works yet.</div></td></tr>`;return;}
  tb.innerHTML=(p.works||[]).map(w=>`
    <tr>
      <td><div class="tn">${w.name}</div><div class="tm">${w.notes||''}</div></td>
      <td><span class="cbc">${w.ref}</span></td>
      <td>${w.contractor||'—'}</td>
      <td>${statusBadge(w.status)}</td>
      <td><div class="prog-wrap"><div class="prog-bar"><div class="prog-fill" style="width:${w.pct}%;background:${pColor(w.status,w.pct)}"></div></div><span class="prog-pct" style="color:${pColor(w.status,w.pct)}">${w.pct}%</span></div></td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('work','${w.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('works','${w.id}')">Del</button></div></td>
    </tr>`).join('');
}

// ── MILESTONES ──
function renderMilestoneLedger(ms){
  const el=vEl('ms-ledger'); if(!el) return;
  if(!ms.length){el.innerHTML=`<div class="empty" style="padding:24px"><div class="empty-ic">📒</div>No milestones yet.</div>`;return;}

  let grandContract=0, grandReceived=0, grandBalance=0;
  const rows=ms.map((m,idx)=>{
    const pps=m.progressPayments||[];
    const ppContract=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);
    const ppReceived=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);
    const ppBalance=ppContract-ppReceived;
    const contract=m.payAmt||0;
    grandContract+=contract;
    grandReceived+=ppReceived;
    grandBalance+=(ppContract-ppReceived);

    const dot=m.status==='done'?'var(--green-m)':m.status==='inprogress'?'var(--amber-m)':'var(--border)';
    const rowBg=idx%2===0?'#fff':'var(--bg)';

    // Progress payments sub-rows
    const ppRows=pps.length?pps.map(pp=>`
      <tr style="background:${pp.paid?'#F3FCF0':'#FFFDF7'}">
        <td style="padding:5px 14px 5px 36px;font-size:11px;color:var(--muted);border-bottom:1px solid #F5F2EA" colspan="2">
          <span style="margin-right:8px">${pp.paid?'●':'○'}</span>${pp.name}
          ${pp.dueDate?`<span style="margin-left:8px;font-size:10px;color:var(--muted)">Due: ${fmtDate(pp.dueDate)}</span>`:''}
        </td>
        <td style="padding:5px 14px;font-size:12px;font-weight:600;color:var(--text);border-bottom:1px solid #F5F2EA">${fmtMoney(pp.amount||0)}</td>
        <td style="padding:5px 14px;font-size:11px;border-bottom:1px solid #F5F2EA">
          ${pp.paid?`<span style="color:var(--green);font-weight:600">✓ ${fmtMoney(pp.amount||0)}</span><span style="font-size:10px;color:var(--muted);margin-left:5px">${fmtDate(pp.receivedDate)}</span>`:'<span style="color:var(--muted)">—</span>'}
        </td>
        <td style="padding:5px 14px;font-size:11px;border-bottom:1px solid #F5F2EA">
          ${pp.paid?`<span style="color:var(--green)">$0</span>`:`<span style="color:var(--red);font-weight:600">${fmtMoney(pp.amount||0)}</span>`}
        </td>
        <td style="padding:5px 14px;border-bottom:1px solid #F5F2EA"></td>
      </tr>`).join(''):'';

    const hasPPs=pps.length>0;
    return`<tr style="background:${rowBg}">
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:9px;height:9px;border-radius:50%;background:${dot};flex-shrink:0"></div>
          <div>
            <div style="font-size:13px;font-weight:600">${m.name}</div>
            <div style="font-size:10px;color:var(--muted)">${m.ref} · ${fmtDate(m.date)||'—'}</div>
          </div>
        </div>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">${statusBadge(m.status)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${contract?fmtMoney(contract):'—'}</span>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${hasPPs?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">${fmtMoney(ppReceived)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>'}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${hasPPs?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${ppBalance>0?'var(--red)':'var(--green)'}">${fmtMoney(ppBalance)}</span>`:'<span style="color:var(--muted);font-size:12px">—</span>'}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #EDE9E0">
        ${hasPPs?`<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;width:90px;margin-bottom:3px"><div style="height:100%;width:${ppContract?Math.min(100,Math.round(ppReceived/ppContract*100)):0}%;background:${ppReceived>=ppContract?'var(--green-m)':'var(--blue-m)'};border-radius:3px"></div></div><span style="font-size:10px;color:var(--muted)">${ppContract?Math.min(100,Math.round(ppReceived/ppContract*100)):0}%</span>`:'<span style="font-size:10px;color:var(--muted)">No payments scheduled</span>'}
      </td>
    </tr>${ppRows}`;
  }).join('');

  // Grand total row
  const totalPct=grandContract?Math.min(100,Math.round(grandReceived/grandContract*100)):0;
  const grandRow=`<tr style="background:var(--navy)">
    <td style="padding:11px 14px" colspan="2"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">${fmtMoney(grandContract)}</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">${fmtMoney(grandReceived)}</span></td>
    <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${grandBalance>0?'#F09595':'#9FE1CB'}">${fmtMoney(grandBalance)}</span></td>
    <td style="padding:11px 14px">
      <div style="height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden;width:90px;margin-bottom:3px"><div style="height:100%;width:${totalPct}%;background:${totalPct===100?'#9FE1CB':'#85B7EB'};border-radius:3px;transition:.5s"></div></div>
      <span style="font-size:10px;color:#8AAAC8">${totalPct}% received</span>
    </td>
  </tr>`;

  el.innerHTML=`<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
    <thead>
      <tr style="background:var(--bg)">
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:28%">Milestone</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Status</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Contract Amt.</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--green);text-align:left;border-bottom:1px solid var(--border)">✓ Paid</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--red);text-align:left;border-bottom:1px solid var(--border)">Balance Due</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Progress</th>
      </tr>
    </thead>
    <tbody>${rows}${grandRow}</tbody>
  </table></div>`;
}

function renderMilestones(){
  const p=proj(); if(!p) return;
  const ms=p.milestones||[];
  vEl('msc').textContent=ms.length;
  vEl('ms-done').textContent=ms.filter(m=>m.status==='done').length;
  vEl('ms-prog').textContent=ms.filter(m=>m.status==='inprogress').length;
  vEl('ms-up').textContent=ms.filter(m=>m.status==='upcoming').length;
  const contractTotal=ms.reduce((a,m)=>a+Number(m.payAmt||0),0);
  const paidTotal=ms.reduce((a,m)=>a+(m.progressPayments||[]).filter(pp=>pp.paid).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
  const totalScheduled=ms.reduce((a,m)=>a+(m.progressPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
  vEl('ms-total').textContent=fmtMoney(contractTotal);
  vEl('ms-paid').textContent=fmtMoney(paidTotal);
  vEl('ms-bal').textContent=fmtMoney(totalScheduled-paidTotal);
  const tb=vEl('ms-tbody');
  if(!ms.length){tb.innerHTML=`<tr><td colspan="6"><div class="empty"><div class="empty-ic">🏆</div>No milestones yet.</div></td></tr>`;return;}
  renderMilestoneLedger(ms);
  ms.forEach(m=>{regFiles(m.payFiles||[]);(m.progressPayments||[]).forEach(pp=>regFiles(pp.files||[]))});
  tb.innerHTML=ms.map(m=>{
    const dot=m.status==='done'?'var(--green-m)':m.status==='inprogress'?'var(--amber-m)':'var(--border)';
    const pps=m.progressPayments||[];
    const ppPaid=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);
    const ppTotal=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);
    pps.forEach(pp=>regFiles(pp.files||[]));

    // Contract amount cell
    const amtCell=m.payAmt
      ?`<span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">${fmtMoney(m.payAmt)}</span>`
      :`<span style="color:var(--muted);font-size:12px">—</span>`;

    // Progress payments cell
    const ppCell=pps.length
      ?`<div style="display:flex;flex-direction:column;gap:4px">
          ${pps.map(pp=>`
          <div style="background:${pp.paid?'var(--green-l)':'var(--bg)'};border:1px solid ${pp.paid?'#B8DCA0':'var(--border)'};border-radius:6px;padding:5px 8px">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--text)">${pp.name} — ${fmtMoney(pp.amount||0)}</div>
                ${pp.paid?`<div style="font-size:10px;color:var(--green);margin-top:1px">✓ Received ${pp.receivedDate?'· '+fmtDate(pp.receivedDate):''}</div>`:`<div style="font-size:10px;color:var(--muted);margin-top:1px">Due: ${fmtDate(pp.dueDate)||'—'}</div>`}
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                ${(pp.files||[]).length
                  ?`<div style="display:flex;flex-direction:column;gap:2px">
                      ${(pp.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:3px;background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:2px 6px;max-width:150px">
                        <span style="font-size:10px">${fileIcon(f.name)}</span>
                        <span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">${f.name}</span>
                        <button class="a-dl" onclick="dlFile('${f.id}')" style="font-size:9px;padding:1px 5px">⬇</button>
                      </div>`).join('')}
                      <button class="btn btn-ghost btn-xs" onclick="openModal('msppfiles','${m.id}|${pp.id}')" style="font-size:9px;padding:2px 6px">+ Add</button>
                    </div>`
                  :`<button class="btn btn-ghost btn-xs" onclick="openModal('msppfiles','${m.id}|${pp.id}')" style="font-size:9px;padding:2px 6px">📎 Attach Proof</button>`}
                ${pp.paid?`<button class="btn btn-ghost btn-xs" onclick="unmarkPP('${m.id}','${pp.id}')" title="Undo">↩</button>`:`<button class="btn btn-green btn-xs" onclick="openMarkPP('${m.id}','${pp.id}')">Mark Received</button>`}
              </div>
            </div>
          </div>`).join('')}
          <div style="display:flex;justify-content:space-between;font-size:11px;padding:3px 2px;border-top:1px solid var(--border);margin-top:1px">
            <span style="color:var(--muted)">Received: <strong style="color:var(--green)">${fmtMoney(ppPaid)}</strong></span>
            <span style="color:var(--muted)">Balance: <strong style="color:${ppTotal-ppPaid>0?'var(--red)':'var(--green)'}">${fmtMoney(ppTotal-ppPaid)}</strong></span>
          </div>
          <button class="btn btn-ghost btn-xs" onclick="openModal('msprogpay','${m.id}')">+ Add Payment</button>
        </div>`
      :`<button class="btn btn-ghost btn-xs" onclick="openModal('msprogpay','${m.id}')">+ Add Progress Payment</button>`;

    return`<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:9px;height:9px;border-radius:50%;background:${dot};flex-shrink:0"></div><div><div class="tn">${m.name}</div><div class="tm">${m.notes||''}</div></div></div></td>
      <td><span class="cbc">${m.ref}</span></td>
      <td>${fmtDate(m.date)}</td>
      <td>${statusBadge(m.status)}</td>
      <td>${amtCell}</td>
      <td style="min-width:240px">${ppCell}</td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('milestone','${m.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('milestones','${m.id}')">Del</button></div></td>
    </tr>`;
  }).join('');
}

// ── QUOTES ──
function renderQuotes(){
  const p=proj(); if(!p) return;
  const qs=p.quotes||[];
  vEl('qc').textContent=qs.length;
  vEl('q-total').textContent=fmtMoney(qs.reduce((a,q)=>a+Number(q.amount||0),0));
  vEl('q-approved').textContent=fmtMoney(qs.filter(q=>q.status==='approved').reduce((a,q)=>a+Number(q.amount||0),0));
  const tb=vEl('q-tbody');
  if(!qs.length){tb.innerHTML=`<tr><td colspan="8"><div class="empty"><div class="empty-ic">💰</div>No quotes yet.</div></td></tr>`;return;}
  qs.forEach(q=>regFiles(q.files||[]));
  tb.innerHTML=qs.map(q=>`
    <tr>
      <td><div class="tn">${q.vendor}</div><div class="tm">${q.scope}</div></td>
      <td style="font-size:11px;color:var(--purple)">${q.ref}</td>
      <td><span class="badge b-teal">${q.csi}</span></td>
      <td><span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700">${fmtMoney(q.amount)}</span></td>
      <td>${fmtDate(q.date)}</td>
      <td>${statusBadge(q.status)}</td>
      <td>
        ${(q.files||[]).length
          ?`<div style="display:flex;flex-direction:column;gap:3px">
              ${(q.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:2px 7px;max-width:160px">
                <span style="font-size:11px">${fileIcon(f.name)}</span>
                <span style="font-size:10px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">${f.name}</span>
                <button class="a-dl" onclick="dlFile('${f.id}')" title="Download">⬇</button>
              </div>`).join('')}
              <button class="btn btn-ghost btn-xs" onclick="openModal('qfiles','${q.id}')" style="margin-top:1px">+ Add / Edit</button>
            </div>`
          :`<button class="btn btn-ghost btn-xs" onclick="openModal('qfiles','${q.id}')">📎 Attach</button>`}
      </td>
      <td><div class="row-actions"><button class="btn btn-ghost btn-xs" onclick="openModal('quote','${q.id}')">Edit</button><button class="btn btn-red btn-xs" onclick="delItem('quotes','${q.id}')">Del</button></div></td>
    </tr>`).join('');
}

// ── PLANS ──
function renderPlans(){
  const p=proj(); if(!p) return;
  const plans=p.plans||[];
  vEl('plc').textContent=plans.length;
  const wrap=vEl('plans-wrap');
  if(!plans.length){wrap.innerHTML=`<div class="empty"><div class="empty-ic">📐</div>No documents uploaded yet.</div>`;return;}
  plans.forEach(pl=>regFiles([pl]));
  wrap.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">${plans.map(pl=>`
    <div style="background:#fff;border:1px solid var(--border);border-radius:9px;overflow:hidden;box-shadow:var(--sh)">
      <div style="padding:16px;text-align:center;border-bottom:1px solid var(--border)">
        <div style="font-size:32px;margin-bottom:6px">${fileIcon(pl.name)}</div>
        <div style="font-size:12px;font-weight:600;word-break:break-all">${pl.name}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${pl.type||'Document'}</div>
      </div>
      <div style="padding:9px 12px;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:10px;color:var(--muted)">${fmtBytes(pl.size||0)}</span>
        <div style="display:flex;gap:5px">
          <button class="a-dl" onclick="dlFile('${pl.id}')">⬇</button>
          <button class="a-rm" onclick="delPlan('${pl.id}')">✕</button>
        </div>
      </div>
    </div>`).join('')}</div>`;
}

// ── INSPECTIONS ──
function renderInspections(){
  const p=proj(); if(!p) return;
  const ins=p.inspections||[];
  vEl('ic').textContent=ins.length;
  const list=vEl('ins-list');
  if(!ins.length){list.innerHTML=`<div class="empty"><div class="empty-ic">🔍</div>No inspections scheduled yet.</div>`;return;}
  ins.forEach(i=>regFiles(i.files||[]));
  const ahjCls={cupertino:'b-blue',calosha:'b-red',icc:'b-teal'};
  const ahjLbl={cupertino:'Cupertino',calosha:'CalOSHA',icc:'ICC-Cert.'};
  list.innerHTML=ins.map(i=>{
    const dt=i.inspDate?new Date(i.inspDate+'T12:00:00'):null;
    const day=dt?String(dt.getDate()).padStart(2,'0'):'—';
    const mon=dt?dt.toLocaleString('en-US',{month:'short'}).toUpperCase():'—';
    const timeStr=fmtTime(i.inspTime);
    const filesBtn=(i.files||[]).length
      ?`<button class="btn btn-ghost btn-xs" onclick="openModal('insfiles','${i.id}')">📎 ${i.files.length} file${i.files.length>1?'s':''}</button>`
      :`<button class="btn btn-ghost btn-xs" onclick="openModal('insfiles','${i.id}')">📎 Attach Report</button>`;
    return`<div style="padding:13px 16px;border-bottom:1px solid #F0EDE6">
      <div style="display:flex;align-items:flex-start;gap:13px">
        <div class="datebox" style="background:var(--amber-l)">
          <div class="db-d" style="color:var(--amber)">${day}</div>
          <div class="db-m" style="color:var(--amber)">${mon}</div>
          <div class="db-t">${timeStr}</div>
        </div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;margin-bottom:4px">${i.name}</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:5px">
            <span style="font-size:11px;color:var(--muted)">📅 ${i.inspDate?new Date(i.inspDate+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric',year:'numeric'}):'Not set'}</span>
            <span style="font-size:11px;color:var(--muted)">🕐 ${timeStr}</span>
            ${i.location?`<span style="font-size:11px;color:var(--muted)">📍 ${i.location}</span>`:''}
          </div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:${(i.files||[]).length?'7px':'0'}">
            ${(i.refs||'').split('·').filter(r=>r.trim()).map(r=>`<span class="cbc">${r.trim()}</span>`).join('')}
            <span class="badge ${ahjCls[i.ahj]||'b-blue'}">${ahjLbl[i.ahj]||i.ahj}</span>
            ${i.notes?`<span style="font-size:10px;color:var(--muted)">${i.notes}</span>`:''}
          </div>
          ${(i.files||[]).length?`<div style="display:flex;gap:5px;flex-wrap:wrap">${(i.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:5px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:3px 8px"><span style="font-size:13px">${fileIcon(f.name)}</span><span style="font-size:11px;font-weight:500;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name}</span><button class="a-dl" onclick="dlFile('${f.id}')">⬇</button></div>`).join('')}</div>`:''}
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0">
          <button class="btn btn-ghost btn-xs" onclick="openModal('inspection','${i.id}')">✏ Edit</button>
          ${filesBtn}
          <button class="btn btn-red btn-xs" onclick="delItem('inspections','${i.id}')">🗑 Del</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── PAYMENTS ──
function _buildPayLedgerHTML(quotes, grandContract, grandPaid, p){
  const grandBal = grandContract - grandPaid;
  const totalPct = grandContract ? Math.min(100, Math.round(grandPaid/grandContract*100)) : 0;

  const rows = quotes.map((q,idx)=>{
    const invAll=(p.invoices||[]).filter(i=>i.quoteId===q.id&&i.approvalStatus==='approved');
    const invPaidLedger = invAll.reduce((a,i)=>{
      if(i.paid) return a+Number(i.amount||0);
      return a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0);
    },0);
    const qPaid = invPaidLedger;
    const qBal = Number(q.amount||0) - qPaid;
    const pct = q.amount ? Math.min(100, Math.round(qPaid/Number(q.amount)*100)) : 0;
    const rowBg = idx%2===0 ? '#fff' : 'var(--bg)';

    // Build invoice milestone sub-rows for this vendor
    const vc=(p.vendors||[]).find(v=>v.quoteId===q.id);
    const vMilestones=vc?vc.milestones||[]:[];

    // Group invoices by milestone
    const invSubRows=invAll.map(inv=>{
      const msName=vMilestones.find(m=>m.id===inv.milestoneId)?.name||'—';
      const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      const invBal=Number(inv.amount||0)-invPaid;
      const allPmts=[...(inv.partialPayments||[])];
      if(inv.paid&&!allPmts.length) allPmts.push({amount:inv.amount,date:inv.paidDate,full:true});
      const pmtDetail=allPmts.map(pp=>
        '<span style="font-size:9px;color:var(--green);background:var(--green-l);padding:2px 7px;border-radius:3px;margin-right:3px;margin-bottom:2px;display:inline-block">'
        +'&#10003; $'+Number(pp.amount||0).toLocaleString()
        +(pp.date?' &middot; '+fmtDate(pp.date):'')
        +(pp.txnNo?'<span style="color:#1A6BC4"> &middot; Txn: '+pp.txnNo+'</span>':'')
        +(pp.full&&inv.txnNo?'<span style="color:#1A6BC4"> &middot; Txn: '+inv.txnNo+'</span>':'')
        +((pp.files||[]).length?'<span style="color:#555"> &middot; &#128206;'+( pp.files||[]).length+'</span>':'')
        +'</span>'
      ).join('');
      return `<tr style="background:${inv.paid?'#F3FCF0':'var(--bg)'}">
        <td style="padding:5px 14px 5px 28px;border-bottom:1px solid var(--border)" colspan="2">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:9px;background:${inv.paid?'var(--green)':'var(--amber)'};color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">${inv.paid?'✓ PAID':'PARTIAL'}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${inv.invoiceNo||'Invoice'}</span>
            <span style="font-size:10px;color:var(--blue)">📍 ${msName}</span>
            ${inv.txnNo&&inv.paid?`<span style="font-size:9px;color:var(--blue);background:var(--blue-l);padding:1px 6px;border-radius:3px">Txn: ${inv.txnNo}</span>`:''}
          </div>
          ${pmtDetail?`<div style="margin-top:3px">${pmtDetail}</div>`:''}
        </td>
        <td style="padding:5px 10px;font-size:12px;font-weight:600;border-bottom:1px solid var(--border)">$${Number(inv.amount||0).toLocaleString()}</td>
        <td style="padding:5px 10px;font-size:12px;font-weight:600;color:var(--green);border-bottom:1px solid var(--border)">$${invPaid.toLocaleString()}</td>
        <td style="padding:5px 10px;font-size:12px;font-weight:600;color:${invBal>0?'var(--red)':'var(--green)'};border-bottom:1px solid var(--border)">$${invBal.toLocaleString()}</td>
        <td colspan="2" style="border-bottom:1px solid var(--border)"></td>
      </tr>`;
    }).join('');

    return `<tr style="background:${rowBg}">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:600;color:var(--navy)">${q.vendor}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:1px">${q.scope}</div>
      </td>
      <td style="padding:10px 14px">
        <span class="badge ${q.csi?'b-teal':'b-gray'}">${q.csi||'—'}</span>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">
        ${q.amount?'$'+Number(q.amount).toLocaleString():'—'}
      </td>
      <td style="padding:10px 14px">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">
          $${qPaid.toLocaleString()}
        </span>
      </td>
      <td style="padding:10px 14px">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${qBal>0?'var(--red)':'var(--green)'}">
          $${qBal.toLocaleString()}
        </span>
      </td>
      <td style="padding:10px 14px">
        <div style="display:flex;align-items:center;gap:7px">
          <div style="width:80px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
            <div style="height:100%;width:${pct}%;background:${pct===100?'var(--green-m)':pct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:3px;transition:.5s"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:${pct===100?'var(--green)':'var(--text)'}">${pct}%</span>
        </div>
      </td>
      <td style="padding:10px 14px">
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerPDF('${q.id}')" title="PDF">🖨</button>
          <button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerExcel('${q.id}')" title="Excel">📊</button>
        </div>
      </td>
    </tr>${invSubRows}`;
  }).join('');

  const totalPctBar = `<div style="display:flex;align-items:center;gap:7px"><div style="width:80px;height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden;flex-shrink:0"><div style="height:100%;width:${totalPct}%;background:${totalPct===100?'#9FE1CB':'#85B7EB'};border-radius:3px"></div></div><span style="font-size:11px;font-weight:700;color:#fff">${totalPct}%</span></div>`;

  return `<div style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="background:var(--bg)">
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:26%">Subcontractor / Invoice</th>
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">CSI</th>
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Contract / Amount</th>
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--green);text-align:left;border-bottom:1px solid var(--border)">✓ Paid</th>
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--red);text-align:left;border-bottom:1px solid var(--border)">Balance Due</th>
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Status</th>
          <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Export</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
        <tr style="background:var(--navy)">
          <td style="padding:11px 14px" colspan="2"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL — ${quotes.length} Subcontractor${quotes.length>1?'s':''}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">$${grandContract.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">$${grandPaid.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${grandBal>0?'#F09595':'#9FE1CB'}">$${grandBal.toLocaleString()}</span></td>
          <td style="padding:11px 14px">${totalPctBar}</td>
          <td style="padding:11px 14px">
            <div style="display:flex;gap:4px">
              <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)" onclick="exportPaymentLedgerPDF()">🖨 All PDF</button>
              <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)" onclick="exportPaymentLedgerExcel()">📊 All Excel</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
}

function renderPayments(){
  const p=proj(); if(!p) return;
  // Payments: vendor contracts with approved invoices
  const vcWithInvs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  // Also include approved manual invoices (no contract) grouped as synthetic vendor entries
  const manualApproved=(p.invoices||[]).filter(i=>i.isManual&&i.approvalStatus==='approved');
  const quoteOnlyApproved=(p.invoices||[]).filter(i=>!i.isManual&&i.quoteId&&!i.vcId&&i.approvalStatus==='approved');
  const manualByVendor={};
  manualApproved.forEach(i=>{const k=i.vendor||'Unknown';if(!manualByVendor[k])manualByVendor[k]=[];manualByVendor[k].push(i);});
  // Synthetic vendor objects for manual invoices (no vcId)
  const manualVCList=Object.entries(manualByVendor).map(([name,invs])=>({
    id:'__manual__'+name, vendor:name, amount:invs.reduce((a,i)=>a+Number(i.amount||0),0),
    trade:'', contractNo:'', isManualGroup:true, milestones:[], _manualInvs:invs
  }));
  const quoteById={};
  quoteOnlyApproved.forEach(i=>{const key=i.quoteId;if(!quoteById[key])quoteById[key]=[];quoteById[key].push(i);});
  const quoteOnlyList=Object.entries(quoteById).map(([qid,invs])=>{
    const q=(p.quotes||[]).find(x=>x.id===qid);
    return {id:'__quote__'+qid,sourceQuoteId:qid,vendor:q?.vendor||invs[0]?.vendor||'Unknown',amount:Number(q?.amount||invs.reduce((a,i)=>a+Number(i.amount||0),0)),trade:q?.csi||'',contractNo:'',scope:q?.scope||'',isQuoteGroup:true,milestones:[],_quoteInvs:invs};
  });
  vEl('ct-pay').textContent=vcWithInvs.length+manualVCList.length+quoteOnlyList.length;
  const listEl=vEl('pay-list');
  const emptyEl=vEl('pay-empty');
  const ledgerPanel=vEl('pay-ledger-panel');
  const ledgerEl=vEl('pay-ledger');

  const allPayGroups=[...vcWithInvs,...quoteOnlyList,...manualVCList];
  renderVCPayPieChart(allPayGroups, p);
  if(!allPayGroups.length){
    listEl.innerHTML=''; emptyEl.style.display='';
    if(ledgerPanel)ledgerPanel.style.display='none';
    vEl('bs-c').textContent=fmtMoney(0); vEl('bs-p').textContent=fmtMoney(0);
    vEl('bs-b').textContent=fmtMoney(0); vEl('bs-pct').textContent='0%';
    vEl('bs-bar').style.width='0%';
    return;
  }
  emptyEl.style.display='none';

  // Totals from vendor contracts + manual invoices
  let totalContract=0, totalPaid=0;
  vcWithInvs.forEach(v=>{
    totalContract+=Number(v.amount||0);
    (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
      if(i.paid){totalPaid+=Number(i.amount||0);}
      else{(i.partialPayments||[]).forEach(pp=>totalPaid+=Number(pp.amount||0));}
    });
  });
  manualVCList.forEach(mv=>{
    totalContract+=mv.amount;
    mv._manualInvs.forEach(i=>{
      if(i.paid)totalPaid+=Number(i.amount||0);
      else (i.partialPayments||[]).forEach(pp=>totalPaid+=Number(pp.amount||0));
    });
  });
  quoteOnlyList.forEach(qv=>{
    totalContract+=qv.amount;
    qv._quoteInvs.forEach(i=>{
      if(i.paid)totalPaid+=Number(i.amount||0);
      else (i.partialPayments||[]).forEach(pp=>totalPaid+=Number(pp.amount||0));
    });
  });
  const pct=totalContract?Math.min(100,Math.round(totalPaid/totalContract*100)):0;
  vEl('bs-c').textContent=fmtMoney(totalContract);
  vEl('bs-p').textContent=fmtMoney(totalPaid);
  vEl('bs-b').textContent=fmtMoney(totalContract-totalPaid);
  vEl('bs-b').style.color=totalContract-totalPaid>0?'#F09595':'#9FE1CB';
  vEl('bs-pct').textContent=pct+'%';
  vEl('bs-bar').style.width=pct+'%';
  vEl('bs-bar').style.background=pct===100?'#9FE1CB':pct>60?'#85B7EB':'#FAC775';

  // Show VC ledger
  if(ledgerPanel){
    ledgerPanel.style.display='';
    if(ledgerEl) ledgerEl.innerHTML=_buildVCPayLedgerHTML(allPayGroups, totalContract, totalPaid, p);
  }

  // Hide old export bar
  const subBar=vEl('pay-export-bar');
  if(subBar) subBar.style.display='none';

  // Show smart search bar
  const smartBar=vEl('pay-smart-search-bar');
  if(smartBar) smartBar.style.display='';

  // Register files
  vcWithInvs.forEach(v=>{
    (p.invoices||[]).filter(i=>i.vcId===v.id).forEach(inv=>regFiles(inv.files||[]));
  });
  quoteOnlyList.forEach(qv=>{
    qv._quoteInvs.forEach(inv=>regFiles(inv.files||[]));
  });
  manualVCList.forEach(mv=>{
    mv._manualInvs.forEach(inv=>regFiles(inv.files||[]));
  });

  function _buildPayInvRows(vcSource, qInvoices, contractAmt, p){
    const qPaid=qInvoices.reduce((a,i)=>{
      if(i.paid) return a+Number(i.amount||0);
      return a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0);
    },0);
    const qBal=Number(contractAmt||0)-qPaid;
    const qPct=contractAmt?Math.min(100,Math.round(qPaid/Number(contractAmt)*100)):0;
    const invRows=qInvoices.length?qInvoices.map((inv,idx)=>{
      const bg=idx%2===0?'#fff':'var(--bg)';
      const partials=inv.partialPayments||[];
      const totalPartial=partials.reduce((a,pp)=>a+Number(pp.amount||0),0);
      const remaining=Number(inv.amount||0)-totalPartial;
      const invMsName=vcSource?(vcSource.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'':'';
      const payHistoryHTML=partials.length?partials.map(pp=>{const ppFiles=pp.files||[];return`<div style="background:#FAFFFE;border:1px solid var(--border);border-radius:5px;padding:6px 8px;margin-bottom:5px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px"><span style="color:var(--green);font-weight:700;font-size:11px">✓ $${Number(pp.amount||0).toLocaleString()}</span><span style="color:var(--muted);font-size:9px">${fmtDate(pp.date)||''}</span>${!inv.paid?`<button onclick="removePartialPayment('${inv.id}','${pp.id}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:12px;padding:0 2px" title="Remove">×</button>`:''}</div><div style="display:flex;align-items:center;gap:5px;margin-bottom:5px"><span style="font-size:9px;color:var(--muted);white-space:nowrap;flex-shrink:0">🔖 Txn #:</span><input type="text" value="${pp.txnNo||''}" placeholder="Transaction / Reference #" onchange="updatePartialTxn('${inv.id}','${pp.id}',this.value)" style="flex:1;font-size:9px;border:1px solid var(--border);border-radius:3px;padding:2px 5px;background:#fff;outline:none"/></div><div style="display:flex;gap:4px;margin-bottom:5px"><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px;justify-content:center" onclick="openLienEmail('${inv.id}','Conditional Progress','${pp.id}')">📧 Cond. Progress</button><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px;justify-content:center" onclick="openLienEmail('${inv.id}','Conditional Final','${pp.id}')">📧 Cond. Final</button></div>${ppFiles.length?`<div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:4px">${ppFiles.map(f=>`<div style="display:flex;align-items:center;gap:2px;background:var(--blue-l);border:1px solid #B0D0F0;border-radius:3px;padding:2px 5px;max-width:120px"><span style="font-size:9px">${fileIcon(f.name)}</span><span style="font-size:9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${f.name}</span><button class="a-dl" onclick="dlFile('${f.id}')" style="font-size:8px;padding:0 3px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">⬇</button></div>`).join('')}</div>`:''}${!inv.paid?`<button onclick="openModal('ppfiles','${inv.id}|${pp.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px;width:100%">📎 ${ppFiles.length?ppFiles.length+' file(s) · + Add':'Attach Supporting File'}</button>`:''}</div>`}).join(''):'';
      const _maxRemaining=remaining>0?remaining:0;
      const paidCell=inv.paid?`<div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:6px;padding:7px 9px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px"><span style="font-size:11px;font-weight:700;color:var(--green)">✓ Fully Paid</span><button onclick="unmarkInv('${inv.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Undo</button></div>${payHistoryHTML}<div style="font-size:10px;font-weight:700;color:var(--green);margin-top:4px;padding-top:4px;border-top:1px solid #B8DCA0">Total: $${Number(inv.amount||0).toLocaleString()}</div></div>`:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:7px 9px">${invMsName?`<div style="font-size:9px;font-weight:700;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;border-radius:4px;padding:3px 8px;margin-bottom:6px">📍 Milestone: ${invMsName}</div>`:''}<div style="font-size:9px;color:var(--muted);margin-bottom:5px">Invoice: <strong style="color:var(--text)">$${Number(inv.amount||0).toLocaleString()}</strong> · Max payable: <strong style="color:${_maxRemaining>0?'var(--amber)':'var(--green)'}">$${_maxRemaining.toLocaleString()}</strong></div>${payHistoryHTML}${remaining<Number(inv.amount||0)?`<div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:5px;padding-bottom:4px;border-bottom:1px solid var(--border)">Remaining: $${remaining.toLocaleString()}</div>`:''}<div style="display:flex;gap:4px;margin-bottom:4px"><input type="number" id="invpamt_${inv.id}" min="0.01" max="${_maxRemaining}" step="0.01" oninput="const v=parseFloat(this.value)||0;this.style.border=v>${_maxRemaining}?'2px solid var(--red)':'1px solid var(--border)'" style="flex:1;font-size:10px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;background:#fff;outline:none" placeholder="Amount (max $${_maxRemaining.toLocaleString()})"/><input type="date" id="invpdate_${inv.id}" value="${localDateStr()}" style="flex:1;font-size:10px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;background:#fff;outline:none"/></div><div style="display:flex;gap:4px;margin-bottom:5px"><button onclick="addPartialPayment('${inv.id}')" class="btn btn-ghost btn-xs" style="flex:1;justify-content:center;font-size:10px">+ Partial Pay</button><button onclick="markInvPaid('${inv.id}')" class="btn btn-green btn-xs" style="flex:1;justify-content:center;font-size:10px">✓ Full Pay</button></div><div style="border-top:1px solid var(--border);padding-top:5px;display:flex;gap:4px"><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px" onclick="openLienEmail('${inv.id}','Conditional Progress')">📧 Cond. Progress</button><button class="btn btn-xs" style="flex:1;background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 4px" onclick="openLienEmail('${inv.id}','Conditional Final')">📧 Cond. Final</button></div></div>`;
      const _sc=(inv.lienSent||[]).map(s=>`<div style="display:flex;align-items:center;gap:4px;background:#F0FDF4;border:1px solid #86EFAC;border-radius:4px;padding:3px 7px;margin-bottom:1px"><span style="font-size:8px;color:#166534;font-weight:700">✉ Sent</span><span style="font-size:8px;color:#166534;flex:1">${s.type}</span><span style="font-size:8px;color:#166534;opacity:.7;white-space:nowrap">${fmtDate(s.date)}</span></div>`).join('');
      const lienCell=`<div style="display:flex;flex-direction:column;gap:3px">${_sc}<button class="btn btn-xs" style="background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 6px;white-space:nowrap" onclick="openLienEmail('${inv.id}','Unconditional Progress')">📧 Uncond. Progress</button><button class="btn btn-xs" style="background:#EFF6FF;color:#1A6BC4;border:1px solid #BFDBFE;font-size:8px;padding:3px 6px;white-space:nowrap" onclick="openLienEmail('${inv.id}','Unconditional Final')">📧 Uncond. Final</button>${(inv.lienFiles||[]).length?`<div style="display:flex;flex-direction:column;gap:2px;margin-top:2px">${(inv.lienFiles||[]).map(f=>`<div style="display:flex;align-items:center;gap:4px;background:var(--teal-l);border:1px solid #9FE0CB;border-radius:4px;padding:2px 6px;max-width:170px"><span style="font-size:10px">${fileIcon(f.name)}</span><span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name}</span><button class="a-dl" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:8px;padding:1px 4px;flex-shrink:0" onclick="viewFile('${f.id}')">View</button><button class="a-dl" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:9px;padding:1px 4px;flex-shrink:0" onclick="dlFile('${f.id}')">⬇</button></div>`).join('')}</div>`:''}<button class="btn btn-xs" style="background:var(--teal-l);color:var(--teal);border:1px solid #9FE0CB;font-size:8px;padding:2px 6px" onclick="openModal('invlien','${inv.id}')">📎 ${(inv.lienFiles||[]).length?'+ Add Signed':'Upload Signed Waiver'}</button></div>`;
      return`<tr style="background:${bg}"><td style="padding:8px 10px"><div style="font-size:12px;font-weight:600;color:var(--navy)">${inv.invoiceNo||'—'}</div>${invMsName?`<div style="font-size:10px;color:var(--blue);margin-top:2px">📍 ${invMsName}</div>`:''}<div style="font-size:10px;color:var(--muted)">${inv.description||''}</div></td><td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${inv.invoiceDate?fmtDate(inv.invoiceDate):'—'}</td><td style="padding:8px 10px;font-size:10px;color:${inv.dueDate&&new Date(inv.dueDate+'T12:00:00')<new Date()&&!inv.paid?'var(--red)':'var(--muted)'};white-space:nowrap">${inv.dueDate?fmtDate(inv.dueDate):'—'}</td><td style="padding:8px 10px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${inv.paid?'var(--green)':'var(--text)'}">${fmtMoney(inv.amount||0)}</span></td><td style="padding:6px 8px;min-width:150px">${paidCell}</td><td style="padding:6px 8px">${lienCell}</td><td style="padding:8px 10px;white-space:nowrap"><button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 6px" onclick="nav('invoices')">View</button></td></tr>`;
    }).join(''):`<tr><td colspan="7" style="padding:14px;text-align:center;color:var(--muted);font-size:12px">No approved invoices yet.</td></tr>`;
    return{invRows,qPaid,qBal,qPct};
  }
  function _payGroupInvoices(group){
    if(group.isManualGroup) return group._manualInvs||[];
    if(group.isQuoteGroup) return group._quoteInvs||[];
    return (p.invoices||[]).filter(i=>i.vcId===group.id&&i.approvalStatus==='approved');
  }
  function _payGroupMilestones(group){
    if(group.isManualGroup) return [];
    if(group.milestones&&group.milestones.length) return group.milestones;
    if(group.isQuoteGroup){
      const linkedVc=(p.vendors||[]).find(v=>v.quoteId===group.sourceQuoteId||v.vendor===group.vendor);
      return linkedVc?.milestones||[];
    }
    return [];
  }
  function _buildMilestoneBreakupHTML(group){
    const invs=_payGroupInvoices(group);
    const milestones=_payGroupMilestones(group);
    if(group.isManualGroup){
      return `<div style="padding:10px 16px;background:#FFFDF8;border-bottom:1px solid var(--border);font-size:11px;color:var(--muted)">Manual invoices are tracked directly per invoice, so there is no contract milestone breakup for this vendor.</div>`;
    }
    const rows=[];
    milestones.forEach(ms=>{
      const msInvs=invs.filter(inv=>inv.milestoneId===ms.id);
      const invoiced=msInvs.reduce((a,inv)=>a+Number(inv.amount||0),0);
      const paid=msInvs.reduce((a,inv)=>a+(inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0)),0);
      const scheduled=Number(ms.amount||0)||invoiced;
      const balance=Math.max(scheduled-paid,0);
      const pct=scheduled?Math.min(100,Math.round((paid/scheduled)*100)):0;
      rows.push({name:ms.name||'Milestone',scheduled,invoiced,paid,balance,pct});
    });
    const unassignedInvs=invs.filter(inv=>!inv.milestoneId||!milestones.some(ms=>ms.id===inv.milestoneId));
    if(unassignedInvs.length){
      const invoiced=unassignedInvs.reduce((a,inv)=>a+Number(inv.amount||0),0);
      const paid=unassignedInvs.reduce((a,inv)=>a+(inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0)),0);
      rows.push({name:'Unassigned',scheduled:invoiced,invoiced,paid,balance:Math.max(invoiced-paid,0),pct:invoiced?Math.min(100,Math.round((paid/invoiced)*100)):0});
    }
    if(!rows.length){
      return `<div style="padding:10px 16px;background:#FFFDF8;border-bottom:1px solid var(--border);font-size:11px;color:var(--muted)">No milestone breakup available yet for this vendor.</div>`;
    }
    return `<div style="padding:10px 16px;border-bottom:1px solid var(--border);background:#FFFDF8">
      <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Milestone Payment Breakup</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        ${rows.map(row=>`<div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:9px 10px">
          <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:5px">
            <span style="font-size:11px;font-weight:700;color:var(--navy);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${row.name}</span>
            <span style="font-size:10px;font-weight:700;color:${row.pct===100?'var(--green)':row.pct>0?'var(--amber)':'var(--muted)'}">${row.pct}%</span>
          </div>
          <div style="height:5px;background:var(--border);border-radius:999px;overflow:hidden;margin-bottom:7px"><div style="height:100%;width:${row.pct}%;background:${row.pct===100?'var(--green-m)':row.pct>0?'var(--amber-m)':'#D7D3CB'}"></div></div>
          <div style="font-size:10px;color:var(--muted)">Scheduled: <strong style="color:var(--text)">${fmtMoney(row.scheduled)}</strong></div>
          <div style="font-size:10px;color:var(--muted)">Invoiced: <strong style="color:var(--text)">${fmtMoney(row.invoiced)}</strong></div>
          <div style="font-size:10px;color:var(--green)">Paid: <strong>${fmtMoney(row.paid)}</strong></div>
          <div style="font-size:10px;color:${row.balance>0?'var(--red)':'var(--green)'}">Balance: <strong>${fmtMoney(row.balance)}</strong></div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  const tblHead=`<table style="width:100%;border-collapse:collapse;table-layout:fixed"><thead><tr style="background:var(--bg)"><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Invoice #</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Date</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--red);text-align:left;border-bottom:1px solid var(--border);width:8%">Due</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Amount</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:18%">Payment</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--teal);text-align:left;border-bottom:1px solid var(--border);width:14%">🔏 Lien Waiver</th><th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:6%"></th></tr></thead><tbody>`;

  renderTradeLedgerPanel(vcWithInvs, p);

  const vcCards=vcWithInvs.map(v=>{
    const r=_buildPayInvRows(v,(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved'),v.amount,p);
    return`<div class="panel pay-vendor-card" data-vendor="${v.id}" style="margin-bottom:16px">
      <div style="background:var(--navy);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${v.vendor}</span>
          <span class="badge" style="background:rgba(26,107,196,.3);color:#8AAAC8;border:1px solid rgba(26,107,196,.4);font-size:9px">Vendor Contract</span>
          ${v.trade?`<span style="font-size:11px;color:#8AAAC8">${v.trade}</span>`:''}
          ${v.contractNo?`<span style="font-size:10px;color:#8AAAC8;opacity:.8">#${v.contractNo}</span>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${fmtMoney(v.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.15);padding-left:10px">
            <button onclick="exportVCPaymentLedgerPDF('${v.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF ledger">🖨 PDF</button>
            <button onclick="exportVCPaymentLedgerExcel('${v.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel ledger">📊 Excel</button>
            <button onclick="openLedgerEmail('vendor','${v.id}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(26,107,196,.35);border:1px solid rgba(26,107,196,.5);color:#7CC4F8;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger to vendor">📧 Email</button>
          </div>
        </div>
      </div>
      <div style="padding:11px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Payment Progress</span>
            <span style="font-size:11px;font-weight:700;color:${r.qPct===100?'var(--green)':'var(--text)'}">${r.qPct}%</span>
          </div>
          <div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${r.qPct}%;background:${r.qPct===100?'var(--green-m)':r.qPct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:4px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:18px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${fmtMoney(r.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Balance</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${r.qBal>0?'var(--red)':'var(--green)'}">${fmtMoney(r.qBal)}</div></div>
        </div>
      </div>
      ${_buildMilestoneBreakupHTML(v)}${tblHead}${r.invRows}</tbody></table>
    </div>`;
  });

  const quoteCards=quoteOnlyList.map(qv=>{
    const r=_buildPayInvRows(null, qv._quoteInvs, qv.amount, p);
    return`<div class="panel pay-vendor-card" data-vendor="${qv.id}" style="margin-bottom:16px">
      <div style="background:var(--blue);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${qv.vendor}</span>
          <span class="badge" style="background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3);font-size:9px">Approved Quote</span>
          ${qv.scope?`<span style="font-size:10px;color:rgba(255,255,255,.78)">${qv.scope}</span>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${fmtMoney(qv.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.25);padding-left:10px">
            <button onclick="exportPaymentLedgerPDF('${qv.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF">🖨 PDF</button>
            <button onclick="exportPaymentLedgerExcel('${qv.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel">📊 Excel</button>
            <button onclick="openLedgerEmail('quote','${qv.sourceQuoteId}')" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger">📧 Email</button>
          </div>
        </div>
      </div>
      <div style="padding:11px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Payment Progress</span>
            <span style="font-size:11px;font-weight:700;color:${r.qPct===100?'var(--green)':'var(--text)'}">${r.qPct}%</span>
          </div>
          <div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${r.qPct}%;background:${r.qPct===100?'var(--green-m)':r.qPct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:4px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:18px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${fmtMoney(r.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Balance</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${r.qBal>0?'var(--red)':'var(--green)'}">${fmtMoney(r.qBal)}</div></div>
        </div>
      </div>
      ${_buildMilestoneBreakupHTML(qv)}${tblHead}${r.invRows}</tbody></table>
    </div>`;
  });

  // Manual invoice cards (no vendor contract)
  const manualCards=manualVCList.map(mv=>{
    const r=_buildPayInvRows(null, mv._manualInvs, mv.amount, p);
    const nameEnc=encodeURIComponent(mv.vendor);
    return`<div class="panel pay-vendor-card" data-vendor="${mv.id}" style="margin-bottom:16px">
      <div style="background:var(--teal);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          <span class="pay-vendor-name" style="font-size:14px;font-weight:700;color:#fff">${mv.vendor}</span>
          <span class="badge" style="background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3);font-size:9px">✏ Manual Invoices</span>
          <span style="font-size:10px;color:rgba(255,255,255,.7)">${mv._manualInvs.length} invoice${mv._manualInvs.length!==1?'s':''}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${fmtMoney(mv.amount)}</span>
          <div style="display:flex;gap:4px;border-left:1px solid rgba(255,255,255,.25);padding-left:10px">
            <button onclick="exportVendorNameLedgerPDF(decodeURIComponent('${nameEnc}'))" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download PDF">🖨 PDF</button>
            <button onclick="exportVendorNameLedgerExcel(decodeURIComponent('${nameEnc}'))" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Download Excel">📊 Excel</button>
            <button onclick="openLedgerEmail('vendorname',decodeURIComponent('${nameEnc}'))" style="display:inline-flex;align-items:center;gap:3px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:10px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer;font-family:'Barlow',sans-serif" title="Email ledger">📧 Email</button>
          </div>
        </div>
      </div>
      <div style="padding:11px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Payment Progress</span>
            <span style="font-size:11px;font-weight:700;color:${r.qPct===100?'var(--green)':'var(--text)'}">${r.qPct}%</span>
          </div>
          <div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${r.qPct}%;background:${r.qPct===100?'var(--green-m)':r.qPct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:4px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:18px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--green)">${fmtMoney(r.qPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Total Invoiced</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:${r.qBal>0?'var(--amber)':'var(--green)'}">${fmtMoney(mv.amount)}</div></div>
        </div>
      </div>
      ${_buildMilestoneBreakupHTML(mv)}${tblHead}${r.invRows}</tbody></table>
    </div>`;
  });

  listEl.innerHTML=[...vcCards,...quoteCards,...manualCards].join('');
  listEl.querySelectorAll("button[onclick*=\"openModal('invlien',\"]").forEach(btn=>{
    const attr=btn.getAttribute('onclick')||'';
    const m=attr.match(/openModal\('invlien','([^']+)'\)/);
    if(!m) return;
    const invId=m[1];
    const inv=(p.invoices||[]).find(x=>x.id===invId);
    if(!inv||(inv.lienFiles||[]).length===0) return;
    if(btn.parentElement?.querySelector(`[data-waiver-dl="${invId}"]`)) return;
    const viewBtn=document.createElement('button');
    viewBtn.className='btn btn-xs';
    viewBtn.setAttribute('data-waiver-view',invId);
    viewBtn.style.background='#EEF9F5';
    viewBtn.style.color='var(--teal)';
    viewBtn.style.border='1px solid #9FE0CB';
    viewBtn.style.fontSize='8px';
    viewBtn.style.padding='2px 6px';
    viewBtn.textContent='View Waivers';
    viewBtn.onclick=()=>viewAllLienFiles(invId);
    const dlBtn=document.createElement('button');
    dlBtn.className='btn btn-xs';
    dlBtn.setAttribute('data-waiver-dl',invId);
    dlBtn.style.background='#E8F2FC';
    dlBtn.style.color='var(--blue)';
    dlBtn.style.border='1px solid #B0D0F0';
    dlBtn.style.fontSize='8px';
    dlBtn.style.padding='2px 6px';
    dlBtn.textContent='⬇ All Waivers';
    dlBtn.onclick=()=>downloadAllLienFiles(invId);
    btn.parentElement.insertBefore(viewBtn, btn);
    btn.parentElement.insertBefore(dlBtn, btn);
  });
}

function markPaid(qid,pmid){
  const p=proj(); if(!p) return;
  const q=(p.quotes||[]).find(x=>x.id===qid); if(!q) return;
  const pm=(q.payMilestones||[]).find(x=>x.id===pmid); if(!pm) return;
  const dateEl=vEl('pd_'+pmid);
  pm.paid=true; pm.paidDate=dateEl?.value||localDateStr();
  saveDB(); renderAll(); toast('✓ Payment marked as paid');
}
function openMarkPP(mid,ppid){openModal('markpp',mid+'|'+ppid);}
function unmarkPP(mid,ppid){
  const p=proj(); if(!p) return;
  const ms=(p.milestones||[]).find(x=>x.id===mid); if(!ms) return;
  const pp=(ms.progressPayments||[]).find(x=>x.id===ppid); if(!pp) return;
  pp.paid=false; pp.receivedDate='';
  saveDB(); renderAll(); toast('Payment unmarked');
}
function delProgressPayment(mid,ppid){
  const p=proj(); if(!p||!confirm('Delete this progress payment?')) return;
  const ms=(p.milestones||[]).find(x=>x.id===mid); if(!ms) return;
  ms.progressPayments=(ms.progressPayments||[]).filter(x=>x.id!==ppid);
  saveDB(); renderAll(); toast('🗑 Deleted');
}
function unmarkPaid(qid,pmid){
  const p=proj(); if(!p) return;
  const q=(p.quotes||[]).find(x=>x.id===qid); if(!q) return;
  const pm=(q.payMilestones||[]).find(x=>x.id===pmid); if(!pm) return;
  pm.paid=false; pm.paidDate='';
  saveDB(); renderAll(); toast('Payment unmarked');
}
function updatePaidDate(qid,pmid,date){
  const p=proj(); if(!p) return;
  const q=(p.quotes||[]).find(x=>x.id===qid); if(!q) return;
  const pm=(q.payMilestones||[]).find(x=>x.id===pmid); if(!pm) return;
  pm.paidDate=date; saveDB(); toast('📅 Date updated');
}
function delPayMs(qid,pmid){
  const p=proj(); if(!p||!confirm('Delete this payment milestone?')) return;
  const q=(p.quotes||[]).find(x=>x.id===qid); if(!q) return;
  q.payMilestones=(q.payMilestones||[]).filter(x=>x.id!==pmid);
  saveDB(); renderAll(); toast('🗑 Deleted');
}

// ── COMPLIANCE ──
function renderCompliance(){
  const t24=[
    {l:'Envelope / Insulation',p:90,s:'Verified',   c:'var(--green-m)'},
    {l:'HVAC Efficiency',      p:75,s:'In Progress', c:'var(--amber-m)'},
    {l:'Lighting (Indoor)',    p:85,s:'In Progress', c:'var(--amber-m)'},
    {l:'Solar Ready (PV)',     p:100,s:'Compliant',  c:'var(--green-m)'},
    {l:'HERS Verification',    p:30,s:'Pending',     c:'var(--gray)'},
  ];
  const cg=[
    {l:'Water Efficiency §4.303',  p:100,s:'Compliant',   c:'var(--green-m)'},
    {l:'Constr. Waste §4.408',     p:65, s:'65% Diverted', c:'var(--amber-m)'},
    {l:'VOC Limits §4.504',        p:100,s:'Verified',     c:'var(--green-m)'},
    {l:'EV Charging §4.106.4',     p:50, s:'Roughed-in',   c:'var(--amber-m)'},
    {l:'Stormwater §4.106.3',      p:80, s:'In Review',    c:'var(--amber-m)'},
  ];
  const rc=items=>items.map(r=>`<div class="comp-row"><span class="comp-lbl">${r.l}</span><div class="comp-bar"><div class="comp-fill" style="width:${r.p}%;background:${r.c}"></div></div><span class="comp-st" style="color:${r.c}">${r.s}</span></div>`).join('');
  vEl('t24-list').innerHTML=rc(t24);
  vEl('cg-list').innerHTML=rc(cg);
}

// ── EXPORT ──
function renderExport(){
  const p=proj(); if(!p) return;
  const allFiles=[];
  (p.quotes||[]).forEach(q=>{
    (q.files||[]).forEach(f=>allFiles.push({...f,src:'Quote: '+q.vendor}));
    (q.payMilestones||[]).forEach(pm=>{
      (pm.files||[]).forEach(f=>allFiles.push({...f,src:'Payment Proof: '+pm.name}));
      (pm.lienFiles||[]).forEach(f=>allFiles.push({...f,src:'Lien Waiver: '+pm.name}));
    });
  });
  (p.plans||[]).forEach(pl=>allFiles.push({...pl,src:'Plans & Docs'}));
  (p.inspections||[]).forEach(i=>(i.files||[]).forEach(f=>allFiles.push({...f,src:'Inspection: '+i.name})));
  (p.milestones||[]).forEach(m=>(m.payFiles||[]).forEach(f=>allFiles.push({...f,src:'Milestone: '+m.name})));
  allFiles.forEach(f=>{if(f.data)FA[f.id]=f;});
  const fl=vEl('exp-files');
  if(!allFiles.length){fl.innerHTML=`<div class="empty"><div class="empty-ic">📂</div>No files attached to this project yet.</div>`;return;}
  fl.innerHTML=`<div class="attach-list">${allFiles.map(f=>`<div class="a-item"><span class="a-icon">${fileIcon(f.name)}</span><div style="flex:1;min-width:0"><div class="a-name">${f.name}</div><div style="font-size:10px;color:var(--muted)">${f.src} · ${fmtBytes(f.size||0)}</div></div><button class="a-dl" onclick="dlFile('${f.id}')">⬇ Download</button></div>`).join('')}</div>`;
}

// ══════════════════════════════════════════════════════════════════
//  MODAL SYSTEM
// ══════════════════════════════════════════════════════════════════
let mMode=null, mId=null, mPending=[], uploadInFlight=0;

function openModal(type, id=null){
  mMode=type; mId=id; mPending=[];
  const p=proj();
  const titles={project:'Project',work:'Work Item',milestone:'Milestone',quote:'Quote',plan:'Upload Document',inspection:'Inspection',qfiles:'Attach Files',insfiles:'Attach Reports',paymilestone:'Payment Milestone',payproof:'Proof of Payment',payinvoice:'Invoice',lienwvr:'Lien Waiver',msprogpay:'Progress Payment',msppfiles:'Proof of Payment',markpp:'Mark as Received',invoice:'Invoice',invfiles:'Invoice Files',invproof:'Proof of Payment',ppfiles:'Payment Supporting Files',vendor:'Vendor Contract',venfiles:'Contract Files','chklist-cat':'Manage Categories','chklist-item':'Checklist Item','qaqc-item':'QA/QC Entry',qafiles:'QA/QC Files'};
  vEl('modal-title').textContent=(id&&!id.includes('|')?'Edit ':'Add ')+titles[type];
  let html='';

  if(type==='project'){
    const o=id?DB.projects.find(x=>x.id===id):{};
    const stOpts=['CA','AZ','NV','OR','WA','TX','FL','NY','Other'].map(s=>`<option value="${s}"${(o.state||'CA')===s?' selected':''}>${s}</option>`).join('');
    const tyOpts=['R-3 Single-Family Residential','R-2 Multi-Family Residential','B Office / Mixed-Use','A Assembly','E Educational','F Factory / Industrial','I Institutional','M Mercantile','S Storage','U Utility'].map(t=>`<option value="${t}"${(o.type||'')===t?' selected':''}>${t}</option>`).join('');
    html=`
      <div class="fr"><label class="fl">Project Name *</label><input class="fi" id="f-name" value="${o.name||''}" placeholder="e.g. 1510 Madera Drive"/></div>
      <div class="fr"><label class="fl">Street Address</label><input class="fi" id="f-street" value="${o.street||o.address||''}" placeholder="e.g. 1510 Madera Drive" oninput="cityLookup()"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">City <span id="city-ok" style="font-size:9px;color:var(--green);font-weight:700;margin-left:4px"></span></label><input class="fi" id="f-city" value="${o.city||''}" placeholder="e.g. Cupertino" oninput="cityLookup()"/></div>
        <div class="fr"><label class="fl">State</label><select class="fs" id="f-state" onchange="cityLookup()">${stOpts}</select></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">County <span id="county-ok" style="font-size:9px;color:var(--green);font-weight:700;margin-left:4px"></span></label><input class="fi" id="f-county" value="${o.county||''}" placeholder="e.g. Santa Clara County"/></div>
        <div class="fr"><label class="fl">ZIP Code</label><input class="fi" id="f-zip" value="${o.zip||''}" placeholder="e.g. 95014" maxlength="5" oninput="cityLookup()"/></div>
      </div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Permit Number</label>
          <input class="fi" id="f-permit" value="${o.permit||''}" placeholder="e.g. CUPR-2025-00891"/>
        </div>
        <div class="fr"><label class="fl">APN</label><input class="fi" id="f-apn" value="${o.apn||''}" placeholder="e.g. 326-10-044"/></div>
      </div>
      <div class="fr"><label class="fl">Occupancy / Type</label><select class="fs" id="f-type">${tyOpts}</select></div>
      <div class="fr"><label class="fl">Project Color</label><div class="color-row">${COLORS.map(c=>`<div class="cswatch${(o.color||COLORS[0])===c?' sel':''}" style="background:${c}" onclick="pickColor('${c}',this)" data-color="${c}"></div>`).join('')}</div></div>
      <div style="margin:10px 0 6px;border-top:1px solid var(--border);padding-top:10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted)">👤 Client / Owner Information</div>
      <div class="fr"><label class="fl">Client / Owner Name</label><input class="fi" id="f-client" value="${o.client||''}" placeholder="e.g. John Doe / ABC Corp"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Client Phone</label><input class="fi" id="f-clientPhone" value="${o.clientPhone||''}" placeholder="+1 555 000 1234"/></div>
        <div class="fr"><label class="fl">Client Email</label><input class="fi" id="f-clientEmail" value="${o.clientEmail||''}" placeholder="client@example.com"/></div>
      </div>
      <div class="fr"><label class="fl">Client Address</label><input class="fi" id="f-clientAddr" value="${o.clientAddr||''}" placeholder="123 Main St, City, State"/></div>`;
    setTimeout(()=>{cityLookup();},50);

  } else if(type==='work'){
    const o=id?((p&&p.works)||[]).find(x=>x.id===id):{};
    html=`
      <div class="fr"><label class="fl">Work Name *</label><input class="fi" id="f-name" value="${o.name||''}" placeholder="e.g. Concrete Foundation Walls"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">CBC Reference</label><input class="fi" id="f-ref" value="${o.ref||''}" placeholder="e.g. CBC §1901"/></div>
        <div class="fr"><label class="fl">Contractor</label><input class="fi" id="f-contractor" value="${o.contractor||''}" placeholder="Contractor name"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-status">${[['active','Active'],['inprogress','In Progress'],['starting','Starting'],['hold','On Hold'],['caloshahold','CalOSHA Hold'],['complete','Complete']].map(([v,l])=>`<option value="${v}"${o.status===v?' selected':''}>${l}</option>`).join('')}</select></div>
        <div class="fr"><label class="fl">Progress %</label><input class="fi" id="f-pct" type="number" min="0" max="100" value="${o.pct??0}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${o.notes||''}</textarea></div>`;

  } else if(type==='milestone'){
    const o=id?((p&&p.milestones)||[]).find(x=>x.id===id):{};
    html=`
      <div class="fr"><label class="fl">Milestone Name *</label><input class="fi" id="f-name" value="${o.name||''}" placeholder="e.g. Footing Inspection Passed"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">CBC Reference</label><input class="fi" id="f-ref" value="${o.ref||''}" placeholder="e.g. CBC §110.3.1"/></div>
        <div class="fr"><label class="fl">Target Date</label><input class="fi" id="f-date" type="date" value="${o.date||''}"/></div>
      </div>
      <div class="fr"><label class="fl">Status</label><select class="fs" id="f-status">${[['upcoming','Upcoming'],['inprogress','In Progress'],['done','Done / Achieved']].map(([v,l])=>`<option value="${v}"${o.status===v?' selected':''}>${l}</option>`).join('')}</select></div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${o.notes||''}</textarea></div>
      <div class="divider"></div>
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin-bottom:10px">💳 Payment</div>
      <div class="fg">
        <div class="fr"><label class="fl">Payment Amount ($)</label><input class="fi" id="f-payamt" type="number" value="${o.payAmt||''}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Payment Date</label><input class="fi" id="f-paydate" type="date" value="${o.payDate||''}"/></div>
      </div>`;

  } else if(type==='quote'){
    const o=id?((p&&p.quotes)||[]).find(x=>x.id===id):{};
    if(o.files) mPending=[...o.files], regFiles(mPending);

    const csiOpts=['Div 01 — General Requirements','Div 02 — Existing Conditions','Div 03 — Concrete','Div 04 — Masonry','Div 05 — Metals / Structural Steel','Div 06 — Wood & Plastics','Div 07 — Thermal & Moisture Protection','Div 08 — Openings / Doors & Windows','Div 09 — Finishes','Div 10 — Specialties','Div 11 — Equipment','Div 12 — Furnishings','Div 13 — Special Construction','Div 14 — Conveying Equipment','Div 21 — Fire Suppression','Div 22 — Plumbing','Div 23 — HVAC','Div 25 — Integrated Automation','Div 26 — Electrical','Div 27 — Communications','Div 28 — Electronic Safety','Div 31 — Earthwork','Div 32 — Exterior Improvements','Div 33 — Utilities','Div 48 — Electrical Power Generation'].map(d=>`<option value="${d}"${(o.csi||'')=== d?' selected':''}>${d}</option>`).join('');

    const refOpts=['CBC 2022','CPC 2022','CMC 2022','CEC 2022','CALGreen 2022','Title 24 Part 6','CFC 2022','NFPA 13','NFPA 72','NFPA 101','AISC 341','ACI 318','ASCE 7-22','CalOSHA Title 8','Other'].map(r=>`<option value="${r}"${(o.ref||'')=== r?' selected':''}>${r}</option>`).join('');

    const statusCfg=[['new','New'],['review','Under Review'],['approved','Approved'],['negotiating','Negotiating']];

    html=`
      <div class="fr"><label class="fl">Vendor / Subcontractor Name *</label><input class="fi" id="f-vendor" value="${o.vendor||''}" placeholder="e.g. Pacific Coast HVAC Inc."/></div>
      <div class="fr"><label class="fl">Scope of Work</label><input class="fi" id="f-scope" value="${o.scope||''}" placeholder="e.g. Central mechanical system — all floors"/></div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Code Reference</label>
          <select class="fs" id="f-ref" onchange="if(this.value==='Other')this.style.display='none',document.getElementById('f-ref-custom').style.display=''">
            <option value="">-- Select Code --</option>
            ${refOpts}
          </select>
          <input class="fi" id="f-ref-custom" placeholder="Enter code reference…" value="${!['CBC 2022','CPC 2022','CMC 2022','CEC 2022','CALGreen 2022','Title 24 Part 6','CFC 2022','NFPA 13','NFPA 72','NFPA 101','AISC 341','ACI 318','ASCE 7-22','CalOSHA Title 8','Other',''].includes(o.ref||'')?o.ref:''}" style="display:${ !['CBC 2022','CPC 2022','CMC 2022','CEC 2022','CALGreen 2022','Title 24 Part 6','CFC 2022','NFPA 13','NFPA 72','NFPA 101','AISC 341','ACI 318','ASCE 7-22','CalOSHA Title 8','Other',''].includes(o.ref||'')?'block':'none'};margin-top:5px"/>
        </div>
        <div class="fr">
          <label class="fl">CSI Division</label>
          <select class="fs" id="f-csi">
            <option value="">-- Select CSI Division --</option>
            ${csiOpts}
          </select>
        </div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-amount" type="number" value="${o.amount||''}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Date Received</label><input class="fi" id="f-date" type="date" value="${o.date||''}"/></div>
      </div>
      <div class="fr">
        <label class="fl">Status</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">
          ${statusCfg.map(([v,l])=>`
            <label style="display:flex;align-items:center;gap:7px;padding:8px 14px;border:2px solid ${o.status===v?'var(--blue-m)':'var(--border)'};border-radius:8px;cursor:pointer;background:${o.status===v?'var(--blue-l)':'#fff'};font-size:13px;font-weight:500;flex:1;min-width:100px;transition:.13s" onclick="selectQuoteStatus('${v}',this)">
              <input type="radio" name="q-status" value="${v}" ${o.status===v?'checked':''} style="width:15px;height:15px;accent-color:var(--blue-m)"/>
              ${l}
            </label>`).join('')}
        </div>
        <input type="hidden" id="f-status" value="${o.status||'new'}"/>
      </div>`;

  } else if(type==='plan'){
    html=`
      <div class="fr"><label class="fl">Document Type</label><select class="fs" id="f-plan-type">${['Architectural Plans','Structural Plans','Electrical Plans','Plumbing Plans','Mechanical Plans','Site Plan','Permit','Geotechnical Report','Soils Report','Title 24 Compliance','CALGreen Checklist','Inspection Report','Contract','Other'].map(t=>`<option>${t}</option>`).join('')}</select></div>
      ${dropZoneHTML('plan-files','Drop plans, drawings, PDFs, DWG, or any document here…')}
      <div style="font-size:10px;color:var(--muted);margin-top:6px;padding:0 2px">
        Max file size: 500MB per file &nbsp;·&nbsp; Files upload to your backend and sync with the project across browsers
      </div>`;

  } else if(type==='inspection'){
    const o=id?((p&&p.inspections)||[]).find(x=>x.id===id):{};
    const timeOpts=(()=>{let r='<option value="">-- Select Time --</option>';for(let h=6;h<=19;h++)for(let m=0;m<60;m+=30){const v=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0'),ampm=h>=12?'PM':'AM',hr=(h%12)||12;r+=`<option value="${v}"${o.inspTime===v?' selected':''}>${hr}:${String(m).padStart(2,'0')} ${ampm}</option>`;}return r;})();
    html=`
      <div class="fr"><label class="fl">Inspection Name *</label><input class="fi" id="f-name" value="${o.name||''}" placeholder="e.g. Concrete Pour — Level 2 Slab"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Inspection Date *</label><input class="fi" id="f-inspdate" type="date" value="${o.inspDate||''}"/></div>
        <div class="fr"><label class="fl">Inspection Time *</label><select class="fs" id="f-insptime">${timeOpts}</select></div>
      </div>
      <div class="fr"><label class="fl">Location / Inspector</label><input class="fi" id="f-location" value="${o.location||''}" placeholder="e.g. 1510 Madera Dr · Cupertino Inspector"/></div>
      <div class="fr"><label class="fl">Code References</label><input class="fi" id="f-refs" value="${o.refs||''}" placeholder="e.g. CBC §110.3.2 · CEC 2022"/></div>
      <div class="fr"><label class="fl">AHJ</label><select class="fs" id="f-ahj">${[['cupertino','City of Cupertino'],['calosha','CalOSHA'],['icc','ICC-Certified Inspector']].map(([v,l])=>`<option value="${v}"${o.ahj===v?' selected':''}>${l}</option>`).join('')}</select></div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-notes">${o.notes||''}</textarea></div>`;

  } else if(type==='qfiles'){
    const q=(p&&p.quotes||[]).find(x=>x.id===id);
    if(!q){closeModal();return;}
    mPending=[...(q.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Attach Files — '+q.vendor;
    html=`${dropZoneHTML('qfiles','Drop quote files, PDFs, drawings…')}${attachListHTML()}`;

  } else if(type==='insfiles'){
    const ins=(p&&p.inspections||[]).find(x=>x.id===id);
    if(!ins){closeModal();return;}
    mPending=[...(ins.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Attach Reports — '+ins.name;
    html=`${dropZoneHTML('insfiles','Drop inspection reports, photos, PDFs…')}${attachListHTML()}`;

  } else if(type==='paymilestone'){
    const parts=(id||'').split('|');
    const qid=parts[0],pmid=parts[1]||'';
    const q=(p&&p.quotes||[]).find(x=>x.id===qid);
    if(!q){closeModal();return;}
    q.payMilestones=q.payMilestones||[];
    const o=pmid?q.payMilestones.find(x=>x.id===pmid):{};
    vEl('modal-title').textContent=(pmid?'Edit':'Add')+' Payment Milestone';
    html=`
      <div style="background:var(--navy);border-radius:7px;padding:10px 13px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:12px;font-weight:700;color:#fff">${q.vendor}</div><div style="font-size:10px;color:#8AAAC8">${q.scope}</div></div>
        <div style="text-align:right"><div style="font-size:10px;color:#8AAAC8">Quote Total</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:#fff">${fmtMoney(q.amount)}</div></div>
      </div>
      <div class="fr"><label class="fl">Milestone Name *</label><input class="fi" id="f-pmname" value="${(o&&o.name)||''}" placeholder="e.g. 30% Progress Payment"/></div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-pmamt" type="number" value="${(o&&o.amount)||''}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-pmdue" type="date" value="${(o&&o.dueDate)||''}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-pmnotes" style="min-height:50px">${(o&&o.notes)||''}</textarea></div>`;

  } else if(type==='payproof'){
    const parts=(id||'').split('|');
    const q=(p&&p.quotes||[]).find(x=>x.id===parts[0]);
    const pm=q?(q.payMilestones||[]).find(x=>x.id===parts[1]):null;
    if(!pm){closeModal();return;}
    mPending=[...(pm.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Proof of Payment — '+pm.name;
    html=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:11px 13px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:13px;font-weight:600">${pm.name}</div><div style="font-size:11px;color:var(--muted)">${q.vendor}</div></div>
        <div style="text-align:right"><div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700">${fmtMoney(pm.amount||0)}</div>${pm.paid?`<span class="badge b-green">✓ Paid ${pm.paidDate?'· '+fmtDate(pm.paidDate):''}</span>`:`<span class="badge b-gray">Unpaid</span>`}</div>
      </div>
      ${dropZoneHTML('payproof','Drop receipts, bank slips, payment confirmations…')}${attachListHTML()}`;

  } else if(type==='msprogpay'){
    // Add/Edit a progress payment on a milestone
    const parts=(id||'').split('|'); const mid=parts[0],ppid=parts[1]||'';
    const ms=(p&&p.milestones||[]).find(x=>x.id===mid);
    if(!ms){closeModal();return;}
    ms.progressPayments=ms.progressPayments||[];
    const o=ppid?ms.progressPayments.find(x=>x.id===ppid):{};
    vEl('modal-title').textContent=(ppid?'Edit':'Add')+' Progress Payment — '+ms.name;
    const payOpts=['10% Mobilization','20% Foundation Complete','30% Progress Payment','40% Progress Payment','50% Progress Payment','60% Progress Payment','Final Payment','Retention Release','Other'].map(v=>`<option value="${v}"${(o&&o.name)===v?' selected':''}>${v}</option>`).join('');
    html=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 13px;margin-bottom:13px;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:13px;font-weight:600">${ms.name}</div>
        ${ms.payAmt?`<div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy)">Contract: ${fmtMoney(ms.payAmt)}</div>`:''}
      </div>
      <div class="fr">
        <label class="fl">Payment Name / Type</label>
        <select class="fs" id="f-ppname" onchange="if(this.value!='Other'){}">
          <option value="">-- Select Payment Type --</option>
          ${payOpts}
        </select>
        <input class="fi" id="f-ppname-custom" placeholder="Or type custom name…" style="margin-top:6px;display:none"/>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Amount ($) *</label><input class="fi" id="f-ppamt" type="number" value="${(o&&o.amount)||''}" placeholder="0"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-ppdue" type="date" value="${(o&&o.dueDate)||''}"/></div>
      </div>
      <div class="fr"><label class="fl">Notes</label><textarea class="ft" id="f-ppnotes" style="min-height:44px">${(o&&o.notes)||''}</textarea></div>`;
    // store mId for save
    mId=id.includes('|')?id:mid+'|';
    document.getElementById('f-ppname')?.addEventListener('change',function(){ 
      const c=document.getElementById('f-ppname-custom');
      if(c)c.style.display=this.value==='Other'?'block':'none';
    });

  } else if(type==='msppfiles'){
    // Attach proof files to a milestone progress payment
    const parts=(id||'').split('|'); const mid=parts[0],ppid=parts[1];
    const ms=(p&&p.milestones||[]).find(x=>x.id===mid);
    if(!ms){closeModal();return;}
    ms.progressPayments=ms.progressPayments||[];
    const pp=ms.progressPayments.find(x=>x.id===ppid);
    if(!pp){closeModal();return;}
    mPending=[...(pp.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Proof of Payment — '+pp.name;
    html=`
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 13px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><div style="font-size:13px;font-weight:600">${pp.name}</div><div style="font-size:11px;color:var(--muted)">${ms.name}</div></div>
          <div style="text-align:right">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700">${fmtMoney(pp.amount||0)}</div>
            ${pp.paid?`<span class="badge b-green">✓ Received ${pp.receivedDate?'· '+fmtDate(pp.receivedDate):''}</span>`:`<span class="badge b-gray">Not yet received</span>`}
          </div>
        </div>
      </div>
      ${dropZoneHTML('msppfiles','Drop receipts, bank transfer slips, cheques, payment confirmations…')}${attachListHTML()}`;

  } else if(type==='markpp'){
    // Quick mark-received panel with date picker
    const parts=(id||'').split('|'); const mid=parts[0],ppid=parts[1];
    const ms=(p&&p.milestones||[]).find(x=>x.id===mid);
    if(!ms){closeModal();return;}
    const pp=(ms.progressPayments||[]).find(x=>x.id===ppid);
    if(!pp){closeModal();return;}
    vEl('modal-title').textContent='Mark as Received — '+pp.name;
    html=`
      <div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:12px 14px;margin-bottom:14px">
        <div style="font-size:14px;font-weight:700;color:var(--green)">${pp.name}</div>
        <div style="font-size:13px;color:var(--text);margin-top:2px">${ms.name} · <strong>${fmtMoney(pp.amount||0)}</strong></div>
      </div>
      <div class="fr"><label class="fl">Date Money Received *</label><input class="fi" id="f-pprecdate" type="date" value="${pp.receivedDate||localDateStr()}"/></div>
      <div class="fr"><label class="fl">Notes (optional)</label><textarea class="ft" id="f-pprechnotes" style="min-height:44px">${pp.notes||''}</textarea></div>`;

  } else if(type==='payinvoice'){
    const ipts=(id||'').split('|');
    const iq=(p&&p.quotes||[]).find(x=>x.id===ipts[0]);
    const ipm=iq?(iq.payMilestones||[]).find(x=>x.id===ipts[1]):null;
    if(!ipm){closeModal();return;}
    mPending=[...(ipm.invoiceFiles||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Invoice — '+ipm.name;
    html=`
      <div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:8px;padding:12px 13px;margin-bottom:13px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div><div style="font-size:12px;font-weight:700;color:var(--amber)">🧾 Invoice</div><div style="font-size:10px;color:var(--amber);opacity:.8">${ipm.name} — ${iq.vendor}</div></div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--amber)">${fmtMoney(ipm.amount||0)}</div>
        </div>
        <div style="font-size:10px;color:var(--amber);border-top:1px solid rgba(168,98,0,.2);padding-top:6px"><strong>Tip:</strong> Upload the contractor invoice, billing statement, or draw request for this payment.</div>
      </div>
      ${dropZoneHTML('payinvoice','Drop invoice PDF, billing statement, or draw request…')}${attachListHTML()}`;

  } else if(type==='lienwvr'){
    const parts=(id||'').split('|');
    const q=(p&&p.quotes||[]).find(x=>x.id===parts[0]);
    const pm=q?(q.payMilestones||[]).find(x=>x.id===parts[1]):null;
    if(!pm){closeModal();return;}
    mPending=[...(pm.lienFiles||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Lien Waiver — '+pm.name;
    html=`
      <div style="background:var(--teal-l);border:1px solid #9FE0CB;border-radius:8px;padding:12px 13px;margin-bottom:13px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
          <div><div style="font-size:12px;font-weight:700;color:var(--teal)">🔏 Lien Waiver</div><div style="font-size:10px;color:var(--teal);opacity:.8">${pm.name} — ${q.vendor}</div></div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--teal)">${fmtMoney(pm.amount||0)}</div>
        </div>
        <div style="font-size:10px;color:var(--teal);border-top:1px solid rgba(13,110,88,.2);padding-top:7px"><strong>Tip:</strong> Upload the signed conditional or unconditional lien waiver from the contractor or subcontractor.</div>
      </div>
      ${dropZoneHTML('lienwvr','Drop lien waiver PDF, scan, or image…')}${attachListHTML()}`;
  }

  if(type==='invoice'){
    const p2=proj();
    const o=id?(p2&&p2.invoices||[]).find(x=>x.id===id):{};
    const approved2=(p2&&p2.quotes||[]).filter(q=>q.status==='approved');
    const allVendors=(p2&&p2.vendors||[]);
    // Build vendor options: approved quotes + standalone vendor contracts + manual
    const vendorOpts=approved2.map(q=>`<option value="${q.id}" data-name="${q.vendor}" ${(o.quoteId||'')=== q.id?' selected':''}>${q.vendor} — Contract (${fmtMoney(q.amount)})</option>`).join('');
    // Vendor contracts not linked to quotes
    const standaloneVCs=allVendors.filter(v=>!approved2.find(q=>q.id===v.quoteId));
    const vcOpts=standaloneVCs.map(v=>`<option value="vc_${v.id}" data-name="${v.vendor}" ${o.vcId===v.id?' selected':''}>${v.vendor} — Contract (${fmtMoney(v.amount)})</option>`).join('');
    // Get milestones for selected vendor
    const selVendorContract=(p2&&p2.vendors||[]).find(v=>v.quoteId===o.quoteId||(o.vcId&&v.id===o.vcId));
    const vMilestones=selVendorContract?selVendorContract.milestones||[]:[];
    const msOpts=vMilestones.map(ms=>`<option value="${ms.id}" ${o.milestoneId===ms.id?'selected':''}>${ms.name} — $${Number(ms.amount||0).toLocaleString()}</option>`).join('');
    vEl('modal-title').textContent=(id?'Edit':'Add')+' Invoice';
    html=`
      <!-- Source toggle -->
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <button type="button" id="inv-src-contract" onclick="invSwitchSource('contract')"
          style="flex:1;padding:8px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;border:2px solid var(--navy);background:var(--navy);color:#fff">
          📋 From Contract
        </button>
        <button type="button" id="inv-src-manual" onclick="invSwitchSource('manual')"
          style="flex:1;padding:8px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;border:2px solid var(--border);background:#fff;color:var(--muted)">
          ✏ Manual / No Contract
        </button>
      </div>

      <!-- From Contract section -->
      <div id="inv-contract-section">
        <div class="fr">
          <label class="fl">Subcontractor / Vendor</label>
          <select class="fs" id="f-inv-vendor" onchange="invUpdateMilestones(this.value)">
            <option value="">-- Select from contracts --</option>
            ${vendorOpts}
            ${vcOpts}
            <option value="__other__">Other / Manual Name</option>
          </select>
          <input class="fi" id="f-inv-vname" placeholder="Or type vendor name" value="${approved2.find(q=>q.id===o.quoteId)?'':o.vendor||''}" style="margin-top:5px"/>
        </div>
        <div class="fr">
          <label class="fl">Against Milestone <span style="font-size:9px;color:var(--muted)">(from Vendor Contract)</span></label>
          <select class="fs" id="f-inv-milestone" onchange="invMilestoneSelected(this.value,document.getElementById('f-inv-vendor')?.value||'')">
            <option value="">-- Select milestone (optional) --</option>
            ${msOpts}
          </select>
          <div id="f-inv-ms-info" style="margin-top:5px;font-size:10px;color:var(--blue);display:none"></div>
        </div>
      </div>

      <!-- Manual / No Contract section -->
      <div id="inv-manual-section" style="display:none">
        <div class="fr"><label class="fl">Vendor / Company Name *</label>
          <select class="fs" id="f-inv-manual-vendor" onchange="invManualVendorChange(this)">
            <option value="">— Select vendor from directory —</option>
            ${[...new Set((p.vendors||[]).map(v=>v.vendor).filter(Boolean))].sort().map(name=>`<option value="${name}"${(o.vendor||'')==name?' selected':''}>${name}</option>`).join('')}
            <option value="__other__"${!(p.vendors||[]).some(v=>v.vendor===o.vendor)&&o.vendor?' selected':''}>✏ Other / Type manually…</option>
          </select>
        </div>
        <div class="fr" id="f-inv-manual-vendor-other-row" style="display:${!(p.vendors||[]).some(v=>v.vendor===(o.vendor||''))&&o.vendor?'':'none'}">
          <label class="fl">Custom Vendor Name *</label>
          <input class="fi" id="f-inv-manual-vendor-other" value="${!(p.vendors||[]).some(v=>v.vendor===(o.vendor||''))&&o.vendor?o.vendor:''}" placeholder="Type vendor / company name…"/>
        </div>
        <div class="fr"><label class="fl">Work / Service Description</label>
          <input class="fi" id="f-inv-manual-scope" value="${o.manualScope||''}" placeholder="e.g. Rough-in plumbing, Electrical fixtures…"/>
        </div>
      </div>

      <div class="fg" style="margin-top:6px">
        <div class="fr"><label class="fl">Invoice Number *</label><input class="fi" id="f-inv-no" value="${o.invoiceNo||''}" placeholder="e.g. INV-2026-001"/></div>
        <div class="fr"><label class="fl">Invoice Amount ($) *</label><input class="fi" id="f-inv-amt" type="number" value="${o.amount||''}" placeholder="0"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Invoice Date</label><input class="fi" id="f-inv-date" type="date" value="${o.invoiceDate||localDateStr()}"/></div>
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-inv-due" type="date" value="${o.dueDate||''}"/></div>
      </div>
      <div class="fr"><label class="fl">Description / Notes</label>
        <textarea class="ft" id="f-inv-desc" style="min-height:50px" placeholder="Describe work completed for this invoice…">${o.description||''}</textarea>
      </div>`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    // Set initial state
    if(o.isManual) invSwitchSource('manual'); else invSwitchSource('contract');
    // Initialize milestone dropdown from current vendor selection
    setTimeout(()=>{
      const vendEl=vEl('f-inv-vendor');
      if(vendEl&&vendEl.value) invUpdateMilestones(vendEl.value);
    },0);
    return;
  }

  if(type==='ppfiles'){
    const parts=(id||'').split('|');
    const p2=proj();
    const inv=(p2&&p2.invoices||[]).find(x=>x.id===parts[0]);
    const pp=inv?(inv.partialPayments||[]).find(x=>x.id===parts[1]):null;
    if(!pp){closeModal();return;}
    mPending=[...(pp.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Supporting Files — Txn '+(pp.txnNo||pp.id.slice(0,8));
    html=`
      <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:7px;padding:10px 12px;margin-bottom:12px">
        <div style="font-size:12px;font-weight:700;color:var(--blue)">📎 Payment Evidence</div>
        <div style="display:flex;gap:12px;margin-top:6px;font-size:10px;color:var(--text)">
          <span>Amount: <strong>$${Number(pp.amount||0).toLocaleString()}</strong></span>
          <span>Date: <strong>${fmtDate(pp.date)}</strong></span>
          ${pp.txnNo?`<span>Txn: <strong style="color:var(--blue)">${pp.txnNo}</strong></span>`:''}
        </div>
      </div>
      <div class="fr"><label class="fl">Transaction / Reference # (if not set)</label>
        <input class="fi" id="f-pp-txn" value="${pp.txnNo||''}" placeholder="e.g. WIRE-2026-001, TXN#123456…"/>
      </div>
      ${dropZoneHTML('ppfiles','Drop bank receipt, wire confirmation, cheque scan, or payment advice…')}${attachListHTML()}`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mId=id; mMode='ppfiles';
    return;
  }

  if(type==='invproof'){
    const p2=proj();
    const inv=(p2&&p2.invoices||[]).find(x=>x.id===id);
    if(!inv){closeModal();return;}
    mPending=[...(inv.proofFiles||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Proof of Payment — '+(inv.invoiceNo||inv.vendor||'Invoice');
    html=`
      <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:8px;padding:11px 13px;margin-bottom:13px">
        <div style="font-size:12px;font-weight:700;color:var(--blue)">📎 Proof of Payment</div>
        <div style="font-size:10px;color:var(--blue);margin-top:3px">Attach bank receipt, transfer confirmation, cheque scan, or payment advice for invoice ${inv.invoiceNo||''}.</div>
      </div>
      ${dropZoneHTML('invproof','Drop bank receipt, transfer confirmation, or payment advice…')}${attachListHTML()}`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mId=id; mMode='invproof';
    return;
  }

  if(type==='invlien'){
    const p2=proj();
    const inv=(p2&&p2.invoices||[]).find(x=>x.id===id);
    if(!inv){closeModal();return;}
    mPending=[...(inv.lienFiles||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Lien Waiver — '+(inv.invoiceNo||inv.vendor||'Invoice');
    html=`
      <div style="background:var(--teal-l);border:1px solid #9FE0CB;border-radius:8px;padding:11px 13px;margin-bottom:13px">
        <div style="font-size:12px;font-weight:700;color:var(--teal)">🔏 Lien Waiver</div>
        <div style="font-size:10px;color:var(--teal);margin-top:3px">Attach conditional or unconditional lien waiver for invoice ${inv.invoiceNo||''}.</div>
      </div>
      ${dropZoneHTML('invlien','Drop lien waiver PDF or scan…')}${attachListHTML()}`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mId=id; mMode='invlien';
    return;
  }

  if(type==='invfiles'){
    const p2=proj();
    const inv=(p2&&p2.invoices||[]).find(x=>x.id===id);
    if(!inv){closeModal();return;}
    mPending=[...(inv.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Invoice Files — '+(inv.invoiceNo||inv.vendor||'Invoice');
    html=`${dropZoneHTML('invfiles','Drop invoice PDFs, scans, or documents…')}${attachListHTML()}`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mId=id; mMode='invfiles';
    return;
  }

  if(type==='vendor'){
    const p2=proj();
    const o=id?(p2&&p2.vendors||[]).find(x=>x.id===id):{};
    const approved2=(p2&&p2.quotes||[]).filter(q=>q.status==='approved');
    const contractTypes=['Lump Sum','Unit Price','Cost Plus','GMP','Time & Materials','Design-Build','Other'];
    const statuses=[['draft','Draft'],['signed','Signed'],['active','Active'],['on-hold','On Hold'],['expired','Expired'],['terminated','Terminated']];
    // Pull vendor list from directory
    const vdirList=getVDirList();
    const vdirOpts=vdirList.map(v=>`<option value="${v.id}" data-email="${v.email||''}" data-company="${v.company||v.name}" ${o.vdirId===v.id?'selected':''}>${v.company||v.name}${v.name&&v.company?' ('+v.name+')':''}</option>`).join('');
    _venMilestones=[...(o.milestones||[]).map(ms=>({...ms}))];
    const msHTML=_venMilestones.map((ms,i)=>`<div id="venms_${i}" style="display:flex;gap:6px;align-items:flex-end;margin-bottom:8px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:8px 10px">
        <div style="flex:2;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Milestone Name</label><input class="fi" style="font-size:11px;padding:4px 7px" value="${ms.name||''}" oninput="venMsChange(${i},'name',this.value)" placeholder="e.g. Mobilization"/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Amount ($)</label><input class="fi" style="font-size:11px;padding:4px 7px" type="number" value="${ms.amount||''}" oninput="venMsChange(${i},'amount',this.value);venUpdateMilestonePct()" placeholder="0"/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">% of Contract</label><input class="fi" style="font-size:11px;padding:4px 7px;background:var(--bg)" id="venms_pct_${i}" value="${o.amount&&ms.amount?Math.round(Number(ms.amount)/Number(o.amount)*100)+'%':'—'}" readonly/></div>
        <div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px">Due Date</label><input class="fi" style="font-size:11px;padding:4px 7px" type="date" value="${ms.dueDate||''}" oninput="venMsChange(${i},'dueDate',this.value)"/></div>
        <button type="button" onclick="venRemoveMilestone(${i})" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px;padding:0 4px;flex-shrink:0;margin-bottom:2px">&#215;</button>
      </div>`).join('');
    vEl('modal-title').textContent=(id?'Edit':'Add')+' Vendor Contract';
    html=`
      <!-- ── Vendor & Contract Info ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">1. Contract Parties</div>
      <div class="fr"><label class="fl">Vendor / Subcontractor * <span style="font-weight:400;text-transform:none;color:var(--blue)">(from Vendor Directory)</span></label>
        ${vdirList.length
          ? `<select class="fs" id="f-ven-vdir" onchange="venDirSelect(this)">
              <option value="">-- Select vendor from directory --</option>
              ${vdirOpts}
            </select>
            ${!vdirList.find(v=>v.id===o.vdirId)?`<div style="margin-top:6px;font-size:10px;color:var(--amber)">⚠ Vendor not linked — <a onclick="nav('vendor-directory')" style="color:var(--blue);cursor:pointer;text-decoration:underline">Add vendors to directory first</a></div>`:''}`
          : `<div style="background:var(--amber-l);border:1px solid #F5D9A0;border-radius:6px;padding:9px 12px;font-size:12px;color:var(--amber)">⚠ No vendors in directory yet. <a onclick="closeModal();nav('vendor-directory')" style="color:var(--blue);cursor:pointer;text-decoration:underline;font-weight:700">Go to Vendor Directory →</a></div>`
        }
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Vendor Email Address</label>
          <input class="fi" id="f-ven-email" type="email" value="${o.vendorEmail||''}" placeholder="Auto-filled from directory"/>
        </div>
        <div class="fr"><label class="fl">Trade / Specialty</label>
          <input class="fi" id="f-ven-trade" value="${o.trade||vdirList.find(v=>v.id===o.vdirId)?.trade||''}" placeholder="Auto-filled from directory"/>
        </div>
      </div>

      <!-- ── Contract Details ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin:14px 0 8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">2. Contract Details</div>
      <div class="fg">
        <div class="fr"><label class="fl">Contract Number</label><input class="fi" id="f-ven-no" value="${o.contractNo||''}" placeholder="e.g. SC-2026-001"/></div>
        <div class="fr"><label class="fl">Contract Value ($)</label><input class="fi" id="f-ven-amt" type="number" value="${o.amount||''}" placeholder="0" oninput="venUpdateMilestonePct()"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Contract Type</label><select class="fs" id="f-ven-type">${contractTypes.map(t=>`<option ${o.contractType===t?'selected':''}>${t}</option>`).join('')}</select></div>
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-ven-status">${statuses.map(([v,l])=>`<option value="${v}" ${o.status===v?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Start Date</label><input class="fi" id="f-ven-start" type="date" value="${o.startDate||''}"/></div>
        <div class="fr"><label class="fl">End Date</label><input class="fi" id="f-ven-end" type="date" value="${o.endDate||''}"/></div>
      </div>

      <!-- ── Scope & Exclusions ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin:14px 0 8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">3. Scope of Work</div>
      <div class="fr"><label class="fl">Scope of Work <span style="font-size:9px;color:var(--muted)">(all work to be performed)</span></label>
        <textarea class="ft" id="f-ven-scope" style="min-height:110px" placeholder="Describe the complete scope of work, deliverables, specifications, and all work included…">${o.scope||''}</textarea>
      </div>
      <div class="fr"><label class="fl">Exclusions <span style="font-size:9px;color:var(--red)">(what is NOT included)</span></label>
        <textarea class="ft" id="f-ven-exclusions" style="min-height:70px;border-color:#F5C0C0;background:#FFF8F8" placeholder="e.g. Permits by Owner, Engineering by others, Temporary power by GC, Clean-up by others…">${o.exclusions||''}</textarea>
      </div>
      <div class="fr"><label class="fl">Special Conditions / Notes</label>
        <textarea class="ft" id="f-ven-notes" style="min-height:44px">${o.notes||''}</textarea>
      </div>

      <!-- ── Payment Milestones ── -->
      <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.6px;margin:14px 0 8px;padding-bottom:4px;border-bottom:2px solid var(--navy)">4. Payment Milestones</div>
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
        <div id="ven-ms-list" style="min-height:10px">${msHTML}</div>
        <button type="button" id="ven-add-ms-btn" onclick="venAddMilestone()" class="btn btn-ghost btn-sm" style="font-size:11px;margin-top:4px">+ Add Milestone</button>
        <div id="ven-ms-total" style="font-size:11px;color:var(--muted);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">${_venMilestones.length?'Total scheduled: $'+_venMilestones.reduce((a,ms)=>a+Number(ms.amount||0),0).toLocaleString():'No milestones added yet — click + Add Milestone above'}</div>
      </div>`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    setTimeout(()=>{
      const addBtn=vEl('ven-add-ms-btn');
      if(addBtn) addBtn.onclick=()=>venAddMilestone();
      const dirSel=vEl('f-ven-vdir');
      if(dirSel) dirSel.onchange=(e)=>venDirSelect(e.target);
      venUpdateMilestonePct();
      venUpdateTotal();
    },0);
    mId=id||null; mMode='vendor';
    return;
  }

  if(type==='venfiles'){
    const p2=proj();
    const v=(p2&&p2.vendors||[]).find(x=>x.id===id);
    if(!v){closeModal();return;}
    mPending=[...(v.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='Contract Files — '+v.vendor;
    html=`${dropZoneHTML('venfiles','Drop signed contract, SOW, amendments, or exhibits…')}${attachListHTML()}`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mId=id; mMode='venfiles';
    return;
  }

  if(type==='chklist-cat'){
    const p2=proj();
    const existing=[...new Set((p2&&p2.checklist||[]).map(i=>i.category).filter(Boolean))];
    vEl('modal-title').textContent='Manage Categories';
    html=`
      <div class="fr">
        <label class="fl">New Category Name *</label>
        <input class="fi" id="f-cat-new" placeholder="e.g. Waterproofing, Roofing, MEP Rough-In…" autofocus/>
      </div>
      ${existing.length?`
      <div style="margin-top:12px">
        <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:8px">Existing Categories</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${existing.map(cat=>`
            <div style="display:flex;align-items:center;gap:0;border:1px solid var(--border);border-radius:6px;overflow:hidden">
              <span style="padding:5px 10px;font-size:11px;font-weight:500;background:var(--bg)">${cat}</span>
              <button onclick="renameChkCat('${cat}')" style="padding:5px 8px;background:none;border:none;border-left:1px solid var(--border);color:var(--blue);cursor:pointer;font-size:11px" title="Rename">✏</button>
            </div>`).join('')}
        </div>
      </div>`:''}
      <div style="margin-top:12px;font-size:10px;color:var(--muted)">💡 You can also type a new category directly in any checklist item form.</div>`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mMode='chklist-cat';
    return;
  }

  if(type==='chklist-item'){
    const p2=proj();
    const o=id?(p2&&p2.checklist||[]).find(x=>x.id===id):{};
    const customCats=(p2&&p2.chkCategories||[]);
    const cats=[...new Set([...(p2&&p2.checklist||[]).map(i=>i.category).filter(Boolean),...customCats,'Pre-Construction','Structural','MEP','Finishes','Closeout','Punch List','Water Supply','Drain Waste Vent','Fuel Gas','Other'])];
    vEl('modal-title').textContent=(id?'Edit':'Add')+' Checklist Item';
    html=`
      <div class="fr"><label class="fl">Item Name *</label><input class="fi" id="f-chk-name" value="${o.name||''}" placeholder="e.g. Footing rebar inspection complete"/></div>
      <div class="fg">
        <div class="fr">
          <label class="fl">Category <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
          <input class="fi" id="f-chk-cat" list="chk-cat-list" value="${o.category||''}" placeholder="e.g. Pre-Construction, MEP, Finishes…"/>
          <datalist id="chk-cat-list">
            ${cats.map(c=>`<option value="${c}"/>`).join('')}
          </datalist>
        </div>
        <div class="fr"><label class="fl">Priority</label><select class="fs" id="f-chk-pri">${[['low','Low'],['medium','Medium'],['high','High']].map(([v,l])=>`<option value="${v}" ${o.priority===v?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-chk-due" type="date" value="${o.dueDate||''}"/></div>
        <div class="fr"><label class="fl">Assignee</label><input class="fi" id="f-chk-who" value="${o.assignee||''}" placeholder="Name or company"/></div>
      </div>
      <div class="fr"><label class="fl">Notes / Specification Reference</label><textarea class="ft" id="f-chk-notes" style="min-height:50px">${o.notes||''}</textarea></div>
      <!-- Comments Section -->
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-top:6px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="font-size:11px;font-weight:700;color:var(--navy)">📝 Field Comments & Photos <span style="font-size:9px;font-weight:400;color:var(--muted)">(${(o.comments||[]).length} entries)</span></div>
          <button type="button" onclick="chkAddCommentRow()" class="btn btn-navy btn-xs" style="font-size:10px">+ Add Comment</button>
        </div>
        <!-- Existing comments (newest first) -->
        <div id="chk-comments-list" style="max-height:300px;overflow-y:auto;margin-bottom:10px">
          ${(o.comments||[]).slice().reverse().map((c,i)=>`
            <div data-cid="${c.id||i}" style="background:#fff;border:1px solid var(--border);border-radius:7px;padding:9px 11px;margin-bottom:7px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
                <div style="display:flex;align-items:center;gap:6px">
                  <span style="width:26px;height:26px;background:var(--navy);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${(c.author||'?').charAt(0).toUpperCase()}</span>
                  <span style="font-size:11px;font-weight:600;color:var(--navy)">${c.author||'Inspector'}</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px">
                  <span style="font-size:10px;color:var(--muted)">${c.date?fmtDate(c.date):''}</span>
                  <button onclick="chkDeleteComment('${id}','${c.id||i}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:13px;padding:0" title="Delete">×</button>
                </div>
              </div>
              <div style="font-size:11px;color:var(--text);line-height:1.5;white-space:pre-wrap">${c.text}</div>
              ${(c.files||[]).length?`
                <div style="display:flex;gap:4px;margin-top:7px;flex-wrap:wrap">
                  ${(c.files||[]).map(f=>`
                    <div style="display:flex;align-items:center;gap:3px;background:var(--blue-l);border:1px solid #B0D0F0;border-radius:4px;padding:2px 7px;cursor:pointer" onclick="dlFile('${f.id}')">
                      <span style="font-size:11px">${fileIcon(f.name)}</span>
                      <span style="font-size:9px;color:var(--blue);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name}</span>
                    </div>`).join('')}
                </div>`:''
              }
            </div>`).join('')}
        </div>
        <!-- New comment entry -->
        <div id="chk-new-comment-area" style="border:2px dashed var(--border);border-radius:7px;padding:10px 12px;background:#fff">
          <div style="font-size:10px;font-weight:700;color:var(--navy);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">✏ New Comment</div>
          <div class="fg" style="margin-bottom:7px">
            <div class="fr"><label class="fl">Inspector / Author</label><input class="fi" id="f-chk-comment-author" value="${currentUser()?.username||''}" placeholder="Your name"/></div>
            <div class="fr"><label class="fl">Date</label><input class="fi" id="f-chk-comment-date" type="date" value="${localDateStr()}"/></div>
          </div>
          <div class="fr" style="margin-bottom:7px"><label class="fl">Comment / Observation</label><textarea class="ft" id="f-chk-comment-text" style="min-height:60px" placeholder="Field observation, pass/fail, deviation, corrective action…"></textarea></div>
          <div style="font-size:10px;font-weight:600;color:var(--muted);margin-bottom:5px">📸 Attach Photos / Documents</div>
          ${dropZoneHTML('chkfiles','Drop photos, inspection reports, or supporting documents…')}
          <button type="button" onclick="chkSaveNewComment('${id}')" class="btn btn-navy btn-sm" style="width:100%;margin-top:8px;justify-content:center">💬 Save This Comment</button>
        </div>
      </div>`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    return;
  }

  if(type==='qaqc-item'){
    const p2=proj();
    const o=id?(p2&&p2.qaqcLog||[]).find(x=>x.id===id):{};
    const types=[['ncr','Non-Conformance (NCR)'],['observation','Observation'],['rfi','RFI'],['punch','Punch List Item'],['other','Other']];
    vEl('modal-title').textContent=(id?'Edit':'Add')+' QA/QC Entry';
    html=`
      <div class="fg">
        <div class="fr"><label class="fl">Reference # *</label><input class="fi" id="f-qa-ref" value="${o.refNo||''}" placeholder="e.g. NCR-2026-001"/></div>
        <div class="fr">
          <label class="fl">Type * <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
          <input class="fi" id="f-qa-type" list="qa-type-list" value="${o.type||''}" placeholder="e.g. NCR, Observation, RFI…"/>
          <datalist id="qa-type-list">
            ${types.map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}
          </datalist>
        </div>
      </div>
      <div class="fr"><label class="fl">Description *</label><textarea class="ft" id="f-qa-desc" style="min-height:60px" placeholder="Describe the issue or observation…">${o.description||''}</textarea></div>
      <div class="fr">
        <label class="fl">Category / Trade <span style="font-size:9px;color:var(--muted)">(select or type new)</span></label>
        <input class="fi" id="f-qa-cat" list="qa-cat-list" value="${o.category||''}" placeholder="e.g. Plumbing, Structural, MEP, Finishes…"/>
        <datalist id="qa-cat-list">
          ${['Plumbing','Structural','Electrical','HVAC','Finishes','Waterproofing','Roofing','Site Work','Fire Protection','Glazing','Other'].map(c=>`<option value="${c}"/>`).join('')}
        </datalist>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Location</label><input class="fi" id="f-qa-loc" value="${o.location||''}" placeholder="e.g. Level 2, Grid C-4"/></div>
        <div class="fr"><label class="fl">Date</label><input class="fi" id="f-qa-date" type="date" value="${o.date||localDateStr()}"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Raised By</label><input class="fi" id="f-qa-by" value="${o.raisedBy||''}" placeholder="Inspector / Engineer"/></div>
        <div class="fr"><label class="fl">Assigned To</label><input class="fi" id="f-qa-to" value="${o.assignedTo||''}" placeholder="Contractor / Team"/></div>
      </div>
      <div class="fg">
        <div class="fr"><label class="fl">Due Date</label><input class="fi" id="f-qa-due" type="date" value="${o.dueDate||''}"/></div>
        <div class="fr"><label class="fl">Status</label><select class="fs" id="f-qa-status">${[['open','Open'],['inprogress','In Progress'],['resolved','Resolved'],['closed','Closed']].map(([v,l])=>`<option value="${v}" ${(o.status||'open')===v?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="fr"><label class="fl">Corrective Action / Resolution</label><textarea class="ft" id="f-qa-action" style="min-height:50px">${o.correctiveAction||''}</textarea></div>`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    return;
  }

  if(type==='qafiles'){
    const p2=proj();
    const it=(p2&&p2.qaqcLog||[]).find(x=>x.id===id);
    if(!it){closeModal();return;}
    mPending=[...(it.files||[])]; regFiles(mPending);
    vEl('modal-title').textContent='QA/QC Files — '+(it.refNo||'Entry');
    html=`${dropZoneHTML('qafiles','Drop photos, reports, or supporting documents…')}${attachListHTML()}`;
    vEl('modal-body').innerHTML=html;
    vEl('mo').classList.add('open');
    mId=id; mMode='qafiles';
    return;
  }

  vEl('modal-body').innerHTML=html;
  vEl('mo').classList.add('open');
}

function dropZoneHTML(listId, placeholder){
  return`<label class="drop-zone" ondragover="event.preventDefault();this.classList.add('drag')" ondragleave="this.classList.remove('drag')" ondrop="handleDrop(event,'${listId}',this)">
    <div style="font-size:24px;margin-bottom:4px">📎</div>
    <div class="drop-zone-txt">${placeholder}</div>
    <div style="font-size:11px;color:var(--blue);font-weight:600;margin-top:6px">Click to choose files or drag them here</div>
    <input type="file" multiple style="display:none" onchange="handleFileInput(this,'${listId}')">
  </label>
  <div id="upload-status-${listId}" style="font-size:11px;color:var(--muted);margin-top:8px;min-height:16px"></div>
  <div class="attach-list" id="al-${listId}"></div>`;
}

function attachListHTML(){
  return `<div id="__pending_render" style="display:none"></div>`;
}

function renderPendingInModal(){
  // Re-render all attach lists in open modal
  ['qfiles','insfiles','payproof','payinvoice','lienwvr','invfiles','invlien','invproof','ppfiles','venfiles','qafiles','chkfiles','plan-files'].forEach(lid=>{
    const el=vEl('al-'+lid);
    if(el) el.innerHTML=mPending.map(f=>aItemHTML(f)).join('');
    const status=vEl('upload-status-'+lid);
    if(status){
      if(uploadInFlight>0) status.textContent='Uploading '+uploadInFlight+' file'+(uploadInFlight>1?'s':'')+'...';
      else if(mPending.length) status.textContent=mPending.length+' file'+(mPending.length>1?'s':'')+' ready to save';
      else status.textContent='';
    }
  });
}

function aItemHTML(f){
  return`<div class="a-item" id="ai_${f.id}">
    <span class="a-icon">${fileIcon(f.name)}</span>
    <span class="a-name">${f.name}</span>
    <span class="a-size">${fmtBytes(f.size||0)}</span>
    <button class="a-dl" onclick="dlFile('${f.id}')">⬇</button>
    <button class="a-rm" onclick="removePending('${f.id}')">✕</button>
  </div>`;
}

function handleFileInput(input, listId){
  Array.from(input.files).forEach(file=>{
    if(file.size>500*1024*1024){toast('⚠ Max 500MB: '+file.name);return;}
    const reader=new FileReader();
    reader.onload=e=>{
      const f={id:uid(),name:file.name,size:file.size,data:e.target.result,at:new Date().toISOString()};
      FA[f.id]=f; mPending.push(f);
      const list=vEl('al-'+listId);
      if(list){const d=document.createElement('div');d.innerHTML=aItemHTML(f);list.appendChild(d.firstElementChild);}
    };
    reader.onerror=()=>toast('⚠ Failed to read file: '+file.name);
    reader.readAsDataURL(file);
  });
}
function handleDrop(e,listId,zone){
  e.preventDefault(); zone.classList.remove('drag');
  handleFileInput({files:e.dataTransfer.files},listId);
}
function removePending(fid){
  mPending=mPending.filter(f=>f.id!==fid);
  const el=vEl('ai_'+fid); if(el)el.remove();
}

function closeModal(){
  // Restore modal footer
  const mf=document.querySelector('.modal-foot');
  if(mf)mf.style.display=''; vEl('mo').classList.remove('open'); mPending=[]; uploadInFlight=0; }

function isViewer(){
  const cu=currentUser();
  return cu&&cu.role==='Viewer';
}

function saveModal(){
  if(uploadInFlight>0){toast('⏳ Please wait for file upload to finish');return;}
  if(isViewer()){toast('⚠ Viewers have read-only access');return;}
  if(curPage&&isPageReadOnly(curPage)){toast('⚠ You have View Only access to this page');return;}
  const p=proj();
  if(mMode==='project'){
    const name=vVal('f-name'); if(!name){toast('⚠ Project name required');return;}
    const color=document.querySelector('.cswatch.sel')?.dataset.color||COLORS[0];
    const street=vVal('f-street'),city=vVal('f-city'),state=vVal('f-state'),zip=vVal('f-zip'),county=vVal('f-county');
    const address=[street,city,state,zip].filter(Boolean).join(', ');
    const o={id:mId||('proj_'+uid()),name,street,city,county,state,zip,address,permit:vVal('f-permit'),apn:vVal('f-apn'),type:vVal('f-type'),color,client:vVal('f-client'),clientPhone:vVal('f-clientPhone'),clientEmail:vVal('f-clientEmail'),clientAddr:vVal('f-clientAddr'),works:[],milestones:[],quotes:[],plans:[],inspections:[],invoices:[],vendors:[],checklist:[],qaqcLog:[]};
    if(mId){const idx=DB.projects.findIndex(x=>x.id===mId);if(idx>-1){['works','milestones','quotes','plans','inspections','invoices','vendors','checklist','qaqcLog'].forEach(k=>{if(DB.projects[idx][k]!==undefined)o[k]=DB.projects[idx][k];});DB.projects[idx]=o;}}
    else{DB.projects.push(o);DB.activeId=o.id;}

  } else if(mMode==='work'&&p){
    const name=vVal('f-name'); if(!name){toast('⚠ Name required');return;}
    const o={id:mId||uid(),name,ref:vVal('f-ref'),contractor:vVal('f-contractor'),status:vVal('f-status'),pct:parseInt(vVal('f-pct'))||0,notes:vVal('f-notes')};
    if(!p.works)p.works=[];
    if(mId){const i=p.works.findIndex(x=>x.id===mId);if(i>-1)p.works[i]=o;}else p.works.push(o);

  } else if(mMode==='milestone'&&p){
    const name=vVal('f-name'); if(!name){toast('⚠ Name required');return;}
    const ex=mId?(p.milestones||[]).find(x=>x.id===mId):null;
    const o={id:mId||uid(),name,ref:vVal('f-ref'),date:vVal('f-date'),status:vVal('f-status'),notes:vVal('f-notes'),
      payAmt:parseFloat(vVal('f-payamt'))||0, payPaid:ex?ex.payPaid:false, payDate:ex?ex.payDate:'', payFiles:ex?ex.payFiles||[]:[], progressPayments:ex?ex.progressPayments||[]:[],};
    if(!p.milestones)p.milestones=[];
    if(mId){const i=p.milestones.findIndex(x=>x.id===mId);if(i>-1)p.milestones[i]=o;}else p.milestones.push(o);

  } else if(mMode==='quote'&&p){
    const vendor=vVal('f-vendor'); if(!vendor){toast('⚠ Vendor name required');return;}
    const ex=mId?(p.quotes||[]).find(x=>x.id===mId):null;
    const refVal=vEl('f-ref-custom')?.style.display!=='none'?vVal('f-ref-custom'):vVal('f-ref');
    const o={id:mId||uid(),vendor,scope:vVal('f-scope'),ref:refVal,csi:vVal('f-csi'),amount:parseFloat(vVal('f-amount'))||0,date:vVal('f-date'),status:vVal('f-status'),files:[...mPending],payMilestones:ex?ex.payMilestones||[]:[],};
    if(!p.quotes)p.quotes=[];
    if(mId){const i=p.quotes.findIndex(x=>x.id===mId);if(i>-1)p.quotes[i]=o;}else p.quotes.push(o);

  } else if(mMode==='plan'&&p){
    if(!mPending.length){toast('⚠ Please select at least one file');return;}
    const ptype=vVal('f-plan-type');
    if(!p.plans)p.plans=[];
    mPending.forEach(f=>p.plans.push({...f,type:ptype}));

  } else if(mMode==='inspection'&&p){
    const name=vVal('f-name'); if(!name){toast('⚠ Name required');return;}
    const idate=vVal('f-inspdate'); if(!idate){toast('⚠ Please select a date');return;}
    const itime=vVal('f-insptime'); if(!itime){toast('⚠ Please select a time');return;}
    const ex=mId?(p.inspections||[]).find(x=>x.id===mId):null;
    const o={id:mId||uid(),name,inspDate:idate,inspTime:itime,location:vVal('f-location'),refs:vVal('f-refs'),ahj:vVal('f-ahj'),notes:vVal('f-notes'),files:ex?ex.files||[]:[]};
    if(!p.inspections)p.inspections=[];
    if(mId){const i=p.inspections.findIndex(x=>x.id===mId);if(i>-1)p.inspections[i]=o;}else p.inspections.push(o);

  } else if(mMode==='msprogpay'&&p){
    const parts=(mId||'|').split('|'); const mid=parts[0],ppid=parts[1]||'';
    const ms=(p.milestones||[]).find(x=>x.id===mid); if(!ms){toast('⚠ Milestone not found');return;}
    ms.progressPayments=ms.progressPayments||[];
    const nameEl=vEl('f-ppname'),customEl=vEl('f-ppname-custom');
    let ppName=(nameEl?.value==='Other'?customEl?.value.trim():nameEl?.value)||'';
    if(!ppName){toast('⚠ Please select or enter a payment name');return;}
    const amt=parseFloat(vEl('f-ppamt')?.value)||0; if(!amt){toast('⚠ Amount required');return;}
    const ex=ppid?ms.progressPayments.find(x=>x.id===ppid):null;
    const o={id:ppid||uid(),name:ppName,amount:amt,dueDate:vEl('f-ppdue')?.value||'',paid:ex?ex.paid:false,receivedDate:ex?ex.receivedDate:'',notes:vEl('f-ppnotes')?.value.trim()||'',files:ex?ex.files||[]:[]};
    if(ppid){const i=ms.progressPayments.findIndex(x=>x.id===ppid);if(i>-1)ms.progressPayments[i]=o;}else ms.progressPayments.push(o);
  } else if(mMode==='msppfiles'&&p){
    const parts=(mId||'').split('|'); const mid=parts[0],ppid=parts[1];
    const ms=(p.milestones||[]).find(x=>x.id===mid);
    const pp=ms?(ms.progressPayments||[]).find(x=>x.id===ppid):null;
    if(pp) pp.files=[...mPending];
  } else if(mMode==='markpp'&&p){
    const parts=(mId||'').split('|'); const mid=parts[0],ppid=parts[1];
    const ms=(p.milestones||[]).find(x=>x.id===mid);
    const pp=ms?(ms.progressPayments||[]).find(x=>x.id===ppid):null;
    if(!pp){toast('⚠ Not found');return;}
    const rdate=vEl('f-pprecdate')?.value; if(!rdate){toast('⚠ Please select a date');return;}
    pp.paid=true; pp.receivedDate=rdate;
    if(vEl('f-pprechnotes')?.value.trim()) pp.notes=vEl('f-pprechnotes').value.trim();
  } else if(mMode==='qfiles'&&p){
    const q=(p.quotes||[]).find(x=>x.id===mId); if(q)q.files=[...mPending];

  } else if(mMode==='insfiles'&&p){
    const ins=(p.inspections||[]).find(x=>x.id===mId); if(ins)ins.files=[...mPending];

  } else if(mMode==='paymilestone'&&p){
    const parts=(mId||'').split('|'); const qid=parts[0],pmid=parts[1]||'';
    const q=(p.quotes||[]).find(x=>x.id===qid); if(!q){toast('⚠ Quote not found');return;}
    q.payMilestones=q.payMilestones||[];
    const name=vEl('f-pmname')?.value.trim(); if(!name){toast('⚠ Name required');return;}
    const ex=pmid?q.payMilestones.find(x=>x.id===pmid):null;
    const o={id:pmid||uid(),name,amount:parseFloat(vEl('f-pmamt')?.value)||0,dueDate:vEl('f-pmdue')?.value||'',paid:ex?ex.paid:false,paidDate:ex?ex.paidDate:'',notes:vEl('f-pmnotes')?.value.trim()||'',files:ex?ex.files||[]:[],invoiceFiles:ex?ex.invoiceFiles||[]:[],lienFiles:ex?ex.lienFiles||[]:[]};
    if(pmid){const i=q.payMilestones.findIndex(x=>x.id===pmid);if(i>-1)q.payMilestones[i]=o;}else q.payMilestones.push(o);

  } else if(mMode==='payproof'&&p){
    const parts=(mId||'').split('|');
    const q=(p.quotes||[]).find(x=>x.id===parts[0]);
    const pm=q?(q.payMilestones||[]).find(x=>x.id===parts[1]):null;
    if(pm) pm.files=[...mPending];

  } else if(mMode==='payinvoice'&&p){
    const iparts=(mId||'').split('|');
    const iq=(p.quotes||[]).find(x=>x.id===iparts[0]);
    const ipm=iq?(iq.payMilestones||[]).find(x=>x.id===iparts[1]):null;
    if(ipm) ipm.invoiceFiles=[...mPending];
  } else if(mMode==='invoice'&&p){
    // Determine if manual or contract-based
    const manualSec=document.getElementById('inv-manual-section');
    const isManual=manualSec&&manualSec.style.display!=='none';
    let qid='', vcId='', vendorName='', manualScope='';
    if(isManual){
      const manualSel=vEl('f-inv-manual-vendor')?.value||'';
      if(manualSel==='__other__'){
        vendorName=(vEl('f-inv-manual-vendor-other')?.value||'').trim();
      } else {
        vendorName=manualSel.trim();
      }
      manualScope=(vEl('f-inv-manual-scope')?.value||'').trim();
      if(!vendorName){toast('⚠ Please select or enter a vendor name');return;}
    } else {
      const qselEl=vEl('f-inv-vendor');
      const rawQid=qselEl?.value||'';
      if(rawQid.startsWith('vc_')){
        // Vendor contract without quote — store vcId for strict linking
        vcId=rawQid.replace('vc_','');
        const vc=(p.vendors||[]).find(v=>v.id===vcId);
        vendorName=vc?vc.vendor:(vEl('f-inv-vname')?.value.trim()||'');
      } else {
        qid=rawQid!=='__other__'?rawQid:'';
        vendorName=qid?(p.quotes||[]).find(q=>q.id===qid)?.vendor||(vEl('f-inv-vname')?.value.trim()||''):(vEl('f-inv-vname')?.value.trim()||'');
      }
      if(!vendorName){toast('⚠ Please select or enter a subcontractor name');return;}
    }
    const invNo=vVal('f-inv-no'); if(!invNo){toast('⚠ Invoice number required');return;}
    const amt=parseFloat(vVal('f-inv-amt'))||0; if(!amt){toast('⚠ Amount required');return;}
    const ex=mId?(p.invoices||[]).find(x=>x.id===mId):null;
    const milestoneId=isManual?'':(vVal('f-inv-milestone')||'');
    const linkedVcId = isManual ? '' : (vcId || (qid ? ((p.vendors||[]).find(v=>v.quoteId===qid)?.id || '') : ''));
    const o={id:mId||uid(),vendor:vendorName,quoteId:isManual?'':qid,vcId:linkedVcId,isManual:isManual||false,manualScope:manualScope||'',milestoneId,invoiceNo:invNo,amount:amt,invoiceDate:vVal('f-inv-date'),dueDate:vVal('f-inv-due'),description:vVal('f-inv-desc'),approvalStatus:ex?ex.approvalStatus:'pending',paid:ex?ex.paid:false,paidDate:ex?ex.paidDate:'',partialPayments:ex?ex.partialPayments||[]:[],files:ex?ex.files||[]:[],lienFiles:ex?ex.lienFiles||[]:[],};
    if(!p.invoices)p.invoices=[]; if(!p.vendors)p.vendors=[]; if(!p.checklist)p.checklist=[]; if(!p.qaqcLog)p.qaqcLog=[]; if(!p.chkCategories)p.chkCategories=[]; (p.checklist||[]).forEach(it=>{(it.comments||[]).forEach(c=>regFiles(c.files||[]));}); (p.qaqcLog||[]).forEach(it=>regFiles(it.files||[])); (p.checklist||[]).forEach(it=>{if(!it.comments)it.comments=[];});
    if(mId){const i=p.invoices.findIndex(x=>x.id===mId);if(i>-1)p.invoices[i]=o;}else p.invoices.push(o);
  } else if(mMode==='vendor'&&p){
    const vdirSel=vEl('f-ven-vdir');
    const vdirId=vdirSel?.value||'';
    if(!vdirId){toast('⚠ Please select a vendor from the directory');return;}
    const vdirEntry=getVDirList().find(v=>v.id===vdirId);
    const vname=vdirEntry?(vdirEntry.company||vdirEntry.name):'';
    if(!vname){toast('⚠ Vendor name required');return;}
    const ex=mId?(p.vendors||[]).find(x=>x.id===mId):null;
    const o={id:mId||uid(),vendor:vname,vdirId,vendorEmail:vVal('f-ven-email')||vdirEntry?.email||'',trade:vVal('f-ven-trade')||vdirEntry?.trade||'',contractNo:vVal('f-ven-no'),amount:parseFloat(vVal('f-ven-amt'))||0,contractType:vVal('f-ven-type'),status:vVal('f-ven-status'),startDate:vVal('f-ven-start'),endDate:vVal('f-ven-end'),scope:vVal('f-ven-scope'),exclusions:vVal('f-ven-exclusions'),notes:vVal('f-ven-notes'),milestones:_venMilestones.filter(ms=>!ms._deleted&&ms.name),files:ex?ex.files||[]:[],};
    if(!p.vendors)p.vendors=[];
    if(mId){const i=p.vendors.findIndex(x=>x.id===mId);if(i>-1)p.vendors[i]=o;}else p.vendors.push(o);
  } else if(mMode==='venfiles'&&p){
    const v=(p.vendors||[]).find(x=>x.id===mId); if(v)v.files=[...mPending];
  } else if(mMode==='ppfiles'&&p){
    const pparts=(mId||'').split('|');
    const pinv=(p.invoices||[]).find(x=>x.id===pparts[0]);
    const ppp=pinv?(pinv.partialPayments||[]).find(x=>x.id===pparts[1]):null;
    if(ppp){
      ppp.files=[...mPending];
      const txnEl=vEl('f-pp-txn');
      if(txnEl&&txnEl.value.trim()) ppp.txnNo=txnEl.value.trim();
    }
  } else if(mMode==='invproof'&&p){
    const inv=(p.invoices||[]).find(x=>x.id===mId);
    if(inv){
      inv.proofFiles=[...mPending];

    }
  } else if(mMode==='invlien'&&p){
    const inv=(p.invoices||[]).find(x=>x.id===mId); if(inv)inv.lienFiles=[...mPending];
  } else if(mMode==='invfiles'&&p){
    const inv=(p.invoices||[]).find(x=>x.id===mId); if(inv)inv.files=[...mPending];
  } else if(mMode==='chklist-cat'&&p){
    const catName=(vEl('f-cat-new')?.value||'').trim();
    if(!catName){toast('⚠ Please enter a category name');return;}
    // Add a placeholder checklist item to anchor the category, or just toast confirmation
    toast('✓ Category "'+catName+'" ready — use it when adding checklist items');
    // Store in project custom categories list
    if(!p.chkCategories)p.chkCategories=[];
    if(!p.chkCategories.includes(catName))p.chkCategories.push(catName);
    saveDB();
    // Re-open to show updated list
    closeModal();
    openModal('chklist-cat');
    return;
  } else if(mMode==='chklist-item'&&p){
    const name=vVal('f-chk-name');if(!name){toast('⚠ Item name required');return;}
    const ex=mId?(p.checklist||[]).find(x=>x.id===mId):null;
    const existingComments=ex?ex.comments||[]:[];
    const o={id:mId||uid(),name,category:vVal('f-chk-cat')||'General',priority:vVal('f-chk-pri')||'low',dueDate:vVal('f-chk-due'),assignee:vVal('f-chk-who'),notes:vVal('f-chk-notes'),status:ex?ex.status:'open',comments:existingComments};
    if(!p.checklist)p.checklist=[];
    if(mId){const i=p.checklist.findIndex(x=>x.id===mId);if(i>-1)p.checklist[i]=o;}else p.checklist.push(o);
  } else if(mMode==='qaqc-item'&&p){
    const ref=vVal('f-qa-ref');if(!ref){toast('⚠ Reference # required');return;}
    const ex=mId?(p.qaqcLog||[]).find(x=>x.id===mId):null;
    const o={id:mId||uid(),refNo:ref,type:vVal('f-qa-type'),category:vVal('f-qa-cat'),description:vVal('f-qa-desc'),location:vVal('f-qa-loc'),date:vVal('f-qa-date'),raisedBy:vVal('f-qa-by'),assignedTo:vVal('f-qa-to'),dueDate:vVal('f-qa-due'),status:vVal('f-qa-status'),correctiveAction:vVal('f-qa-action'),files:ex?ex.files||[]:[],};
    if(!p.qaqcLog)p.qaqcLog=[];
    if(mId){const i=p.qaqcLog.findIndex(x=>x.id===mId);if(i>-1)p.qaqcLog[i]=o;}else p.qaqcLog.push(o);
  } else if(mMode==='qafiles'&&p){
    const it=(p.qaqcLog||[]).find(x=>x.id===mId);if(it)it.files=[...mPending];
  } else if(mMode==='lienwvr'&&p){
    const parts=(mId||'').split('|');
    const q=(p.quotes||[]).find(x=>x.id===parts[0]);
    const pm=q?(q.payMilestones||[]).find(x=>x.id===parts[1]):null;
    if(pm) pm.lienFiles=[...mPending];
  }

  saveDB(); closeModal(); renderAll(); toast('✓ Saved');
}

// ══════════════════════════════════════════════════════════════════
//  DELETE HELPERS
// ══════════════════════════════════════════════════════════════════
function delItem(col,id){
  const p=proj(); if(!p||!confirm('Delete this item?')) return;
  if(!p[col]) return; p[col]=p[col].filter(x=>x.id!==id);
  saveDB(); renderAll(); toast('🗑 Deleted');
}
function delPlan(id){
  const p=proj(); if(!p||!confirm('Remove document?')) return;
  p.plans=(p.plans||[]).filter(x=>x.id!==id);
  saveDB(); renderAll(); toast('🗑 Removed');
}
function delProj(id){
  if(!confirm('Delete this project and ALL its data?')) return;
  DB.projects=DB.projects.filter(p=>p.id!==id);
  if(DB.activeId===id) DB.activeId=DB.projects[0]?.id||null;
  saveDB(); renderAll(); toast('🗑 Project deleted');
  if(!DB.activeId) nav('projects');
}

// ══════════════════════════════════════════════════════════════════
//  FILE DOWNLOAD
// ══════════════════════════════════════════════════════════════════
function getFileRecord(fid){
  let f=FA[fid];
  if(!f){
    registerAllFiles();
    f=FA[fid];
  }
  return (f&&f.data)?f:null;
}
function dlFile(fid){
  const f=getFileRecord(fid);
  if(!f){toast('⚠ File not found — it may not have been saved yet');return;}
  const a=document.createElement('a'); a.href=f.data; a.download=f.name;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  toast('⬇ Downloading '+f.name);
}
function viewFile(fid){
  const f=getFileRecord(fid);
  if(!f){toast('⚠ File not found — it may not have been saved yet');return;}
  const win=window.open(f.data,'_blank','noopener,noreferrer');
  if(!win){
    dlFile(fid);
    toast('⚠ Preview blocked — downloading instead');
    return;
  }
  toast('Opening '+f.name);
}

// ══════════════════════════════════════════════════════════════════
//  EXPORT
// ══════════════════════════════════════════════════════════════════
function exportJSON(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  const blob=new Blob([JSON.stringify(p,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=p.name.replace(/\s+/g,'_')+'_export.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  toast('📦 Exported');
}
// ── Shared report data builder ──

function exportAllFiles(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  const all=[];
  (p.quotes||[]).forEach(q=>{
    (q.files||[]).forEach(f=>{if(f.data)all.push(f);});
    (q.payMilestones||[]).forEach(pm=>{(pm.files||[]).forEach(f=>{if(f.data)all.push(f);});(pm.lienFiles||[]).forEach(f=>{if(f.data)all.push(f);});});
  });
  (p.plans||[]).forEach(f=>{if(f.data)all.push(f);});
  (p.inspections||[]).forEach(i=>(i.files||[]).forEach(f=>{if(f.data)all.push(f);}));
  if(!all.length){toast('⚠ No files in this project');return;}
  all.forEach((f,i)=>setTimeout(()=>dlFile(f.id),i*350));
  toast(`⬇ Downloading ${all.length} file(s)…`);
}


// ════ PDF EXPORT ════════════════════════════════════════════════════
function exportPDF(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  const msDone=(p.milestones||[]).filter(m=>m.status==='done').length;
  const total=(p.quotes||[]).reduce((a,q)=>a+Number(q.amount||0),0);
  const apprvd=(p.quotes||[]).filter(q=>q.status==='approved').reduce((a,q)=>a+Number(q.amount||0),0);
  const ppPaid=(p.milestones||[]).reduce((a,m)=>a+(m.progressPayments||[]).filter(pp=>pp.paid).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
  const ppTotal=(p.milestones||[]).reduce((a,m)=>a+(m.progressPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/>
<title>${p.name} — Project Report</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;color:#1a1917;padding:24px;max-width:1050px;margin:0 auto;font-size:12px}
h1{font-size:20px;margin-bottom:4px;color:#0C1B2E}
.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}
.sumrow{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.sum{background:#f4f3ef;border-radius:6px;padding:8px 12px;text-align:center;flex:1;min-width:90px;border-top:3px solid #1A6BC4}
.sum-v{font-size:18px;font-weight:700}.sum-l{font-size:9px;color:#6b6a64;margin-top:2px}
h2{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#1A6BC4;border-bottom:2px solid #1A6BC4;padding-bottom:3px;margin:18px 0 8px}
table{width:100%;border-collapse:collapse;font-size:10px;margin-bottom:10px}
th{background:#0C1B2E;color:#fff;padding:5px 8px;text-align:left;font-size:9px;text-transform:uppercase;letter-spacing:.5px}
td{padding:5px 8px;border-bottom:1px solid #e8e4dc;vertical-align:top}
tr:nth-child(even)td{background:#f7f6f2}
.g{color:#2D6A0F;font-weight:700}.a{color:#A86200;font-weight:700}.r{color:#9B1F1F;font-weight:700}.b{color:#1A6BC4}
.tot td{background:#0C1B2E!important;color:#fff;font-weight:700}
.appr td{background:#2D6A0F!important;color:#fff;font-weight:700}
.footer{margin-top:20px;font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e8e4dc;padding-top:8px}
@media print{body{padding:12px}@page{margin:14mm}}
</style></head><body>
<h1>${p.name}</h1>
<div class="meta">
  ${p.address||''}<br>
  Permit: ${p.permit||'—'} &nbsp;·&nbsp; APN: ${p.apn||'—'} &nbsp;·&nbsp; ${p.type||''}<br>
  ${p.county||''} &nbsp;·&nbsp; Livio Building Systems &nbsp;·&nbsp; ${new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}
</div>
<div class="sumrow">
  <div class="sum" style="border-color:#A86200"><div class="sum-v">${(p.works||[]).filter(w=>['active','inprogress','starting'].includes(w.status)).length}</div><div class="sum-l">Works Active</div></div>
  <div class="sum" style="border-color:#0D6E58"><div class="sum-v">${msDone}/${(p.milestones||[]).length}</div><div class="sum-l">Milestones</div></div>
  <div class="sum" style="border-color:#1A6BC4"><div class="sum-v b">$${total.toLocaleString()}</div><div class="sum-l">Total Quoted</div></div>
  <div class="sum" style="border-color:#2D6A0F"><div class="sum-v g">$${apprvd.toLocaleString()}</div><div class="sum-l">✓ Approved</div></div>
  <div class="sum" style="border-color:#2D6A0F"><div class="sum-v g">$${ppPaid.toLocaleString()}</div><div class="sum-l">Received</div></div>
  <div class="sum" style="border-color:${ppTotal>ppPaid?'#9B1F1F':'#2D6A0F'}"><div class="sum-v ${ppTotal>ppPaid?'r':'g'}">$${(ppTotal-ppPaid).toLocaleString()}</div><div class="sum-l">Balance Due</div></div>
</div>
<h2>Works at Site (${(p.works||[]).length})</h2>
<table><thead><tr><th>Work Item</th><th>CBC Ref</th><th>Contractor</th><th>Status</th><th>Progress</th></tr></thead><tbody>
${(p.works||[]).map(w=>`<tr><td><b>${w.name}</b><br><span style="font-size:9px;color:#6b6a64">${w.notes||''}</span></td><td style="color:#4A3FB0">${w.ref}</td><td>${w.contractor||'—'}</td><td class="${w.status==='complete'?'g':w.status==='caloshahold'?'r':'a'}">${w.status}</td><td><b>${w.pct}%</b></td></tr>`).join('')}
</tbody></table>
<h2>Project Milestones (${msDone}/${(p.milestones||[]).length} Achieved)</h2>
<table><thead><tr><th>Milestone</th><th>CBC Ref</th><th>Date</th><th>Status</th><th>Contract Amt</th><th>Received</th><th>Balance</th></tr></thead><tbody>
${(p.milestones||[]).map(m=>{const pps=m.progressPayments||[];const r=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);const t=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);return`<tr><td><b>${m.name}</b></td><td style="color:#4A3FB0">${m.ref}</td><td>${fmtDate(m.date)}</td><td class="${m.status==='done'?'g':m.status==='inprogress'?'a':''}">${m.status}</td><td><b>${m.payAmt?'$'+Number(m.payAmt).toLocaleString():'—'}</b></td><td class="g">${t?'$'+r.toLocaleString():'—'}</td><td class="${t-r>0?'r':'g'}">${t?'$'+(t-r).toLocaleString():'—'}</td></tr>`;}).join('')}
<tr class="tot"><td>TOTAL</td><td></td><td></td><td></td><td>$${(p.milestones||[]).reduce((a,m)=>a+Number(m.payAmt||0),0).toLocaleString()}</td><td>$${ppPaid.toLocaleString()}</td><td>$${(ppTotal-ppPaid).toLocaleString()}</td></tr>
</tbody></table>
<h2>Quotes (Total: $${total.toLocaleString()} · Approved: $${apprvd.toLocaleString()})</h2>
<table><thead><tr><th>Vendor</th><th>Scope</th><th>Code Ref</th><th>Amount</th><th>Status</th></tr></thead><tbody>
${(p.quotes||[]).map(q=>`<tr><td><b>${q.vendor}</b></td><td>${q.scope}</td><td style="color:#4A3FB0;font-size:9px">${q.ref}</td><td><b>$${Number(q.amount).toLocaleString()}</b></td><td class="${q.status==='approved'?'g':q.status==='new'?'b':'a'}">${q.status}</td></tr>`).join('')}
<tr class="tot"><td>TOTAL QUOTED</td><td></td><td></td><td>$${total.toLocaleString()}</td><td></td></tr>
<tr class="appr"><td>✓ APPROVED TOTAL</td><td></td><td></td><td>$${apprvd.toLocaleString()}</td><td></td></tr>
</tbody></table>
<h2>Inspections (${(p.inspections||[]).length})</h2>
<table><thead><tr><th>Date</th><th>Inspection</th><th>Time</th><th>Location</th><th>Code Refs</th><th>AHJ</th></tr></thead><tbody>
${(p.inspections||[]).map(i=>`<tr><td><b>${i.inspDate?new Date(i.inspDate+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'—'}</b></td><td>${i.name}</td><td>${fmtTime(i.inspTime)}</td><td>${i.location||'—'}</td><td style="color:#4A3FB0;font-size:9px">${i.refs||'—'}</td><td>${i.ahj||'—'}</td></tr>`).join('')}
</tbody></table>
<div class="footer">Livio Building Systems &nbsp;·&nbsp; ${p.name} &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString()}</div>
</body></html>`;
  const win=window.open('','_blank');
  if(!win){toast('⚠ Pop-up blocked — allow pop-ups for this site');return;}
  win.document.write(html); win.document.close();
  setTimeout(()=>{win.focus();win.print();},600);
  toast('📕 Report opened — use Print → Save as PDF');
}


// ════ WORD EXPORT ════════════════════════════════════════════════════
function exportWord(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  toast('📘 Generating Word document…');
  const msDone=(p.milestones||[]).filter(m=>m.status==='done').length;
  const total=(p.quotes||[]).reduce((a,q)=>a+Number(q.amount||0),0);
  const html='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;margin:40px}h1{font-size:18pt}h2{font-size:12pt;border-bottom:1pt solid #1A6BC4;color:#1A6BC4;margin-top:18pt}table{border-collapse:collapse;width:100%;font-size:9pt}th{background:#0C1B2E;color:white;padding:5pt 8pt;text-align:left}td{border:0.5pt solid #e0ddd5;padding:4pt 8pt}</style></head><body>'
    +'<h1>'+p.name+'</h1><p style="color:#6b6a64;font-size:9pt">'+(p.address||'')+' | Permit: '+(p.permit||'—')+' | APN: '+(p.apn||'—')+' | Livio Building Systems</p>'
    +'<h2>Works at Site</h2><table><tr><th>Work Item</th><th>CBC Ref</th><th>Contractor</th><th>Status</th><th>Progress</th></tr>'
    +(p.works||[]).map(w=>'<tr><td><b>'+w.name+'</b><br><small>'+(w.notes||'')+'</small></td><td>'+w.ref+'</td><td>'+(w.contractor||'—')+'</td><td>'+w.status+'</td><td>'+w.pct+'%</td></tr>').join('')+'</table>'
    +'<h2>Milestones ('+msDone+'/'+(p.milestones||[]).length+' Achieved)</h2><table><tr><th>Milestone</th><th>CBC Ref</th><th>Date</th><th>Status</th><th>Contract Amt</th></tr>'
    +(p.milestones||[]).map(m=>'<tr><td><b>'+m.name+'</b></td><td>'+m.ref+'</td><td>'+fmtDate(m.date)+'</td><td>'+m.status+'</td><td>'+(m.payAmt?'$'+Number(m.payAmt).toLocaleString():'—')+'</td></tr>').join('')+'</table>'
    +'<h2>Quotes (Total: $'+total.toLocaleString()+')</h2><table><tr><th>Vendor</th><th>Scope</th><th>Amount</th><th>Status</th></tr>'
    +(p.quotes||[]).map(q=>'<tr><td><b>'+q.vendor+'</b></td><td>'+q.scope+'</td><td>$'+Number(q.amount).toLocaleString()+'</td><td>'+q.status+'</td></tr>').join('')+'</table>'
    +'<h2>Inspections</h2><table><tr><th>Date</th><th>Inspection</th><th>Time</th><th>Location</th></tr>'
    +(p.inspections||[]).map(i=>'<tr><td>'+(i.inspDate?new Date(i.inspDate+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'—')+'</td><td>'+i.name+'</td><td>'+fmtTime(i.inspTime)+'</td><td>'+(i.location||'—')+'</td></tr>').join('')+'</table>'
    +'</body></html>';
  const blob=new Blob(['﻿'+html],{type:'application/msword'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=p.name.replace(/\s+/g,'_')+'.doc';
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  toast('📘 Word document downloaded');
}

// ════ POWERPOINT EXPORT ══════════════════════════════════════════════
function exportPPTX(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  toast('📊 Building PowerPoint… please wait',5000);
  if(window.PptxGenJS){_doPPTX(p);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js';
    s.onload=()=>{if(typeof PptxGenJS!=='undefined')_doPPTX(p);else toast('⚠ PowerPoint library failed to load');};
    s.onerror=()=>toast('⚠ Could not load PowerPoint library — check internet connection');
    document.head.appendChild(s);
  }
}

function _doPPTX(p){
  try{
    const prs=new PptxGenJS();
    prs.layout='LAYOUT_WIDE';
    prs.title=p.name+' — Livio Building Systems';
    prs.author='Livio Building Systems';
    const N='0C1B2E',BL='1A6BC4',GR='2D6A0F',AM='A86200',RD='9B1F1F',WH='FFFFFF',GY='6B6A64',LT='F4F3EF',NT='162438';
    const msDone=(p.milestones||[]).filter(m=>m.status==='done').length;
    const total=(p.quotes||[]).reduce((a,q)=>a+Number(q.amount||0),0);
    const approvedTotal=(p.quotes||[]).filter(q=>q.status==='approved').reduce((a,q)=>a+Number(q.amount||0),0);
    const ppPaid=(p.milestones||[]).reduce((a,m)=>a+(m.progressPayments||[]).filter(pp=>pp.paid).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const ppTotal=(p.milestones||[]).reduce((a,m)=>a+(m.progressPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const addHdr=(s,txt,sub)=>{
      s.addShape(prs.shapes.RECTANGLE,{x:0,y:0,w:13.3,h:0.68,fill:{color:N},line:{color:N}});
      s.addText(txt,{x:0.3,y:0,w:10,h:0.68,fontSize:13,bold:true,color:WH,charSpacing:1.5,valign:'middle',margin:0});
      if(sub)s.addText(sub,{x:9.5,y:0,w:3.6,h:0.68,fontSize:10,color:'8AAAC8',align:'right',valign:'middle',margin:0});
    };
    // SLIDE 1: Cover
    let s=prs.addSlide(); s.background={color:N};
    s.addShape(prs.shapes.RECTANGLE,{x:0,y:0,w:0.18,h:7.5,fill:{color:BL},line:{color:BL}});
    s.addText('LIVIO BUILDING SYSTEMS',{x:0.5,y:1.4,w:11,h:0.4,fontSize:10,bold:true,color:'8AAAC8',charSpacing:3,margin:0});
    s.addText(p.name,{x:0.5,y:1.88,w:11,h:1.3,fontSize:42,bold:true,color:WH,fontFace:'Arial Black',margin:0});
    s.addText(p.type||'Construction Project',{x:0.5,y:3.25,w:11,h:0.55,fontSize:18,color:'8AAAC8',italic:true,margin:0});
    s.addShape(prs.shapes.RECTANGLE,{x:0.5,y:3.95,w:4.5,h:0.05,fill:{color:BL},line:{color:BL}});
    s.addText(p.address||'',{x:0.5,y:4.12,w:11,h:0.35,fontSize:13,color:'8AAAC8',margin:0});
    s.addText('Permit: '+(p.permit||'—')+'   ·   APN: '+(p.apn||'—'),{x:0.5,y:4.5,w:11,h:0.35,fontSize:12,color:'8AAAC8',margin:0});
    s.addShape(prs.shapes.RECTANGLE,{x:0,y:6.9,w:13.3,h:0.6,fill:{color:NT},line:{color:NT}});
    s.addText('CONSTRUCTION MANAGEMENT  ·  CALIFORNIA BUILDING CODE COMPLIANT  ·  '+new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}),{x:0.3,y:6.9,w:12.7,h:0.6,fontSize:9,color:'8AAAC8',valign:'middle',charSpacing:1,margin:0});
    // SLIDE 2: Metrics
    s=prs.addSlide(); s.background={color:LT};
    addHdr(s,'PROJECT OVERVIEW & KEY METRICS');
    const mets=[{l:'WORKS ACTIVE',v:String((p.works||[]).filter(w=>['active','inprogress','starting'].includes(w.status)).length),c:AM,bg:'FEF3E2'},{l:'MILESTONES',v:msDone+'/'+(p.milestones||[]).length,c:'0D6E58',bg:'E2F5EF'},{l:'TOTAL QUOTED',v:'$'+total.toLocaleString(),c:BL,bg:'E8F2FC'},{l:'APPROVED',v:'$'+approvedTotal.toLocaleString(),c:GR,bg:'ECF5E3'},{l:'RECEIVED',v:'$'+ppPaid.toLocaleString(),c:GR,bg:'ECF5E3'},{l:'BALANCE DUE',v:'$'+(ppTotal-ppPaid).toLocaleString(),c:ppTotal>ppPaid?RD:GR,bg:ppTotal>ppPaid?'FDEAEA':'ECF5E3'}];
    mets.forEach((m,i)=>{const x=0.3+(i%3)*4.25,y=0.88+Math.floor(i/3)*1.7;s.addShape(prs.shapes.RECTANGLE,{x,y,w:4.0,h:1.5,fill:{color:m.bg},line:{color:'E0DDD5',width:.5}});s.addShape(prs.shapes.RECTANGLE,{x,y,w:4.0,h:0.07,fill:{color:m.c},line:{color:m.c}});s.addText(m.l,{x:x+0.14,y:y+0.12,w:3.72,h:0.3,fontSize:9,bold:true,color:GY,charSpacing:.5,margin:0});s.addText(m.v,{x:x+0.1,y:y+0.38,w:3.8,h:0.85,fontSize:32,bold:true,color:N,fontFace:'Arial Black',margin:0});});
    // SLIDE 3: Works
    s=prs.addSlide(); s.background={color:LT};
    addHdr(s,'WORKS AT SITE','CBC 2022 · CalOSHA · ACI 318');
    const wHdr=[{text:'Work Item',options:{bold:true,color:WH,fill:{color:N}}},{text:'CBC Ref.',options:{bold:true,color:WH,fill:{color:N}}},{text:'Contractor',options:{bold:true,color:WH,fill:{color:N}}},{text:'Status',options:{bold:true,color:WH,fill:{color:N}}},{text:'Progress',options:{bold:true,color:WH,fill:{color:N}}}];
    const wBody=(p.works||[]).map(w=>{const sc={complete:GR,caloshahold:RD,active:BL,inprogress:AM,starting:'0D6E58'};return[{text:w.name,options:{bold:true,fontSize:10}},{text:w.ref,options:{color:'4A3FB0',fontSize:9}},{text:w.contractor||'—',options:{fontSize:9}},{text:w.status,options:{color:sc[w.status]||GY,fontSize:9}},{text:w.pct+'%',options:{bold:true,color:sc[w.status]||GY,fontSize:10}}];});
    s.addTable([wHdr,...wBody],{x:0.3,y:0.82,w:12.7,colW:[4.2,2.0,3.0,2.2,1.3],border:{pt:.5,color:'E0DDD5'},fill:{color:WH},fontFace:'Arial',fontSize:10,rowH:0.42});
    // SLIDE 4: Milestones
    s=prs.addSlide(); s.background={color:LT};
    addHdr(s,'PROJECT MILESTONES','CBC §105 · §110 · §111');
    const msHdr=[{text:'Milestone',options:{bold:true,color:WH,fill:{color:N}}},{text:'CBC Ref.',options:{bold:true,color:WH,fill:{color:N}}},{text:'Date',options:{bold:true,color:WH,fill:{color:N}}},{text:'Status',options:{bold:true,color:WH,fill:{color:N}}},{text:'Contract',options:{bold:true,color:WH,fill:{color:N}}},{text:'Received',options:{bold:true,color:WH,fill:{color:GR}}},{text:'Balance',options:{bold:true,color:WH,fill:{color:RD}}}];
    const msBody=(p.milestones||[]).map(m=>{const pps=m.progressPayments||[];const ppR=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);const ppT=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);const sc={done:GR,inprogress:AM,upcoming:'888780'};return[{text:m.name,options:{bold:true,fontSize:10}},{text:m.ref,options:{color:'4A3FB0',fontSize:9}},{text:fmtDate(m.date),options:{fontSize:9}},{text:m.status,options:{color:sc[m.status]||GY,fontSize:9}},{text:m.payAmt?'$'+Number(m.payAmt).toLocaleString():'—',options:{bold:true,fontSize:10}},{text:ppT?'$'+ppR.toLocaleString():'—',options:{color:GR,bold:true,fontSize:10}},{text:ppT?'$'+(ppT-ppR).toLocaleString():'—',options:{color:ppT-ppR>0?RD:GR,bold:true,fontSize:10}}];});
    s.addTable([msHdr,...msBody],{x:0.3,y:0.82,w:12.7,colW:[3.2,1.7,1.4,1.5,1.8,1.8,1.3],border:{pt:.5,color:'E0DDD5'},fill:{color:WH},fontFace:'Arial',fontSize:10,rowH:0.4});
    // SLIDE 5: Quotes
    s=prs.addSlide(); s.background={color:LT};
    addHdr(s,'QUOTES RECEIVED','CSI Divisions · California Codes');
    const qHdr=[{text:'Vendor',options:{bold:true,color:WH,fill:{color:N}}},{text:'Scope',options:{bold:true,color:WH,fill:{color:N}}},{text:'CSI',options:{bold:true,color:WH,fill:{color:N}}},{text:'Amount',options:{bold:true,color:WH,fill:{color:N}}},{text:'Status',options:{bold:true,color:WH,fill:{color:N}}}];
    const qBody=(p.quotes||[]).map(q=>{const sc={approved:GR,review:BL,new:'0D6E58',negotiating:AM};return[{text:q.vendor,options:{bold:true,fontSize:10}},{text:q.scope,options:{fontSize:9}},{text:q.csi,options:{fontSize:9}},{text:'$'+Number(q.amount).toLocaleString(),options:{bold:true,fontSize:11}},{text:q.status,options:{color:sc[q.status]||GY,bold:q.status==='approved',fontSize:9}}];});
    const qTotRow=[{text:'TOTAL QUOTED',options:{bold:true,color:WH,fill:{color:N}}},{text:'',options:{fill:{color:N}}},{text:'',options:{fill:{color:N}}},{text:'$'+total.toLocaleString(),options:{bold:true,color:WH,fill:{color:N}}},{text:'',options:{fill:{color:N}}}];
    const qApprRow=[{text:'APPROVED TOTAL',options:{bold:true,color:WH,fill:{color:GR}}},{text:'',options:{fill:{color:GR}}},{text:'',options:{fill:{color:GR}}},{text:'$'+approvedTotal.toLocaleString(),options:{bold:true,color:WH,fill:{color:GR}}},{text:'',options:{fill:{color:GR}}}];
    s.addTable([qHdr,...qBody,qTotRow,qApprRow],{x:0.3,y:0.82,w:12.7,colW:[3.0,4.6,1.4,2.0,1.7],border:{pt:.5,color:'E0DDD5'},fill:{color:WH},fontFace:'Arial',fontSize:10,rowH:0.44});
    // SLIDE 6: Inspections
    s=prs.addSlide(); s.background={color:LT};
    addHdr(s,'INSPECTIONS SCHEDULED','CBC §110 · CalOSHA');
    const iHdr=[{text:'Inspection',options:{bold:true,color:WH,fill:{color:N}}},{text:'Date',options:{bold:true,color:WH,fill:{color:N}}},{text:'Time',options:{bold:true,color:WH,fill:{color:N}}},{text:'Location',options:{bold:true,color:WH,fill:{color:N}}},{text:'Code Refs',options:{bold:true,color:WH,fill:{color:N}}},{text:'AHJ',options:{bold:true,color:WH,fill:{color:N}}}];
    const ahjL={cupertino:'Cupertino',calosha:'CalOSHA',icc:'ICC-Cert.'};
    const iBody=(p.inspections||[]).map(i=>[{text:i.name,options:{bold:true,fontSize:10}},{text:i.inspDate?new Date(i.inspDate+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'—',options:{fontSize:9}},{text:fmtTime(i.inspTime),options:{fontSize:9}},{text:i.location||'—',options:{fontSize:9}},{text:i.refs||'—',options:{fontSize:8,color:'4A3FB0'}},{text:ahjL[i.ahj]||i.ahj||'—',options:{fontSize:9}}]);
    s.addTable([iHdr,...iBody],{x:0.3,y:0.82,w:12.7,colW:[3.8,1.6,1.2,2.8,2.1,1.2],border:{pt:.5,color:'E0DDD5'},fill:{color:WH},fontFace:'Arial',fontSize:10,rowH:0.44});

    const fname=p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')+'_Dashboard.pptx';
    prs.writeFile({fileName:fname})
      .then(()=>toast('📊 PowerPoint downloaded successfully!'))
      .catch(e=>{console.error(e);toast('⚠ Download failed — '+e.message);});
  }catch(e){console.error('PPTX error:',e);toast('⚠ PowerPoint error: '+e.message);}
}


// ════ PAYMENT LEDGER EXPORTS ══════════════════════════════════════════

function exportPaymentLedgerPDF(qidFilter){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  const approved=(p.quotes||[]).filter(q=>q.status==='approved');
  const quotes=qidFilter?approved.filter(q=>q.id===qidFilter):approved;
  if(!quotes.length){toast('⚠ No approved quotes to export');return;}

  // Grand totals using invoices + partials (new system)
  let grandContract=0, grandPaid=0;
  approved.forEach(q=>{
    grandContract+=Number(q.amount||0);
    (p.invoices||[]).filter(i=>i.quoteId===q.id&&i.approvalStatus==='approved').forEach(i=>{
      if(i.paid) grandPaid+=Number(i.amount||0);
      else grandPaid+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
    });
  });
  const grandBal=grandContract-grandPaid;

  const subsHTML=quotes.map(function(q){
    // Get invoices for this quote
    const qInvs=(p.invoices||[]).filter(i=>i.quoteId===q.id&&i.approvalStatus==='approved');
    // Get vendor contract milestones
    const vc=(p.vendors||[]).find(v=>v.quoteId===q.id);
    const vMilestones=vc?vc.milestones||[]:[];

    // Calculate paid/balance using invoices
    const qPaid=qInvs.reduce(function(a,i){
      if(i.paid) return a+Number(i.amount||0);
      return a+(i.partialPayments||[]).reduce(function(b,pp){return b+Number(pp.amount||0);},0);
    },0);
    const qBal=Number(q.amount||0)-qPaid;
    const pct=q.amount?Math.min(100,Math.round(qPaid/Number(q.amount)*100)):0;
    const proofCount=qInvs.reduce(function(a,i){return a+(i.files||[]).length;},0);
    const lienCount=qInvs.reduce(function(a,i){return a+(i.lienFiles||[]).length;},0);

    // Build invoice rows
    let invRows='';
    if(qInvs.length){
      qInvs.forEach(function(inv,pi){
        const rowBg=inv.paid?'#EDF8E5':pi%2===0?'#fff':'#fafaf8';
        const msName=vMilestones.find(function(m){return m.id===inv.milestoneId;});
        const partials=inv.partialPayments||[];
        const invPaid=inv.paid?Number(inv.amount||0):partials.reduce(function(a,pp){return a+Number(pp.amount||0);},0);
        const invBal=Number(inv.amount||0)-invPaid;
        const paidRows=partials.length
          ?partials.map(function(pp){
            return '<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px">'
              +'<div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; $'+Number(pp.amount||0).toLocaleString()
              +(pp.date?' &middot; '+fmtDate(pp.date):'')
              +'</div>'
              +(pp.txnNo?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128278; Txn: <strong>'+pp.txnNo+'</strong></div>':'')
              +((pp.files||[]).length?'<div style="font-size:8px;color:#555;margin-top:1px">&#128206; '+(pp.files||[]).length+' supporting file(s)</div>':'')
              +'</div>';
          }).join('')
          :(inv.paid
            ?'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px">'
              +'<div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; Full payment'+(inv.paidDate?' &middot; '+fmtDate(inv.paidDate):'')+'</div>'
              +(inv.txnNo?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128278; Txn: <strong>'+inv.txnNo+'</strong></div>':'')
              +'</div>'
            :'');

        invRows+='<tr style="background:'+rowBg+'">'
          +'<td style="padding:5px 10px 5px 14px;font-size:10px;color:#333;border-bottom:1px solid #eee">'
            +'<strong>'+( inv.invoiceNo||'Invoice')+'</strong>'
            +(msName?'<div style="font-size:9px;color:#1A6BC4;margin-top:1px">&#128205; '+msName.name+'</div>':'')
            +(inv.description?'<div style="font-size:9px;color:#999">'+inv.description+'</div>':'')
            +paidRows
          +'</td>'
          +'<td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap">$'+Number(inv.amount||0).toLocaleString()+'</td>'
          +'<td style="padding:5px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #eee;white-space:nowrap">'+(inv.invoiceDate?fmtDate(inv.invoiceDate):'&mdash;')+'</td>'
          +'<td style="padding:5px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #eee;white-space:nowrap">'+(inv.dueDate?fmtDate(inv.dueDate):'&mdash;')+'</td>'
          +'<td style="padding:5px 10px;border-bottom:1px solid #eee">'+(inv.paid?'<span style="color:#2D6A0F;font-weight:700;font-size:10px">&#10003; Paid</span>':(invPaid>0?'<span style="color:#A86200;font-size:10px">Partial</span>':'<span style="color:#9B1F1F;font-size:10px">Pending</span>'))+'</td>'
          +'<td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap;color:#2D6A0F">$'+invPaid.toLocaleString()+'</td>'
          +'<td style="padding:5px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee;white-space:nowrap;color:'+(invBal>0?'#9B1F1F':'#2D6A0F')+'">$'+invBal.toLocaleString()+'</td>'
          +'</tr>';
      });
    } else {
      invRows='<tr><td colspan="7" style="padding:10px 14px;font-size:11px;color:#999">No approved invoices yet for this subcontractor.</td></tr>';
    }

    const progBarColor=pct===100?'#4E9A1A':pct>60?'#1A6BC4':'#D98E00';
    const balColor=qBal>0?'#9B1F1F':'#2D6A0F';

    return '<div style="margin-bottom:28px;page-break-inside:avoid">'
      +'<div style="background:#0C1B2E;color:#fff;padding:10px 14px;border-radius:6px 6px 0 0;display:flex;justify-content:space-between;align-items:center">'
        +'<div>'
          +'<div style="font-size:13px;font-weight:700">'+q.vendor+'</div>'
          +'<div style="font-size:10px;color:#8AAAC8">'+q.scope+(q.csi?' &nbsp;&middot;&nbsp; '+q.csi:'')+'</div>'
        +'</div>'
        +'<div style="text-align:right">'
          +'<div style="font-size:16px;font-weight:700">$'+Number(q.amount).toLocaleString()+'</div>'
          +'<div style="font-size:10px;color:#8AAAC8">'+pct+'% paid</div>'
        +'</div>'
      +'</div>'
      +'<table style="width:100%;border-collapse:collapse;border:1px solid #e0ddd5;border-top:none">'
        +'<thead><tr style="background:#162438">'
          +'<th style="padding:6px 10px 6px 14px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Invoice / Milestone</th>'
          +'<th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Amount</th>'
          +'<th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Invoice Date</th>'
          +'<th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Due Date</th>'
          +'<th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left">Status</th>'
          +'<th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#2D6A0F;text-align:left">Paid</th>'
          +'<th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#F09595;text-align:left">Balance</th>'
        +'</tr></thead>'
        +'<tbody>'+invRows+'</tbody>'
      +'</table>'
      +'<div style="border:1px solid #e0ddd5;border-top:none;background:#f4f3ef;padding:12px 16px">'
        +'<div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b6a64;margin-bottom:10px">Payment Summary &mdash; '+q.vendor+'</div>'
        +'<div style="display:flex;border:1px solid #e0ddd5;border-radius:6px;overflow:hidden;background:#fff">'
          +'<div style="flex:1;padding:10px 12px;border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Contract Value</div><div style="font-size:18px;font-weight:700;color:#0C1B2E">$'+Number(q.amount).toLocaleString()+'</div></div>'
          +'<div style="flex:1;padding:10px 12px;background:#ECF5E3;border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:#2D6A0F;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">&#10003; Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$'+qPaid.toLocaleString()+'</div></div>'
          +'<div style="flex:1;padding:10px 12px;background:'+(qBal>0?'#FDEAEA':'#ECF5E3')+';border-right:1px solid #e0ddd5;text-align:center"><div style="font-size:9px;color:'+balColor+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Balance Due</div><div style="font-size:18px;font-weight:700;color:'+balColor+'">$'+qBal.toLocaleString()+'</div></div>'
          +'<div style="flex:1;padding:10px 12px;text-align:center"><div style="font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Progress</div><div style="font-size:18px;font-weight:700;color:'+(pct===100?'#2D6A0F':'#0C1B2E')+'">'+pct+'%</div><div style="height:5px;background:#e0ddd5;border-radius:3px;overflow:hidden;margin-top:5px"><div style="height:100%;width:'+pct+'%;background:'+progBarColor+';border-radius:3px"></div></div></div>'
        +'</div>'
        +'<div style="margin-top:8px;font-size:9px;color:#999;display:flex;gap:16px;flex-wrap:wrap;padding:0 2px">'
          +'<span>Invoices: '+qInvs.length+'</span>'
          +'<span>Proof documents: '+proofCount+' file(s)</span>'
          +'<span>Lien waivers: '+lienCount+' file(s)</span>'
          +(q.date?'<span style="margin-left:auto">Quote date: '+q.date+'</span>':'')
        +'</div>'
      +'</div>'
    +'</div>';
  }).join('');

  const html='<!DOCTYPE html><html><head><meta charset="UTF-8"/>'
    +'<title>Payment Ledger &mdash; '+p.name+'</title>'
    +'<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:19px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body>'
    +'<h1>'+(qidFilter?quotes[0].vendor+' &mdash; Payment Statement':'Payment Ledger &mdash; All Subcontractors')+'</h1>'
    +'<div class="meta">'+p.name+' &nbsp;&middot;&nbsp; '+getProjectAddressLine(p)+'<br>Livio Address: '+LIVIO_OFFICE_ADDRESS+'<br>Permit: '+(p.permit||'&mdash;')+' &nbsp;&middot;&nbsp; '+LIVIO_COMPANY_NAME+' &nbsp;&middot;&nbsp; '+new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})+'</div>'
    +subsHTML
    +'<div style="margin-top:20px;font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">'+LIVIO_COMPANY_NAME+' &nbsp;&middot;&nbsp; '+LIVIO_OFFICE_ADDRESS+' &nbsp;&middot;&nbsp; '+p.name+' &nbsp;&middot;&nbsp; Generated '+new Date().toLocaleDateString()+'</div>'
    +'</body></html>';

  const win=window.open('','_blank');
  if(!win){toast('&#9888; Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(function(){win.focus();win.print();},600);
  toast('&#128424; Ledger report opened &mdash; Print &#8594; Save as PDF');
}

function exportPaymentLedgerExcel(qidFilter){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  toast('📊 Building Excel ledger…',4000);
  if(window.XLSX){_doPaymentExcel(p,qidFilter);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doPaymentExcel(p,qidFilter);
    s.onerror=()=>toast('⚠ Could not load Excel library — check internet connection');
    document.head.appendChild(s);
  }
}

function _doPaymentExcel(p, qidFilter){
  try{
    const XLSX=window.XLSX;
    const wb=XLSX.utils.book_new();
    const approved=(p.quotes||[]).filter(q=>q.status==='approved');
    const quotes=qidFilter?approved.filter(q=>q.id===qidFilter):approved;

    // ── SUMMARY SHEET ──
    let contractTotal=0,paidTotal=0;
    approved.forEach(q=>{
      contractTotal+=Number(q.amount||0);
      (q.payMilestones||[]).forEach(pm=>{if(pm.paid)paidTotal+=Number(pm.amount||0);});
    });
    const sumRows=[
      ['PAYMENT LEDGER'],
      ['Project:', p.name],
      ['Project Address:', getProjectAddressLine(p)],
      ['Livio Address:', LIVIO_OFFICE_ADDRESS],
      ['Permit:', p.permit||''],
      ['Date:', new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})],
    ];
    const sumSheet=XLSX.utils.aoa_to_sheet(sumRows);
    sumSheet['!cols']=[{wch:28},{wch:20}];
    XLSX.utils.book_append_sheet(wb, sumSheet, 'Summary');

    // ── FULL LEDGER SHEET ──
    const ledgerData=[
      ['Subcontractor','Scope','CSI','Contract Amount','Payment Milestone','Milestone Amount','Due Date','Status','Date Paid','Balance','Proof Files','Lien Waiver']
    ];
    quotes.forEach(q=>{
      const pms=q.payMilestones||[];
      if(!pms.length){
        ledgerData.push([q.vendor,q.scope,q.csi||'',Number(q.amount||0),'(no milestones)','','','','',Number(q.amount||0),'','']);
      } else {
        pms.forEach((pm,i)=>{
          ledgerData.push([
            q.vendor,
            q.scope,
            q.csi||'',
            Number(q.amount||0),
            pm.name,
            Number(pm.amount||0),
            pm.dueDate||'',
            pm.paid?'Paid':'Pending',
            pm.paidDate||'',
            pm.paid?0:Number(pm.amount||0),
            (pm.files||[]).length,
            (pm.lienFiles||[]).length,
          ]);
        });
        // Subtotal row
        const qPaid=pms.filter(pm=>pm.paid).reduce((a,pm)=>a+Number(pm.amount||0),0);
        ledgerData.push(['','','','','SUBTOTAL — '+q.vendor,'','' ,'','',Number(q.amount||0)-qPaid,'','']);
        ledgerData.push([]);
      }
    });
    // Grand total
    ledgerData.push(['TOTAL','','','','' ,'','','','',contractTotal-paidTotal,'','']);

    const ledSheet=XLSX.utils.aoa_to_sheet(ledgerData);
    ledSheet['!cols']=[{wch:28},{wch:30},{wch:8},{wch:18},{wch:32},{wch:16},{wch:12},{wch:10},{wch:12},{wch:14},{wch:12},{wch:12}];
    XLSX.utils.book_append_sheet(wb, ledSheet, 'Full Ledger');

    // ── PER-SUBCONTRACTOR SHEETS ──
    quotes.forEach(q=>{
      const pms=q.payMilestones||[];
      const qPaid=pms.filter(pm=>pm.paid).reduce((a,pm)=>a+Number(pm.amount||0),0);
      const sheetData=[
        [q.vendor],
        ['Scope:', q.scope],
        ['CSI Division:', q.csi||''],
        ['Contract Amount:', Number(q.amount||0)],
        ['Total Paid:', qPaid],
        ['Balance Due:', Number(q.amount||0)-qPaid],
        [],
        ['Payment Milestone','Amount','Due Date','Status','Date Paid','Balance Due','Proof Files','Lien Waiver'],
      ];
      pms.forEach(pm=>{
        sheetData.push([
          pm.name,
          Number(pm.amount||0),
          pm.dueDate||'',
          pm.paid?'Paid':'Pending',
          pm.paidDate||'',
          pm.paid?0:Number(pm.amount||0),
          (pm.files||[]).length,
          (pm.lienFiles||[]).length,
        ]);
      });
      if(!pms.length) sheetData.push(['No payment milestones added yet.']);
      sheetData.push([]);
      sheetData.push(['TOTAL',Number(q.amount||0),'','','',Number(q.amount||0)-qPaid,'','']);

      const ws=XLSX.utils.aoa_to_sheet(sheetData);
      ws['!cols']=[{wch:32},{wch:16},{wch:12},{wch:10},{wch:12},{wch:14},{wch:12},{wch:12}];
      // Safe sheet name (max 31 chars, no special chars)
      const sname=q.vendor.replace(/[:\\\/\?\*\[\]]/g,'').slice(0,28);
      XLSX.utils.book_append_sheet(wb, ws, sname);
    });

    const fname=(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'_PaymentLedger.xlsx';
    XLSX.writeFile(wb, fname);
    toast('📊 Excel ledger downloaded: '+fname);
  }catch(e){
    console.error('Excel error:',e);
    toast('⚠ Excel error: '+e.message);
  }
}


// ════ MILESTONE PAYMENT EXPORTS ══════════════════════════════════════

function exportMilestonePDF(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  const ms=p.milestones||[];
  if(!ms.length){toast('⚠ No milestones to export');return;}

  const contractTotal=ms.reduce((a,m)=>a+Number(m.payAmt||0),0);
  const paidTotal=ms.reduce((a,m)=>a+(m.progressPayments||[]).filter(pp=>pp.paid).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
  const scheduledTotal=ms.reduce((a,m)=>a+(m.progressPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
  const balance=scheduledTotal-paidTotal;

  const msRows=ms.map(function(m,mi){
    const pps=m.progressPayments||[];
    const ppPaid=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);
    const ppTotal=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);
    const ppBal=ppTotal-ppPaid;
    const pct=ppTotal?Math.min(100,Math.round(ppPaid/ppTotal*100)):0;
    const rowBg=mi%2===0?'#fff':'#fafaf8';
    const statusColors={done:'#2D6A0F',inprogress:'#A86200',upcoming:'#6B6A64'};
    const statusLabels={done:'Done',inprogress:'In Progress',upcoming:'Upcoming'};

    // Progress payment sub-rows
    const ppRows=pps.map(function(pp,pi){
      const ppRowBg=pp.paid?'#F3FCF0':'#FEFDF9';
      return '<tr style="background:'+ppRowBg+'">'
        +'<td style="padding:4px 10px 4px 32px;font-size:10px;color:#555;border-bottom:1px solid #f0ede6" colspan="2">'
          +'<span style="color:'+(pp.paid?'#2D6A0F':'#ccc')+';margin-right:5px">'+(pp.paid?'&#10003;':'&#9675;')+'</span>'
          +pp.name+(pp.dueDate?' <span style="color:#999;font-size:9px">Due: '+pp.dueDate+'</span>':'')
        +'</td>'
        +'<td style="padding:4px 10px;font-size:10px;font-weight:600;border-bottom:1px solid #f0ede6;white-space:nowrap">$'+Number(pp.amount||0).toLocaleString()+'</td>'
        +'<td style="padding:4px 10px;font-size:10px;border-bottom:1px solid #f0ede6">'+(pp.paid?'<span style="color:#2D6A0F;font-weight:600">&#10003; Paid</span>':'<span style="color:#A86200">Pending</span>')+'</td>'
        +'<td style="padding:4px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #f0ede6">'+(pp.paidDate||'&mdash;')+'</td>'
        +'<td style="padding:4px 10px;font-size:10px;font-weight:600;border-bottom:1px solid #f0ede6;white-space:nowrap">'+(pp.paid?'<span style="color:#2D6A0F">$0</span>':'<span style="color:#9B1F1F">$'+Number(pp.amount||0).toLocaleString()+'</span>')+'</td>'
        +'<td style="padding:4px 10px;font-size:9px;color:#6b6a64;border-bottom:1px solid #f0ede6">'+((pp.files||[]).length?'&#128206; '+(pp.files||[]).length:'&mdash;')+'</td>'
        +'</tr>';
    }).join('');

    const progColor=pct===100?'#4E9A1A':pct>60?'#1A6BC4':'#D98E00';

    return '<tr style="background:'+rowBg+';border-top:2px solid #e0ddd5">'
        +'<td style="padding:9px 10px 9px 14px;border-bottom:1px solid #e0ddd5">'
          +'<div style="display:flex;align-items:center;gap:7px">'
            +'<div style="width:9px;height:9px;border-radius:50%;background:'+(m.status==='done'?'#4E9A1A':m.status==='inprogress'?'#D98E00':'#aaa')+';flex-shrink:0"></div>'
            +'<div>'
              +'<div style="font-size:12px;font-weight:700;color:#0C1B2E">'+m.name+'</div>'
              +(m.notes?'<div style="font-size:9px;color:#999">'+m.notes+'</div>':'')
            +'</div>'
          +'</div>'
        +'</td>'
        +'<td style="padding:9px 10px;border-bottom:1px solid #e0ddd5"><span style="background:#EEEDFD;color:#4A3FB0;font-size:9px;font-weight:700;padding:2px 6px;border-radius:3px">'+m.ref+'</span></td>'
        +'<td style="padding:9px 10px;font-size:11px;font-weight:700;color:#0C1B2E;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(m.payAmt?'$'+Number(m.payAmt).toLocaleString():'&mdash;')+'</td>'
        +'<td style="padding:9px 10px;border-bottom:1px solid #e0ddd5"><span style="color:'+(statusColors[m.status]||'#555')+';font-size:10px;font-weight:700">'+( statusLabels[m.status]||m.status)+'</span></td>'
        +'<td style="padding:9px 10px;font-size:10px;color:#6b6a64;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(m.date||'&mdash;')+'</td>'
        +'<td style="padding:9px 10px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(ppTotal?'$'+ppPaid.toLocaleString():'&mdash;')+'</td>'
        +'<td style="padding:9px 10px;font-size:11px;font-weight:700;color:'+(ppBal>0?'#9B1F1F':'#2D6A0F')+';border-bottom:1px solid #e0ddd5;white-space:nowrap">'+(ppTotal?'$'+ppBal.toLocaleString():'&mdash;')+'</td>'
        +'<td style="padding:9px 10px;border-bottom:1px solid #e0ddd5">'
          +(ppTotal?'<div style="width:70px;height:5px;background:#e0ddd5;border-radius:3px;overflow:hidden;margin-bottom:2px"><div style="height:100%;width:'+pct+'%;background:'+progColor+';border-radius:3px"></div></div><span style="font-size:9px;color:'+progColor+';font-weight:700">'+pct+'%</span>':'&mdash;')
        +'</td>'
      +'</tr>'
      +ppRows;
  }).join('');

  // Grand total row
  const totalRow='<tr style="background:#0C1B2E">'
    +'<td style="padding:10px 14px;font-size:11px;font-weight:700;color:#fff" colspan="2">TOTAL</td>'
    +'<td style="padding:10px 10px;font-size:13px;font-weight:700;color:#fff;white-space:nowrap">$'+contractTotal.toLocaleString()+'</td>'
    +'<td colspan="2"></td>'
    +'<td style="padding:10px 10px;font-size:13px;font-weight:700;color:#9FE1CB;white-space:nowrap">$'+paidTotal.toLocaleString()+'</td>'
    +'<td style="padding:10px 10px;font-size:13px;font-weight:700;color:'+(balance>0?'#F09595':'#9FE1CB')+';white-space:nowrap">$'+balance.toLocaleString()+'</td>'
    +'<td></td>'
    +'</tr>';

  const html='<!DOCTYPE html><html><head><meta charset="UTF-8"/>'
    +'<title>Milestone Payment Report &mdash; '+p.name+'</title>'
    +'<style>'
    +'*{box-sizing:border-box;margin:0;padding:0}'
    +'body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}'
    +'h1{font-size:19px;margin-bottom:3px;color:#0C1B2E}'
    +'.meta{color:#6b6a64;font-size:10px;margin-bottom:16px;line-height:1.7}'
    +'@media print{body{padding:14px}@page{margin:12mm}}'
    +'</style></head><body>'
    +'<h1>Milestone Payment Report</h1>'
    +'<div class="meta">'
      +p.name+' &nbsp;&middot;&nbsp; '+getProjectAddressLine(p)+'<br>'
      +'Livio Address: '+LIVIO_OFFICE_ADDRESS+'<br>'
      +'Permit: '+(p.permit||'&mdash;')+' &nbsp;&middot;&nbsp; '+(p.type||'')+' &nbsp;&middot;&nbsp; '+LIVIO_COMPANY_NAME+' &nbsp;&middot;&nbsp; '+new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})
    +'</div>'
    +'<table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:18px">'
      +'<thead><tr style="background:#0C1B2E">'
        +'<th style="padding:8px 10px 8px 14px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left;width:24%">Milestone</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">CBC Ref.</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Contract Amt.</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Status</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Target Date</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#2D6A0F;text-align:left">&#10003; Received</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#F09595;text-align:left">Balance</th>'
        +'<th style="padding:8px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#fff;text-align:left">Progress</th>'
      +'</tr></thead>'
      +'<tbody>'+msRows+totalRow+'</tbody>'
    +'</table>'
    +'<div style="font-size:9px;color:#9b9a96;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">'+LIVIO_COMPANY_NAME+' &nbsp;&middot;&nbsp; '+LIVIO_OFFICE_ADDRESS+' &nbsp;&middot;&nbsp; '+p.name+' &nbsp;&middot;&nbsp; Generated '+new Date().toLocaleDateString()+'</div>'
    +'</body></html>';

  const win=window.open('','_blank');
  if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html); win.document.close();
  setTimeout(function(){win.focus();win.print();},600);
  toast('🖨 Milestone report opened — Print → Save as PDF');
}

function exportMilestoneExcel(){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  toast('📊 Building Excel…',3500);
  if(window.XLSX){_doMilestoneExcel(p);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doMilestoneExcel(p);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}

function _doMilestoneExcel(p){
  try{
    const XLSX=window.XLSX;
    const wb=XLSX.utils.book_new();
    const ms=p.milestones||[];

    // ── Ledger Sheet ──
    const ledgerData=[
      ['MILESTONE PAYMENT LEDGER — '+p.name],
      ['Project:', p.name, '', 'Project Address:', getProjectAddressLine(p)],
      ['Livio Address:', LIVIO_OFFICE_ADDRESS, '', 'Type:', p.type||''],
      ['Permit:', p.permit||''],
      ['Generated:', new Date().toLocaleDateString()],
      [],
      ['Milestone','CBC Ref.','Target Date','Status','Contract Amount','Progress Payment','Amount','Due Date','Status','Date Received','Balance','Proof Files'],
    ];

    let grandContract=0, grandReceived=0, grandScheduled=0;
    ms.forEach(m=>{
      grandContract+=Number(m.payAmt||0);
      const pps=m.progressPayments||[];
      const ppReceived=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);
      const ppScheduled=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);
      grandReceived+=ppReceived;
      grandScheduled+=ppScheduled;

      if(!pps.length){
        ledgerData.push([m.name, m.ref, m.date||'', m.status, Number(m.payAmt||0), '(no progress payments)', '', '', '', '', Number(m.payAmt||0), '']);
      } else {
        pps.forEach((pp,i)=>{
          ledgerData.push([
            i===0?m.name:'',
            i===0?m.ref:'',
            i===0?(m.date||''):'',
            i===0?m.status:'',
            i===0?Number(m.payAmt||0):'',
            pp.name,
            Number(pp.amount||0),
            pp.dueDate||'',
            pp.paid?'Paid':'Pending',
            pp.receivedDate||'',
            pp.paid?0:Number(pp.amount||0),
            (pp.files||[]).length,
          ]);
        });
        // Sub-total per milestone
        ledgerData.push(['','','','','SUBTOTAL — '+m.name,'','','','','',ppScheduled-ppReceived,'']);
        ledgerData.push([]);
      }
    });
    // Grand total
    ledgerData.push(['TOTAL','','','',grandContract,'','','','','',(grandScheduled-grandReceived),'']);

    const ws=XLSX.utils.aoa_to_sheet(ledgerData);
    ws['!cols']=[{wch:32},{wch:14},{wch:12},{wch:14},{wch:16},{wch:28},{wch:14},{wch:12},{wch:10},{wch:14},{wch:14},{wch:12}];
    XLSX.utils.book_append_sheet(wb, ws, 'Milestone Ledger');

    // ── Summary Sheet ──
    const sumData=[
      ['MILESTONE PAYMENT SUMMARY'],
      [],
      ['Milestone','CBC Ref.','Date','Status','Contract Amt.','Total Scheduled','Total Received','Balance Due','Progress %'],
    ];
    ms.forEach(m=>{
      const pps=m.progressPayments||[];
      const ppReceived=pps.filter(pp=>pp.paid).reduce((a,pp)=>a+Number(pp.amount||0),0);
      const ppScheduled=pps.reduce((a,pp)=>a+Number(pp.amount||0),0);
      const pct=ppScheduled?Math.round(ppReceived/ppScheduled*100):0;
      sumData.push([m.name, m.ref, m.date||'', m.status, Number(m.payAmt||0), ppScheduled, ppReceived, ppScheduled-ppReceived, pct+'%']);
    });
    sumData.push([]);
    sumData.push(['TOTAL','','','',grandContract,grandScheduled,grandReceived,grandScheduled-grandReceived, grandScheduled?Math.round(grandReceived/grandScheduled*100)+'%':'0%']);

    const ws2=XLSX.utils.aoa_to_sheet(sumData);
    ws2['!cols']=[{wch:32},{wch:14},{wch:12},{wch:14},{wch:16},{wch:18},{wch:16},{wch:14},{wch:12}];
    XLSX.utils.book_append_sheet(wb, ws2, 'Summary');

    const fname=(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'_MilestoneLedger.xlsx';
    XLSX.writeFile(wb, fname);
    toast('📊 Milestone Excel downloaded: '+fname);
  }catch(e){
    console.error(e);
    toast('⚠ Excel error: '+e.message);
  }
}


// ════ INVOICE TRACKER ═════════════════════════════════════════════════

function renderInvoices(){
  const p=proj(); if(!p) return;
  const invs=p.invoices||[];
  const approved=(p.quotes||[]).filter(q=>q.status==='approved');
  vEl('ct-inv').textContent=invs.length;

  // Summary totals — contract value from signed vendor contracts
  const contractTotal=(p.vendors||[]).reduce((a,v)=>a+Number(v.amount||0),0);
  const invoicedTotal=invs.reduce((a,i)=>a+Number(i.amount||0),0);
  const paidTotal=invs.filter(i=>i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
  const dueTotal=invs.filter(i=>!i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
  vEl('inv-contract').textContent=fmtMoney(contractTotal);
  vEl('inv-invoiced').textContent=fmtMoney(invoicedTotal);
  vEl('inv-paid').textContent=fmtMoney(paidTotal);
  vEl('inv-due').textContent=fmtMoney(dueTotal);

  const el=vEl('inv-content'); if(!el) return;

  if(!invs.length){
    el.innerHTML=`<div class="empty"><div class="empty-ic">🧾</div>No invoices yet. Click + Add Invoice to start tracking.</div>`;
    const cr=vEl('inv-chart-row');if(cr)cr.style.display='none';
    return;
  }
  const cr=vEl('inv-chart-row');if(cr)cr.style.display='grid';

  invs.forEach(inv=>regFiles(inv.files||[]));

  // Group invoices by subcontractor (vendor from quotes)
  const byVendor={};
  invs.forEach(inv=>{
    const key=inv.vendor||'Unassigned';
    if(!byVendor[key]) byVendor[key]={vendor:key,quoteId:inv.quoteId,invs:[]};
    byVendor[key].invs.push(inv);
  });

  const byVendorArr=Object.values(byVendor);
  el.innerHTML=byVendorArr.map(group=>{
    const q=approved.find(x=>x.id===group.quoteId)||null;
    const contractAmt=q?Number(q.amount||0):0;
    const totalInvoiced=group.invs.reduce((a,i)=>a+Number(i.amount||0),0);
    const totalPaid=group.invs.filter(i=>i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
    const totalDue=group.invs.filter(i=>!i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
    const pct=contractAmt?Math.min(100,Math.round(totalInvoiced/contractAmt*100)):0;
    const paidPct=totalInvoiced?Math.min(100,Math.round(totalPaid/totalInvoiced*100)):0;

    const rows=group.invs.map((inv,idx)=>{
      const bg=idx%2===0?'#fff':'var(--bg)';
      const filesCell=`<div style="display:flex;flex-direction:column;gap:4px">
        ${(inv.files||[]).length
          ?(inv.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:5px;background:var(--amber-l);border:1px solid #F5D9A0;border-radius:5px;padding:3px 8px">
              <span style="font-size:12px">${fileIcon(f.name)}</span>
              <span style="font-size:10px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px" title="${f.name}">${f.name}</span>
              <button class="a-dl" style="background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0" onclick="dlFile('${f.id}')" title="Download">⬇</button>
            </div>`).join('')
          :'<span style="font-size:10px;color:var(--muted);font-style:italic">No files yet</span>'
        }
        <button class="btn btn-xs" style="background:var(--amber-l);color:var(--amber);border:1px solid #F5D9A0;font-size:10px;padding:3px 8px;margin-top:2px;text-align:left" onclick="openModal('invfiles','${inv.id}')">
          📎 ${(inv.files||[]).length ? 'Add / Edit Files' : 'Attach Invoice'}
        </button>
      </div>`;

      // Approval cell
      const st=inv.approvalStatus||'pending';
      const approvalCell=st==='approved'
        ?`<div style="background:var(--green-l);border:1px solid #B8DCA0;border-radius:7px;padding:7px 10px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:11px;font-weight:700;color:var(--green)">✓ Approved</span>
              <button onclick="rejectInvoice('${inv.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Undo</button>
            </div>
            <span style="font-size:9px;color:var(--green);opacity:.8">Visible in Payments tab</span>
          </div>`
        : st==='rejected'
        ?`<div style="background:var(--red-l);border:1px solid #F5C0C0;border-radius:7px;padding:7px 10px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:11px;font-weight:700;color:var(--red)">✗ Rejected</span>
              <button onclick="approveInvoice('${inv.id}')" style="font-size:9px;background:none;border:none;color:var(--muted);cursor:pointer;text-decoration:underline;padding:0">Approve</button>
            </div>
            <span style="font-size:9px;color:var(--red);opacity:.8">Not in Payments tab</span>
          </div>`
        :`<div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:7px 10px">
            <div style="font-size:10px;color:var(--muted);margin-bottom:6px">Awaiting approval</div>
            <div style="display:flex;gap:5px">
              <button onclick="approveInvoice('${inv.id}')" class="btn btn-green btn-xs" style="flex:1;justify-content:center;font-size:10px">✓ Approve</button>
              <button onclick="rejectInvoice('${inv.id}')" class="btn btn-red btn-xs" style="flex:1;justify-content:center;font-size:10px">✗ Reject</button>
            </div>
          </div>`;

      // Get milestone name
      const invVc=(p.vendors||[]).find(v=>v.quoteId===inv.quoteId);
      const invMs=invVc?(invVc.milestones||[]).find(m=>m.id===inv.milestoneId):null;
      return`<tr style="background:${bg};border-left:3px solid ${st==='approved'?'var(--green-m)':st==='rejected'?'var(--red-m)':'var(--border)'}">
        <td style="padding:8px 10px">
          <div style="font-size:12px;font-weight:600;color:var(--navy)">${inv.invoiceNo||'—'}</div>
          ${invMs?`<div style="font-size:10px;color:var(--blue);margin-top:2px">📍 ${invMs.name}</div>`:''}
        </td>
        <td style="padding:8px 10px;font-size:11px;color:var(--text)">${inv.description||'—'}</td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${inv.invoiceDate?fmtDate(inv.invoiceDate):'—'}</td>
        <td style="padding:8px 10px;font-size:10px;color:${inv.dueDate&&new Date(inv.dueDate+'T12:00:00')<new Date()&&!inv.paid?'var(--red)':'var(--muted)'};white-space:nowrap">${inv.dueDate?fmtDate(inv.dueDate):'—'}</td>
        <td style="padding:8px 10px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--text)">${fmtMoney(inv.amount||0)}</span></td>
        <td style="padding:6px 8px">${approvalCell}</td>
        <td style="padding:6px 8px">${filesCell}</td>
        <td style="padding:8px 10px;white-space:nowrap">
          <div style="display:flex;flex-direction:column;gap:3px">
            <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 6px" onclick="openModal('invoice','${inv.id}')">✏ Edit</button>
            <button class="btn btn-teal btn-xs" style="font-size:9px;padding:2px 6px" onclick="openInvPayment('${inv.id}')">💵 Payment</button>
            <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 6px" onclick="delInvoice('${inv.id}')">🗑 Del</button>
          </div>
        </td>
      </tr>
      ${(inv.payments||[]).length?`<tr style="background:#F0F8FF"><td colspan="8" style="padding:6px 12px">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--blue);margin-bottom:4px">💵 Partial Payments</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${(inv.payments||[]).map(pp=>`<div style="display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #B0D0F0;border-radius:5px;padding:4px 8px;font-size:10px">
            <span style="font-weight:700;color:var(--blue)">${fmtMoney(pp.amount)}</span>
            <span style="color:var(--muted)">${pp.date?fmtDate(pp.date):''}</span>
            ${pp.note?`<span style="color:var(--text)">${pp.note}</span>`:''}
            <button onclick="deleteInvPayment('${inv.id}','${pp.id}')" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:11px;padding:0 2px" title="Remove">×</button>
          </div>`).join('')}
        </div>
        <div style="margin-top:4px;font-size:10px;color:var(--muted)">Total paid: <strong style="color:var(--green)">${fmtMoney((inv.payments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0))}</strong></div>
      </td></tr>`:''}
      `;
    }).join('');

    return`<div class="panel pay-vendor-card" data-vendor="${q?.id||group.quoteId||''}" style="margin-bottom:16px">
      <!-- Vendor header -->
      <div style="background:var(--navy);padding:11px 16px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <span style="font-size:14px;font-weight:700;color:#fff">${group.vendor}</span>
          ${q?`<span style="font-size:11px;color:#8AAAC8;margin-left:8px">${q.scope||''}</span>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          ${contractAmt?`<span style="font-size:11px;color:#8AAAC8">Contract: <strong style="color:#fff">${fmtMoney(contractAmt)}</strong></span>`:''}
          <span style="font-size:11px;color:#8AAAC8">Invoiced: <strong style="color:#fff">${fmtMoney(totalInvoiced)}</strong></span>
        </div>
      </div>
      <!-- Progress bar -->
      <div style="padding:10px 16px;border-bottom:1px solid var(--border);background:var(--bg);display:flex;align-items:center;gap:16px">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:3px">
            <span style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.4px">vs Contract</span>
            <span style="font-size:11px;font-weight:700;color:${pct>100?'var(--red)':'var(--text)'}">${pct}%</span>
          </div>
          <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${Math.min(pct,100)}%;background:${pct>100?'var(--red-m)':pct>80?'var(--amber-m)':'var(--blue-m)'};border-radius:3px;transition:.5s"></div>
          </div>
        </div>
        <div style="display:flex;gap:16px;flex-shrink:0">
          <div style="text-align:right"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">✓ Paid</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">${fmtMoney(totalPaid)}</div></div>
          <div style="text-align:right"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">Due</div><div style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${totalDue>0?'var(--red)':'var(--green)'}">${fmtMoney(totalDue)}</div></div>
        </div>
      </div>
      <!-- Invoice table -->
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <thead><tr style="background:var(--bg)">
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:10%">Invoice #</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:16%">Description</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:9%">Invoice Date</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--red);text-align:left;border-bottom:1px solid var(--border);width:9%">Due Date</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:8%">Amount</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--green);text-align:left;border-bottom:1px solid var(--border);width:16%">✓ Approval</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--amber);text-align:left;border-bottom:1px solid var(--border);width:18%">🧾 Invoice File</th>
          <th style="padding:7px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:7%">Act.</th>
        </tr></thead>
        <tbody>${rows}</tbody>
        <!-- Sub-total row -->
        <tr style="background:var(--navy)">
          <td colspan="4" style="padding:8px 10px;font-size:11px;font-weight:700;color:#fff">TOTAL — ${group.invs.length} invoice(s)</td>
          <td style="padding:8px 10px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:#fff">${fmtMoney(totalInvoiced)}</td>
          <td style="padding:8px 10px;font-size:11px;font-weight:700;color:#9FE1CB">✓ ${fmtMoney(totalPaid)}</td>
          <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${totalDue>0?'#F09595':'#9FE1CB'}">Due: ${fmtMoney(totalDue)}</td>
          <td></td>
        </tr>
      </table>
    </div>`;
  }).join('');

}

function approveInvoice(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  if(!inv.vcId&&inv.quoteId){
    const linkedVc=(p.vendors||[]).find(v=>v.quoteId===inv.quoteId);
    if(linkedVc) inv.vcId=linkedVc.id;
  }
  inv.approvalStatus='approved';
  saveDB();renderAll();toast('✓ Invoice approved — now visible in Payments');
}
function rejectInvoice(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  inv.approvalStatus='rejected';
  saveDB();renderAll();toast('✗ Invoice rejected');
}

// ── Partial Payments ──
function openInvPayment(invId){
  vEl('invpay-inv-id').value=invId;
  vEl('invpay-date').value=new Date().toISOString().slice(0,10);
  vEl('invpay-amount').value='';
  vEl('invpay-note').value='';
  const fp=vEl('invpay-proof');if(fp)fp.value='';
  vEl('mo-inv-payment').classList.add('open');
}
function closeInvPayment(){vEl('mo-inv-payment').classList.remove('open');}
function saveInvPayment(){
  const invId=vEl('invpay-inv-id').value;
  const date=vEl('invpay-date').value;
  const amount=parseFloat(vEl('invpay-amount').value||'0');
  const note=vEl('invpay-note').value.trim();
  if(!date||!amount){toast('⚠ Date and amount are required');return;}
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===invId);if(!inv)return;
  if(!inv.payments)inv.payments=[];
  const fileInput=vEl('invpay-proof');
  if(fileInput&&fileInput.files&&fileInput.files[0]){
    const file=fileInput.files[0];
    const reader=new FileReader();
    reader.onload=function(e){
      const payId='pp_'+Math.random().toString(36).slice(2,10);
      inv.payments.push({id:payId,date,amount,note,proofName:file.name,proofData:e.target.result});
      saveDB();closeInvPayment();renderAll();toast('💵 Payment recorded: '+fmtMoney(amount));
    };
    reader.readAsDataURL(file);
  } else {
    const payId='pp_'+Math.random().toString(36).slice(2,10);
    inv.payments.push({id:payId,date,amount,note});
    saveDB();closeInvPayment();renderAll();toast('💵 Payment recorded: '+fmtMoney(amount));
  }
}
function deleteInvPayment(invId,payId){
  if(!confirm('Remove this payment record?'))return;
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===invId);if(!inv)return;
  inv.payments=(inv.payments||[]).filter(x=>x.id!==payId);
  saveDB();renderAll();toast('🗑 Payment record removed');
}

function invManualVendorChange(sel){
  const otherRow=vEl('f-inv-manual-vendor-other-row');
  if(otherRow) otherRow.style.display=sel.value==='__other__'?'':'none';
}

function invSwitchSource(mode){
  const contractBtn=document.getElementById('inv-src-contract');
  const manualBtn=document.getElementById('inv-src-manual');
  const contractSec=document.getElementById('inv-contract-section');
  const manualSec=document.getElementById('inv-manual-section');
  if(!contractBtn||!manualBtn)return;
  if(mode==='contract'){
    contractBtn.style.background='var(--navy)';contractBtn.style.color='#fff';contractBtn.style.borderColor='var(--navy)';
    manualBtn.style.background='#fff';manualBtn.style.color='var(--muted)';manualBtn.style.borderColor='var(--border)';
    if(contractSec)contractSec.style.display='';
    if(manualSec)manualSec.style.display='none';
  } else {
    manualBtn.style.background='var(--navy)';manualBtn.style.color='#fff';manualBtn.style.borderColor='var(--navy)';
    contractBtn.style.background='#fff';contractBtn.style.color='var(--muted)';contractBtn.style.borderColor='var(--border)';
    if(contractSec)contractSec.style.display='none';
    if(manualSec)manualSec.style.display='';
  }
}

function invUpdateMilestones(rawQid){
  const p=proj();if(!p)return;
  const sel=vEl('f-inv-milestone');if(!sel)return;
  let vc;
  if(rawQid&&rawQid.startsWith('vc_')){
    // Standalone vendor contract selected
    const vcId=rawQid.replace('vc_','');
    vc=(p.vendors||[]).find(v=>v.id===vcId);
  } else if(rawQid&&rawQid!=='__other__'){
    // Approved quote selected — find vendor contract by quoteId first, then by vendor name
    vc=(p.vendors||[]).find(v=>v.quoteId===rawQid);
    if(!vc){
      const q=(p.quotes||[]).find(x=>x.id===rawQid);
      if(q) vc=(p.vendors||[]).find(v=>v.vendor===q.vendor||(q.vendor&&v.vendor&&v.vendor.toLowerCase()===q.vendor.toLowerCase()));
    }
  }
  const ms=(vc&&vc.milestones)||[];
  sel.innerHTML='<option value="">-- Select milestone --</option>'
    +ms.map(m=>`<option value="${m.id}">${m.name}${m.amount?' — $'+Number(m.amount||0).toLocaleString():''}</option>`).join('');
  const info=vEl('f-inv-ms-info');if(info)info.style.display='none';
  // Show hint if no milestones
  if(!ms.length&&rawQid&&rawQid!=='__other__'){
    sel.innerHTML='<option value="">-- No milestones on this contract --</option>';
  }
}
function invMilestoneSelected(msId, rawQid){
  const p=proj();if(!p)return;
  let vc;
  if(rawQid&&rawQid.startsWith('vc_')){
    const vcId=rawQid.replace('vc_','');
    vc=(p.vendors||[]).find(v=>v.id===vcId);
  } else {
    vc=(p.vendors||[]).find(v=>v.quoteId===rawQid);
  }
  const ms=vc?(vc.milestones||[]).find(m=>m.id===msId):null;
  const info=vEl('f-inv-ms-info');
  if(info&&ms){
    info.style.display='';
    info.textContent='Milestone value: $'+Number(ms.amount||0).toLocaleString()+(ms.dueDate?' · Due: '+ms.dueDate:'');
    const amtEl=vEl('f-inv-amt');
    if(amtEl&&!amtEl.value) amtEl.value=ms.amount||'';
  } else if(info){info.style.display='none';}
}
function updateInvTxn(iid,val){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  inv.txnNo=val;saveDB();toast('✓ Transaction # saved');
}

function renderPayPieChart(approved, p){
  const panel=vEl('pay-pie-panel');
  const svgWrap=vEl('pay-pie-svg-wrap');
  const legend=vEl('pay-pie-legend');
  const filterBar=vEl('pay-filter-bar');
  const vendorChecks=vEl('pay-vendor-checks');
  if(!panel||!svgWrap||!legend){console.warn('Pie chart elements missing');return;}

  if(!approved.length){if(panel)panel.style.display='none';if(filterBar)filterBar.style.display='none';return;}
  panel.style.display='';
  if(filterBar)filterBar.style.display='';

  // Calculate per-vendor stats
  const segments=[];
  approved.forEach(q=>{
    const qInvs=(p.invoices||[]).filter(i=>i.quoteId===q.id&&i.approvalStatus==='approved');
    const qPaid=qInvs.reduce((a,i)=>{
      if(i.paid) return a+Number(i.amount||0);
      return a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0);
    },0);
    const qTotal=Number(q.amount||0);
    const pct=qTotal?Math.min(100,Math.round(qPaid/qTotal*100)):0;
    const color=pct===100?'#2D6A0F':pct>0?'#D98E00':'#9B1F1F';
    segments.push({id:q.id,label:q.vendor.length>22?q.vendor.slice(0,20)+'…':q.vendor,value:qTotal||1,paid:qPaid,total:qTotal,pct,color});
  });

  const total=segments.reduce((a,s)=>a+s.value,0);
  const fullyPaid=segments.filter(s=>s.pct===100).length;

  // Build SVG pie chart
  const cx=90,cy=90,r=76,ir=38;
  let pathsHTML='';
  let angle=-Math.PI/2;
  const TWO_PI=Math.PI*2;
  segments.forEach((s,idx)=>{
    const slice=(s.value/total)*TWO_PI;
    const x1=cx+r*Math.cos(angle);
    const y1=cy+r*Math.sin(angle);
    const x2=cx+r*Math.cos(angle+slice);
    const y2=cy+r*Math.sin(angle+slice);
    const x3=cx+ir*Math.cos(angle+slice);
    const y3=cy+ir*Math.sin(angle+slice);
    const x4=cx+ir*Math.cos(angle);
    const y4=cy+ir*Math.sin(angle);
    const large=slice>Math.PI?1:0;
    const d='M '+x1+' '+y1+' A '+r+' '+r+' 0 '+large+' 1 '+x2+' '+y2+' L '+x3+' '+y3+' A '+ir+' '+ir+' 0 '+large+' 0 '+x4+' '+y4+' Z';
    pathsHTML+='<path d="'+d+'" fill="'+s.color+'" stroke="#fff" stroke-width="2" opacity="1"/>';
    angle+=slice;
  });

  svgWrap.innerHTML='<svg viewBox="0 0 180 180" width="180" height="180" xmlns="http://www.w3.org/2000/svg">'
    +pathsHTML
    +'<circle cx="'+cx+'" cy="'+cy+'" r="'+ir+'" fill="#fff"/>'
    +'<text x="'+cx+'" y="'+(cy-9)+'" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#0C1B2E">'+fullyPaid+'/'+segments.length+'</text>'
    +'<text x="'+cx+'" y="'+(cy+8)+'" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b6a64">Fully Paid</text>'
    +'</svg>';

  // Legend
  legend.innerHTML='<div style="display:flex;flex-direction:column;gap:4px">'
    +segments.map(s=>'<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border)">'
      +'<div style="width:12px;height:12px;border-radius:50%;background:'+s.color+';flex-shrink:0"></div>'
      +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+s.label+'</div>'
        +'<div style="font-size:9px;color:var(--muted)">$'+s.paid.toLocaleString()+' paid / $'+s.total.toLocaleString()+' contract</div>'
        +'<div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:2px;width:120px">'
          +'<div style="height:100%;width:'+s.pct+'%;background:'+s.color+';border-radius:2px"></div>'
        +'</div>'
      +'</div>'
      +'<span style="font-size:9px;font-weight:700;color:'+s.color+';flex-shrink:0">'+s.pct+'%</span>'
    +'</div>').join('')
    +'</div>';

  // Vendor filter checkboxes
  if(vendorChecks){
    vendorChecks.innerHTML=segments.map(s=>`<label style="display:flex;align-items:center;gap:4px;padding:4px 8px;border:1px solid var(--border);border-radius:5px;cursor:pointer;font-size:10px;background:#fff">
      <input type="checkbox" checked onchange="filterPayVendors()" data-vid="${s.id}" style="accent-color:var(--blue);width:12px;height:12px;cursor:pointer"/>
      <span style="color:var(--text)">${s.label}</span>
    </label>`).join('');
  }
}

// ── VC-based pie chart (Vendor Payment Status Overview) ───────────────
function renderVCPayPieChart(payGroups, p){
  const panel=vEl('pay-pie-panel');
  const svgWrap=vEl('pay-pie-svg-wrap');
  const legend=vEl('pay-pie-legend');
  const filterBar=vEl('pay-filter-bar');
  const vendorChecks=vEl('pay-vendor-checks');
  if(!panel||!svgWrap||!legend) return;

  if(!payGroups.length){
    panel.style.display='none';
    if(filterBar) filterBar.style.display='none';
    return;
  }
  panel.style.display='';
  if(filterBar) filterBar.style.display='none'; // hide quote-based filter bar

  const segments=payGroups.map(v=>{
    const vInvs=v.isManualGroup
      ? (v._manualInvs||[])
      : v.isQuoteGroup
        ? (v._quoteInvs||[])
        : (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
    const vPaid=vInvs.reduce((a,i)=>{
      if(i.paid) return a+Number(i.amount||0);
      return a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0);
    },0);
    const vTotal=Number(v.amount||0);
    const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
    const color=pct===100?'#2D6A0F':pct>0?'#D98E00':'#9B1F1F';
    const badge=v.isQuoteGroup?'Approved Quote':(v.isManualGroup?'Manual Invoices':'Vendor Contract');
    return{id:v.id,label:v.vendor.length>22?v.vendor.slice(0,20)+'…':v.vendor,value:vTotal||1,paid:vPaid,total:vTotal,pct,color,badge};
  });

  const total=segments.reduce((a,s)=>a+s.value,0);
  const fullyPaid=segments.filter(s=>s.pct===100).length;

  const cx=90,cy=90,r=76,ir=38;
  let pathsHTML='',angle=-Math.PI/2;
  const TWO_PI=Math.PI*2;
  segments.forEach(s=>{
    const slice=(s.value/total)*TWO_PI;
    const x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle);
    const x2=cx+r*Math.cos(angle+slice),y2=cy+r*Math.sin(angle+slice);
    const x3=cx+ir*Math.cos(angle+slice),y3=cy+ir*Math.sin(angle+slice);
    const x4=cx+ir*Math.cos(angle),y4=cy+ir*Math.sin(angle);
    const large=slice>Math.PI?1:0;
    const d='M '+x1+' '+y1+' A '+r+' '+r+' 0 '+large+' 1 '+x2+' '+y2+' L '+x3+' '+y3+' A '+ir+' '+ir+' 0 '+large+' 0 '+x4+' '+y4+' Z';
    pathsHTML+='<path d="'+d+'" fill="'+s.color+'" stroke="#fff" stroke-width="2"/>';
    angle+=slice;
  });

  svgWrap.innerHTML='<svg viewBox="0 0 180 180" width="180" height="180" xmlns="http://www.w3.org/2000/svg">'
    +pathsHTML
    +'<circle cx="'+cx+'" cy="'+cy+'" r="'+ir+'" fill="#fff"/>'
    +'<text x="'+cx+'" y="'+(cy-9)+'" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#0C1B2E">'+fullyPaid+'/'+segments.length+'</text>'
    +'<text x="'+cx+'" y="'+(cy+8)+'" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b6a64">Fully Paid</text>'
    +'</svg>';

  legend.innerHTML='<div style="display:flex;flex-direction:column;gap:4px">'
    +segments.map(s=>'<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border)">'
      +'<div style="width:12px;height:12px;border-radius:50%;background:'+s.color+';flex-shrink:0"></div>'
      +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+s.label+'</div>'
        +'<div style="font-size:9px;color:var(--muted)">'+s.badge+' · $'+s.paid.toLocaleString()+' paid / $'+s.total.toLocaleString()+' total</div>'
        +'<div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:2px;width:120px">'
          +'<div style="height:100%;width:'+s.pct+'%;background:'+s.color+';border-radius:2px"></div>'
        +'</div>'
      +'</div>'
      +'<span style="font-size:9px;font-weight:700;color:'+s.color+';flex-shrink:0">'+s.pct+'%</span>'
    +'</div>').join('')
    +'</div>';

  if(vendorChecks) vendorChecks.innerHTML='';
}

// ── VC-based ledger table ─────────────────────────────────────────────
function _buildVCPayLedgerHTML(payGroups, grandContract, grandPaid, p){
  const grandBal=grandContract-grandPaid;
  const totalPct=grandContract?Math.min(100,Math.round(grandPaid/grandContract*100)):0;

  const rows=payGroups.map((v,idx)=>{
    const vInvs=v.isManualGroup
      ? (v._manualInvs||[])
      : v.isQuoteGroup
        ? (v._quoteInvs||[])
        : (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
    const vPaid=vInvs.reduce((a,i)=>{
      if(i.paid) return a+Number(i.amount||0);
      return a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0);
    },0);
    const vTotal=Number(v.amount||0);
    const vBal=vTotal-vPaid;
    const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
    const rowBg=idx%2===0?'#fff':'var(--bg)';
    const milestoneSource=v.isQuoteGroup
      ? ((p.vendors||[]).find(vc=>vc.quoteId===v.sourceQuoteId||vc.vendor===v.vendor)?.milestones||[])
      : (v.milestones||[]);
    const exportActions=v.isManualGroup
      ? `<button class="btn btn-ghost btn-xs" onclick="exportVendorNameLedgerPDF('${String(v.vendor||'').replace(/'/g,"\\'") }')" title="PDF">🖨</button>
          <button class="btn btn-ghost btn-xs" onclick="exportVendorNameLedgerExcel('${String(v.vendor||'').replace(/'/g,"\\'") }')" title="Excel">📊</button>`
      : v.isQuoteGroup
        ? `<button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerPDF('${v.sourceQuoteId}')" title="PDF">🖨</button>
            <button class="btn btn-ghost btn-xs" onclick="exportPaymentLedgerExcel('${v.sourceQuoteId}')" title="Excel">📊</button>`
        : `<button class="btn btn-ghost btn-xs" onclick="exportVCPaymentLedgerPDF('${v.id}')" title="PDF">🖨</button>
            <button class="btn btn-ghost btn-xs" onclick="exportVCPaymentLedgerExcel('${v.id}')" title="Excel">📊</button>`;

    const invSubRows=vInvs.map(inv=>{
      const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      const invBal=Number(inv.amount||0)-invPaid;
      const msName=milestoneSource.find(m=>m.id===inv.milestoneId)?.name||(v.isManualGroup?'Manual / No Contract':'—');
      const allPmts=[...(inv.partialPayments||[])];
      if(inv.paid&&!allPmts.length) allPmts.push({amount:inv.amount,date:inv.paidDate,full:true});
      const pmtDetail=allPmts.map(pp=>
        '<div style="display:flex;align-items:center;gap:6px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:4px;padding:3px 8px;margin-top:3px;flex-wrap:wrap">'
        +'<span style="font-size:9px;font-weight:700;color:var(--green)">&#10003; $'+Number(pp.amount||0).toLocaleString()+'</span>'
        +(pp.date?'<span style="font-size:9px;color:var(--muted)">'+fmtDate(pp.date)+'</span>':'')
        +'<span style="font-size:9px;color:var(--blue);background:var(--blue-l);padding:1px 6px;border-radius:3px">📍 '+msName+'</span>'
        +(pp.txnNo?'<span style="font-size:9px;color:var(--blue)">🔖 Txn: <strong>'+pp.txnNo+'</strong></span>':'')
        +'</div>'
      ).join('');
      return`<tr style="background:${inv.paid?'#F3FCF0':'#FFFBF0'}">
        <td style="padding:6px 14px 6px 28px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:9px;background:${inv.paid?'var(--green)':'var(--amber)'};color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">${inv.paid?'✓ PAID':'PARTIAL'}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${inv.invoiceNo||'Invoice'}</span>
          </div>
          ${pmtDetail}
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <span style="font-size:10px;font-weight:600;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;padding:2px 8px;border-radius:4px;display:inline-block">📍 ${msName}</span>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)"></td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;border-bottom:1px solid var(--border)">$${Number(inv.amount||0).toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">$${invPaid.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:700;color:${invBal>0?'var(--red)':'var(--green)'};border-bottom:1px solid var(--border)">$${invBal.toLocaleString()}</td>
        <td colspan="2" style="border-bottom:1px solid var(--border)"></td>
      </tr>`;
    }).join('');

    const csiQ=(p.quotes||[]).find(q=>vInvs.some(i=>i.quoteId===q.id));
    const csiLabel=v.csi||v.trade||csiQ?.csi||'—';
    const milestoneBadges=vInvs.length
      ? `<div style="display:flex;flex-direction:column;gap:3px">${vInvs.map(inv=>{const ms=milestoneSource.find(m=>m.id===inv.milestoneId); const label=ms?.name||(v.isManualGroup?'Manual':''); return label?`<span style="font-size:9px;color:var(--blue);background:var(--blue-l);border:1px solid #B0D0F0;padding:1px 6px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px;display:block" title="${label}">📍 ${label}</span>`:'';}).filter(Boolean).join('')}</div>`
      : '<span style="font-size:10px;color:var(--muted)">—</span>';

    return`<tr style="background:${rowBg};border-left:3px solid var(--navy)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${v.vendor}</div>
        <div style="font-size:9px;color:var(--muted);margin-top:2px">${vInvs.length} invoice${vInvs.length!==1?'s':''}</div>
      </td>
      <td style="padding:10px 14px">
        ${milestoneBadges}
      </td>
      <td style="padding:10px 14px"><span class="badge ${csiLabel!=='—'?'b-teal':'b-gray'}">${csiLabel}</span></td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${vTotal.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${vPaid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${vBal>0?'var(--red)':'var(--green)'}">$${vBal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">
        <div style="display:flex;align-items:center;gap:7px">
          <div style="width:80px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
            <div style="height:100%;width:${pct}%;background:${pct===100?'var(--green-m)':pct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:3px;transition:.5s"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:${pct===100?'var(--green)':'var(--text)'}">${pct}%</span>
        </div>
      </td>
      <td style="padding:10px 14px">
        <div style="display:flex;gap:4px">${exportActions}</div>
      </td>
    </tr>${invSubRows}`;
  }).join('');

  const totalPctBar=`<div style="display:flex;align-items:center;gap:7px"><div style="width:80px;height:6px;background:rgba(255,255,255,.2);border-radius:3px;overflow:hidden;flex-shrink:0"><div style="height:100%;width:${totalPct}%;background:${totalPct===100?'#9FE1CB':'#85B7EB'};border-radius:3px"></div></div><span style="font-size:11px;font-weight:700;color:#fff">${totalPct}%</span></div>`;

  return`<div style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse">
      <thead><tr style="background:var(--bg)">
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:22%">Vendor / Invoice</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--blue);text-align:left;border-bottom:1px solid var(--border);width:16%">📍 Milestone</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">CSI</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Contract / Amount</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--green);text-align:left;border-bottom:1px solid var(--border)">✓ Paid</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--red);text-align:left;border-bottom:1px solid var(--border)">Balance Due</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Status</th>
        <th style="padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border)">Export</th>
      </tr></thead>
      <tbody>
        ${rows}
        <tr style="background:var(--navy)">
          <td style="padding:11px 14px" colspan="3"><span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:.3px">TOTAL — ${payGroups.length} Vendor${payGroups.length!==1?'s':''}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff">$${grandContract.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#9FE1CB">$${grandPaid.toLocaleString()}</span></td>
          <td style="padding:11px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${grandBal>0?'#F09595':'#9FE1CB'}">$${grandBal.toLocaleString()}</span></td>
          <td style="padding:11px 14px">${totalPctBar}</td>
          <td style="padding:11px 14px">
            <div style="display:flex;gap:4px">
              <span style="font-size:10px;color:#fff;opacity:.85">Use the row actions for each vendor ledger</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
}

// ── VC ledger PDF export ──────────────────────────────────────────────
function exportVCPaymentLedgerPDF(vcIdFilter){
  const p=proj();if(!p){toast('⚠ No project');return;}
  let vcs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  if(vcIdFilter) vcs=vcs.filter(v=>v.id===vcIdFilter);
  if(!vcs.length){toast('⚠ No vendor payment data');return;}

  let grandContract=0,grandPaid=0;
  vcs.forEach(v=>{
    grandContract+=Number(v.amount||0);
    (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
      if(i.paid) grandPaid+=Number(i.amount||0);
      else grandPaid+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
    });
  });
  const grandBal=grandContract-grandPaid;

  const subsHTML=vcs.map((v,vi)=>{
    const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
    const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const vBal=Number(v.amount||0)-vPaid;
    const pct=v.amount?Math.min(100,Math.round(vPaid/Number(v.amount)*100)):0;

    let invRows='';
    vInvs.forEach((inv,pi)=>{
      const rowBg=inv.paid?'#EDF8E5':pi%2===0?'#fff':'#fafaf8';
      const msName=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
      const partials=inv.partialPayments||[];
      const invPaid=inv.paid?Number(inv.amount||0):partials.reduce((a,pp)=>a+Number(pp.amount||0),0);
      const invBal=Number(inv.amount||0)-invPaid;
      const pmtRows=partials.length?partials.map(pp=>'<div style="background:#F3FCF0;border:1px solid #B8DCA0;border-radius:4px;padding:3px 7px;margin-top:3px"><div style="font-size:9px;color:#2D6A0F;font-weight:600">&#10003; $'+Number(pp.amount||0).toLocaleString()+(pp.date?' &middot; '+fmtDate(pp.date):'')+(pp.txnNo?'<span style="color:#1A6BC4"> &middot; Txn: '+pp.txnNo+'</span>':'')+'</div></div>').join(''):'';
      invRows+=`<tr style="background:${rowBg}">
        <td style="padding:5px 8px 5px 24px;border-bottom:1px solid #eee;font-size:10px" colspan="2">
          <span style="background:${inv.paid?'#2D6A0F':'#A86200'};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;font-weight:700;margin-right:6px">${inv.paid?'✓ PAID':'PARTIAL'}</span>
          <strong>${inv.invoiceNo||'Invoice'}</strong> &nbsp;📍 ${msName}
          ${pmtRows}
        </td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700">$${Number(inv.amount||0).toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700;color:#2D6A0F">$${invPaid.toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:11px;font-weight:700;color:${invBal>0?'#9B1F1F':'#2D6A0F'}">$${invBal.toLocaleString()}</td>
        <td style="padding:5px 8px;border-bottom:1px solid #eee;font-size:10px;color:#555">${pct}%</td>
      </tr>`;
    });

    return`<tr style="background:${vi%2===0?'#fff':'#fafaf8'}">
      <td style="padding:8px 8px;font-size:12px;font-weight:700;border-bottom:1px solid #ddd">${v.vendor}</td>
      <td style="padding:8px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${v.trade||v.csi||'—'}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;border-bottom:1px solid #ddd">$${Number(v.amount||0).toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${vPaid.toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:12px;font-weight:700;color:${vBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #ddd">$${vBal.toLocaleString()}</td>
      <td style="padding:8px 8px;font-size:11px;font-weight:700;color:${pct===100?'#2D6A0F':'#A86200'};border-bottom:1px solid #ddd">${pct}%</td>
    </tr>${invRows}`;
  }).join('');

  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Vendor Payment Ledger — ${p.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Vendor Payment Ledger</h1>
  <div class="meta">${p.name} &nbsp;·&nbsp; ${getProjectAddressLine(p)}<br>Livio Address: ${LIVIO_OFFICE_ADDRESS}<br>Permit: ${p.permit||'—'} &nbsp;·&nbsp; ${LIVIO_COMPANY_NAME} &nbsp;·&nbsp; ${new Date().toLocaleDateString()}</div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade / CSI</th><th>Contract / Amount</th><th>✓ Paid</th><th>Balance Due</th><th>Status</th></tr></thead>
  <tbody>${subsHTML}
  <tr class="tot"><td colspan="2">TOTAL — ${vcs.length} Vendor${vcs.length>1?'s':''}</td><td>$${grandContract.toLocaleString()}</td><td style="color:#9FE1CB">$${grandPaid.toLocaleString()}</td><td style="color:${grandBal>0?'#F09595':'#9FE1CB'}">$${grandBal.toLocaleString()}</td><td></td></tr>
  </tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${LIVIO_COMPANY_NAME} · ${LIVIO_OFFICE_ADDRESS} · ${p.name} · Generated ${new Date().toLocaleDateString()}</div>
  </body></html>`;

  const win=window.open('','_blank');
  if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(()=>{win.focus();win.print();},600);
  toast('🖨 Vendor Payment Ledger PDF');
}

// ── VC ledger Excel export ────────────────────────────────────────────
function exportVCPaymentLedgerExcel(vcIdFilter){
  const p=proj();if(!p){toast('⚠ No project');return;}
  toast('📊 Building Excel…',3000);
  if(window.XLSX){_doVCLedgerExcel(p,vcIdFilter);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doVCLedgerExcel(p,vcIdFilter);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}
function _doVCLedgerExcel(p,vcIdFilter){
  try{
    const XLSX=window.XLSX;
    let vcs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    if(vcIdFilter) vcs=vcs.filter(v=>v.id===vcIdFilter);
    if(!vcs.length){toast('⚠ No vendor payment data');return;}

    const wb=XLSX.utils.book_new();
    const data=[
      ['VENDOR PAYMENT LEDGER — '+p.name],
      ['Project:',p.name,'','Project Address:',getProjectAddressLine(p)],
      ['Livio Address:',LIVIO_OFFICE_ADDRESS,'','Generated:',new Date().toLocaleDateString()],
      ['Permit:',p.permit||''],
      [],
      ['Vendor','Trade / CSI','Contract Amount','Paid','Balance Due','Status %','Invoice #','Milestone','Inv. Amount','Inv. Paid','Inv. Balance','Inv. Status'],
    ];

    let grandContract=0,grandPaid=0;
    vcs.forEach(v=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vBal=Number(v.amount||0)-vPaid;
      const pct=v.amount?Math.min(100,Math.round(vPaid/Number(v.amount)*100)):0;
      grandContract+=Number(v.amount||0);
      grandPaid+=vPaid;

      if(!vInvs.length){
        data.push([v.vendor,v.trade||v.csi||'',Number(v.amount||0),vPaid,vBal,pct+'%','','','','','','']);
      } else {
        vInvs.forEach((inv,ii)=>{
          const msName=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'';
          const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
          const invBal=Number(inv.amount||0)-invPaid;
          data.push([
            ii===0?v.vendor:'',
            ii===0?(v.trade||v.csi||''):'',
            ii===0?Number(v.amount||0):'',
            ii===0?vPaid:'',
            ii===0?vBal:'',
            ii===0?pct+'%':'',
            inv.invoiceNo||'',msName,Number(inv.amount||0),invPaid,invBal,inv.paid?'Paid':'Partial'
          ]);
          (inv.partialPayments||[]).forEach(pp=>{
            data.push(['','','','','','','  ↳ Partial','',Number(pp.amount||0),Number(pp.amount||0),0,pp.date||'']);
          });
        });
      }
      data.push([]);
    });

    data.push(['TOTAL','','',grandContract,grandPaid,grandContract-grandPaid,'','','','','','']);

    const ws=XLSX.utils.aoa_to_sheet(data);
    ws['!cols']=[{wch:26},{wch:16},{wch:16},{wch:14},{wch:14},{wch:10},{wch:14},{wch:20},{wch:14},{wch:12},{wch:14},{wch:10}];
    XLSX.utils.book_append_sheet(wb,ws,'Payment Ledger');

    const fname=(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+(vcIdFilter?'_VendorLedger':'_AllVendorLedger')+'.xlsx';
    XLSX.writeFile(wb,fname);
    toast('📊 Vendor Payment Ledger Excel downloaded');
  }catch(e){console.error(e);toast('⚠ Excel error: '+e.message);}
}

function filterPayVendors(){
  const search=(vEl('pay-search')?.value||'').toLowerCase().trim();
  const checks=document.querySelectorAll('#pay-vendor-checks input[type=checkbox]');
  const checkedIds=new Set([...checks].filter(c=>c.checked).map(c=>c.dataset.vid));
  document.querySelectorAll('.pay-vendor-card').forEach(card=>{
    const vid=card.dataset.vendor;
    const vendorName=card.querySelector('.pay-vendor-name')?.textContent?.toLowerCase()||card.innerText?.toLowerCase()||'';
    const matchSearch=!search||vendorName.includes(search);
    const matchCheck=!checks.length||checkedIds.has(vid);
    card.style.display=(matchSearch&&matchCheck)?'':'none';
  });
}

function showAllPayVendors(){
  const checks=document.querySelectorAll('#pay-vendor-checks input[type=checkbox]');
  checks.forEach(c=>c.checked=true);
  const searchEl=vEl('pay-search');if(searchEl)searchEl.value='';
  document.querySelectorAll('.pay-vendor-card').forEach(card=>card.style.display='');
}

function clearPaySearch(){
  const el=vEl('pay-search');if(el){el.value='';filterPayVendors();}
}

// ══════════════════════════════════════════════════════════════════
// ── SETTINGS PAGE ────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════
function getEmailConfig(){
  try{localStorage.removeItem('livio_email_config');}catch{}
  return {};
}
function detectDefaultApiBase(){
  const envBase=(typeof import.meta!=='undefined'&&import.meta.env&&import.meta.env.VITE_API_BASE)
    ? String(import.meta.env.VITE_API_BASE).trim()
    : '';
  if(envBase) return envBase;
  if(typeof window!=='undefined'&&window.location){
    const {hostname, origin, port}=window.location;
    const isLocalHost=hostname==='127.0.0.1'||hostname==='localhost';
    const isFrontendDevPort=['3000','4173','5173','5500'].includes(String(port||''));
    if(isLocalHost&&isFrontendDevPort) return 'http://127.0.0.1:3001/api';
    return 'https://project-managment-production-7373.up.railway.app/api';
  }
  return 'http://127.0.0.1:3001/api';
}
const DEFAULT_API_BASE=detectDefaultApiBase();
function shouldIgnoreLocalApiBase(raw){
  if(!raw||typeof window==='undefined'||!window.location) return false;
  const value=String(raw).trim().toLowerCase();
  const isSavedLocal=value.startsWith('http://127.0.0.1:3001')||value.startsWith('http://localhost:3001');
  const { hostname }=window.location;
  const runningLocal=hostname==='127.0.0.1'||hostname==='localhost';
  return isSavedLocal && !runningLocal;
}
function getApiBase(){
  return DEFAULT_API_BASE.replace(/\/+$/,'');
}
function getBackendBase(){
  return getApiBase().replace(/\/api$/,'');
}
function getUploadProjectId(){
  return proj()?.id||DB?.activeId||DB?.activeProjectId||'general';
}
function getFileUrl(file){
  if(!file) return '';
  if(file.path) return getBackendBase()+file.path;
  return file.data||'';
}
async function fetchFileBlob(file){
  if(!file) throw new Error('File not found');
  const url=getFileUrl(file);
  if(!url) throw new Error('File not found');
  const res=await fetch(url);
  if(!res.ok) throw new Error('File download failed');
  return await res.blob();
}
async function uploadFilesToServer(fileList, projectId){
  const files=Array.from(fileList||[]);
  if(!files.length) return [];
  const form=new FormData();
  form.append('projectId', projectId||getUploadProjectId());
  files.forEach(file=>form.append('files', file));
  const res=await fetch(getApiBase()+'/files/upload',{method:'POST',body:form});
  if(!res.ok){
    let msg='Upload failed';
    try{
      const data=await res.json();
      msg=data?.error||msg;
    }catch(e){}
    throw new Error(msg);
  }
  const data=await res.json();
  return Array.isArray(data?.files)?data.files:[];
}
let syncTimer=null;
let syncInFlight=false;
let hydrateStarted=false;
let hasLocalChanges=false;
function normalizeDBShape(input){
  const raw=(input&&typeof input==='object')?input:{};
  const hasProjectsField=Array.isArray(raw.projects);
  const fallbackProjects=hasProjectsField
    ? raw.projects
    : [JSON.parse(JSON.stringify(SEED))];
  const activeId=raw.activeId??raw.activeProjectId??fallbackProjects?.[0]?.id??'proj_madera';
  const db={
    ...raw,
    projects:fallbackProjects,
    activeId,
    activeProjectId:activeId
  };
  (db.projects||[]).forEach(p=>{
    if(!p.works)p.works=[];
    if(!p.milestones)p.milestones=[];
    if(!p.quotes)p.quotes=[];
    if(!p.plans)p.plans=[];
    if(!p.inspections)p.inspections=[];
    p.milestones.forEach(m=>{
      if(!m.payFiles)m.payFiles=[];
      if(!m.progressPayments)m.progressPayments=[];
      m.progressPayments.forEach(pp=>{if(!pp.files)pp.files=[];});
    });
    p.quotes.forEach(q=>{
      if(!q.files)q.files=[];
      if(!q.payMilestones){
        q.payMilestones=q.paymilestones||q.paymentMilestones||[];
        delete q.paymilestones;
        delete q.paymentMilestones;
      }
      q.payMilestones.forEach(pm=>{
        if(!pm.files)pm.files=[];
        if(!pm.lienFiles)pm.lienFiles=[];
        if(pm.paid===undefined)pm.paid=false;
        if(!pm.paidDate)pm.paidDate='';
      });
    });
    p.inspections.forEach(i=>{if(!i.files)i.files=[];});
    if(!p.invoices)p.invoices=[]; if(!p.vendors)p.vendors=[]; if(!p.checklist)p.checklist=[]; if(!p.qaqcLog)p.qaqcLog=[]; if(!p.chkCategories)p.chkCategories=[]; (p.checklist||[]).forEach(it=>{(it.comments||[]).forEach(c=>regFiles(c.files||[]));}); (p.qaqcLog||[]).forEach(it=>regFiles(it.files||[])); (p.checklist||[]).forEach(it=>{if(!it.comments)it.comments=[];}); p.vendors.forEach(v=>regFiles(v.files||[]));
    p.invoices.forEach(inv=>{
      if(!inv.files)inv.files=[];
      if(!inv.proofFiles)inv.proofFiles=[];
      if(!inv.lienFiles)inv.lienFiles=[];
      if(!inv.partialPayments)inv.partialPayments=[];
      inv.partialPayments.forEach(pp=>{if(!pp.files)pp.files=[]; regFiles(pp.files||[]);});
      if(!inv.payments)inv.payments=[];
      inv.payments.forEach(pay=>{
        if(!pay.proofFiles) pay.proofFiles=pay.proofFile?[pay.proofFile]:[];
        if((!pay.proofFiles||!pay.proofFiles.length)&&pay.proofData){
          const legacyProof={
            id:pay.proofId||`${pay.id}_proof`,
            name:pay.proofName||'Payment Proof',
            size:pay.proofSize||0,
            data:pay.proofData,
            at:pay.date||new Date().toISOString()
          };
          pay.proofFiles=[legacyProof];
          pay.proofFile=legacyProof;
        }
        regFiles(pay.proofFiles||[]);
      });
      regFiles(inv.files||[]);
      regFiles(inv.proofFiles||[]);
      regFiles(inv.lienFiles||[]);
    });
  });
  return db;
}
function setDB(nextDB){
  DB=normalizeDBShape(nextDB);
  if(typeof window!=='undefined') window.DB=DB;
}
function persistDBLocal(){
  if(typeof localStorage==='undefined') return;
  const activeId=DB?.activeId??DB?.activeProjectId??null;
  localStorage.setItem(SK,JSON.stringify({
    ...DB,
    activeId,
    activeProjectId:activeId
  }));
}
async function syncRemoteDB(){
  if(syncInFlight) return;
  syncInFlight=true;
  try{
    const res=await fetch(getApiBase()+'/projects/sync',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(DB)
    });
    if(!res.ok){
      let msg='Failed to sync data';
      try{
        const data=await res.json();
        msg=data?.error||msg;
      }catch(e){}
      throw new Error(msg);
    }
    hasLocalChanges=false;
  }catch(e){
    console.warn('Remote sync failed:',e?.message||e);
  }finally{
    syncInFlight=false;
  }
}
function queueRemoteSync(delay=150){
  clearTimeout(syncTimer);
  syncTimer=setTimeout(()=>{syncRemoteDB();},delay);
}
async function hydrateDBFromServer(){
  if(hydrateStarted) return;
  hydrateStarted=true;
  try{
    const res=await fetch(getApiBase()+'/projects/all');
    if(!res.ok) throw new Error('Failed to load shared data');
    const remote=normalizeDBShape(await res.json());
    if(hasLocalChanges){
      queueRemoteSync(50);
      return;
    }
    if((remote.projects||[]).length){
      setDB(remote);
      try{persistDBLocal();}catch(e){}
      registerAllFiles();
      if(typeof renderAll==='function') renderAll();
    }else if((DB.projects||[]).length){
      queueRemoteSync(50);
    }
  }catch(e){
    console.warn('Shared data load skipped:',e?.message||e);
  }
}
setDB(DB);
registerAllFiles();
saveDB=function(){
  try{
    DB.activeProjectId=DB.activeId??DB.activeProjectId??null;
    persistDBLocal();
    hasLocalChanges=true;
  }catch(e){
    const msg=e.name==='QuotaExceededError'||e.code===22
      ?'âš  Browser storage full â€” files are too large for local storage. Export your project to save data.'
      :'âš  Save failed: '+e.message;
    toast(msg,5000);
    console.error('saveDB error:',e);
  }
  registerAllFiles();
  queueRemoteSync();
};
handleFileInput = async function(input, listId){
  const files=Array.from(input?.files||[]);
  if(!files.length) return;
  const valid=files.filter(file=>{
    if(file.size>500*1024*1024){
      toast('âš  Max 500MB: '+file.name);
      return false;
    }
    return true;
  });
  if(!valid.length) return;
  uploadInFlight+=valid.length;
  renderPendingInModal();
  try{
    const uploaded=await uploadFilesToServer(valid, getUploadProjectId());
    uploaded.forEach(f=>{
      FA[f.id]=f;
      mPending.push(f);
    });
    renderPendingInModal();
    toast('âœ“ Uploaded '+uploaded.length+' file(s)');
  }catch(e){
    toast('âš  Upload failed: '+(e?.message||'Please try again'));
    console.error('File upload failed:',e);
  }finally{
    uploadInFlight=Math.max(0, uploadInFlight-valid.length);
    renderPendingInModal();
    if(input&&typeof input.value==='string') input.value='';
  }
};
getFileRecord = function(fid){
  let f=FA[fid];
  if(!f){
    registerAllFiles();
    f=FA[fid];
  }
  return (f&&(f.data||f.path))?f:null;
};
dlFile = async function(fid){
  const f=getFileRecord(fid);
  if(!f){toast('âš  File not found â€” it may not have been saved yet');return;}
  try{
    const blob=await fetchFileBlob(f);
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=f.name||f.filename||'download';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url),30000);
    toast('â¬‡ Downloading '+(f.name||'file'));
  }catch(e){
    toast('âš  Failed to download '+(f.name||'file'));
    console.error('Download failed:',e);
  }
};
viewFile = async function(fid){
  const f=getFileRecord(fid);
  if(!f){toast('âš  File not found â€” it may not have been saved yet');return;}
  try{
    const blob=await fetchFileBlob(f);
    const url=URL.createObjectURL(blob);
    const win=window.open(url,'_blank','noopener,noreferrer');
    if(!win){
      URL.revokeObjectURL(url);
      await dlFile(fid);
      toast('âš  Preview blocked â€” downloading instead');
      return;
    }
    setTimeout(()=>URL.revokeObjectURL(url),60000);
    toast('Opening '+(f.name||'file'));
  }catch(e){
    toast('âš  Failed to open '+(f.name||'file'));
    console.error('Preview failed:',e);
  }
};
exportAllFiles = function(){
  const p=proj(); if(!p){toast('âš  No project selected');return;}
  const all=[];
  (p.quotes||[]).forEach(q=>{
    (q.files||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
    (q.payMilestones||[]).forEach(pm=>{
      (pm.files||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
      (pm.lienFiles||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
      (pm.invoiceFiles||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
    });
  });
  (p.plans||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
  (p.inspections||[]).forEach(i=>(i.files||[]).forEach(f=>{if(f.data||f.path)all.push(f);}));
  (p.vendors||[]).forEach(v=>(v.files||[]).forEach(f=>{if(f.data||f.path)all.push(f);}));
  (p.invoices||[]).forEach(inv=>{
    (inv.files||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
    (inv.proofFiles||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
    (inv.lienFiles||[]).forEach(f=>{if(f.data||f.path)all.push(f);});
    (inv.partialPayments||[]).forEach(pp=>(pp.files||[]).forEach(f=>{if(f.data||f.path)all.push(f);}));
    (inv.payments||[]).forEach(pay=>(pay.proofFiles||[]).forEach(f=>{if(f.data||f.path)all.push(f);}));
  });
  if(!all.length){toast('âš  No files in this project');return;}
  all.forEach((f,i)=>setTimeout(()=>dlFile(f.id),i*350));
  toast(`â¬‡ Downloading ${all.length} file(s)â€¦`);
};
saveInvPayment = async function(){
  const invId=vEl('invpay-inv-id').value;
  const date=vEl('invpay-date').value;
  const amount=parseFloat(vEl('invpay-amount').value||'0');
  const note=vEl('invpay-note').value.trim();
  if(!date||!amount){toast('âš  Date and amount are required');return;}
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===invId);if(!inv)return;
  if(!inv.payments)inv.payments=[];
  const payId='pp_'+Math.random().toString(36).slice(2,10);
  const fileInput=vEl('invpay-proof');
  try{
    let proofFiles=[];
    if(fileInput&&fileInput.files&&fileInput.files[0]){
      proofFiles=await uploadFilesToServer([fileInput.files[0]], p.id);
      regFiles(proofFiles);
    }
    inv.payments.push({
      id:payId,
      date,
      amount,
      note,
      proofFile:proofFiles[0]||null,
      proofFiles
    });
    saveDB();
    closeInvPayment();
    renderAll();
    toast('ðŸ’µ Payment recorded: '+fmtMoney(amount));
  }catch(e){
    toast('âš  Payment proof upload failed: '+(e?.message||'Please try again'));
    console.error('Payment proof upload failed:',e);
  }
};
function getEmailApiBase(){
  return DEFAULT_API_BASE.replace(/\/+$/,'');
}
function hasSmtpOverride(){
  return false;
}
function getEmailFromName(){
  return 'Livio Building Systems';
}
function getEmailReplyTo(){
  return LIVIO_REPLY_EMAIL;
}
function getEmailStatusMarkup(cfg){
  const apiBase=getEmailApiBase(cfg);
  if(hasSmtpOverride(cfg)){
    return `<div style="display:flex;align-items:center;gap:10px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:11px 16px">
      <span style="font-size:20px">✅</span>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--green)">SMTP override configured — emails will send through the backend</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px">Host: <strong>${cfg.host}</strong> · Port: <strong>${cfg.port}</strong> · User: <strong>${cfg.user}</strong>${cfg.fromEmail?' · Reply-to: <strong>'+cfg.fromEmail+'</strong>':''}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:3px">API: <strong>${apiBase}</strong></div>
      </div>
    </div>`;
  }
  return `<div style="display:flex;align-items:center;gap:10px;background:var(--green-l);border:1px solid #B8DCA0;border-radius:8px;padding:11px 16px">
    <span style="font-size:20px">⚠️</span>
    <div>
      <div style="font-size:13px;font-weight:700;color:var(--green)">Email is managed by the backend</div>
      <div style="font-size:11px;color:var(--muted);margin-top:2px">This app sends mail using the backend email service.</div>
      <div style="font-size:10px;color:var(--muted);margin-top:3px">API: <strong>${apiBase}</strong></div>
    </div>
  </div>`;
}
async function sendAppEmail(payload){
  const apiBase=getEmailApiBase();
  const body={
    to:payload.to,
    cc:payload.cc||'',
    subject:payload.subject,
    message:payload.message,
    fromName:payload.fromName||getEmailFromName()
  };
  body.replyTo=payload.replyTo||getEmailReplyTo();
  if(Array.isArray(payload.attachments)&&payload.attachments.length) body.attachments=payload.attachments;
  const res=await fetch(apiBase+'/email/send',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(body)
  });
  const data=await res.json().catch(()=>({}));
  if(!res.ok){
    throw new Error(data.error||data.message||('SMTP send failed ('+res.status+')'));
  }
  return data;
}
async function verifyEmailConfigRequest(cfg){
  const apiBase=getEmailApiBase();
  const res=await fetch(apiBase+'/email/verify',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({})
  });
  const data=await res.json().catch(()=>({}));
  if(!res.ok||data.ok===false){
    throw new Error(data.error||data.message||('SMTP verify failed ('+res.status+')'));
  }
  return data;
}
function renderSettingsPage(){
  const cfg=getEmailConfig();
  const api=vEl('cfg-api-base');      if(api) api.value=getEmailApiBase(cfg);
  const host=vEl('cfg-smtp-host');    if(host) host.value=cfg.host||'';
  const port=vEl('cfg-smtp-port');    if(port) port.value=cfg.port||'587';
  const user=vEl('cfg-smtp-user');    if(user) user.value=cfg.user||'';
  const pass=vEl('cfg-smtp-pass');    if(pass) pass.value=cfg.pass||'';
  const secure=vEl('cfg-smtp-secure');if(secure) secure.checked=!!cfg.secure;
  const fn=vEl('cfg-from-name');      if(fn) fn.value=cfg.fromName||'Livio Building Systems';
  const fe=vEl('cfg-from-email');     if(fe) fe.value=cfg.fromEmail||'';
  _renderEmailCfgStatus();
}

function _renderEmailCfgStatus(){
  const st=vEl('email-cfg-status');if(!st)return;
  st.innerHTML=getEmailStatusMarkup(getEmailConfig());
}

function saveEmailConfig(){
  const enteredApiBase=(vEl('cfg-api-base')?.value||'').trim();
  const cfg={
    apiBase:(shouldIgnoreLocalApiBase(enteredApiBase)?DEFAULT_API_BASE:enteredApiBase)||DEFAULT_API_BASE,
    host:(vEl('cfg-smtp-host')?.value||'').trim(),
    port:(vEl('cfg-smtp-port')?.value||'').trim()||'587',
    user:(vEl('cfg-smtp-user')?.value||'').trim(),
    pass:(vEl('cfg-smtp-pass')?.value||'').trim(),
    secure:!!vEl('cfg-smtp-secure')?.checked,
    fromName:(vEl('cfg-from-name')?.value||'').trim()||'Livio Building Systems',
    fromEmail:(vEl('cfg-from-email')?.value||'').trim()
  };
  if((cfg.host||cfg.user||cfg.pass)&&(!cfg.host||!cfg.port||!cfg.user||!cfg.pass)){
    toast('⚠ Fill all SMTP fields or leave them all blank to use backend defaults');return;
  }
  localStorage.setItem('livio_email_config',JSON.stringify(cfg));
  _renderEmailCfgStatus();
  toast('✅ SMTP settings saved');
}

function clearEmailConfig(){
  if(!confirm('Clear saved SMTP settings? The app will then rely on backend/.env only.'))return;
  localStorage.removeItem('livio_email_config');
  if(vEl('cfg-api-base')) vEl('cfg-api-base').value=DEFAULT_API_BASE;
  if(vEl('cfg-smtp-host')) vEl('cfg-smtp-host').value='';
  if(vEl('cfg-smtp-port')) vEl('cfg-smtp-port').value='587';
  if(vEl('cfg-smtp-user')) vEl('cfg-smtp-user').value='';
  if(vEl('cfg-smtp-pass')) vEl('cfg-smtp-pass').value='';
  if(vEl('cfg-smtp-secure')) vEl('cfg-smtp-secure').checked=false;
  if(vEl('cfg-from-name')) vEl('cfg-from-name').value='Livio Building Systems';
  if(vEl('cfg-from-email')) vEl('cfg-from-email').value='';
  _renderEmailCfgStatus();
  toast('🗑 SMTP settings cleared');
}

async function testEmailConfig(){
  const testTo=prompt('Enter your email address to receive a test email:','');
  if(!testTo||!testTo.includes('@')){toast('⚠ Please enter a valid email');return;}
  const cfg=getEmailConfig();
  toast('📧 Verifying email service…',3000);
  try{
    await verifyEmailConfigRequest(cfg);
    await sendAppEmail({
      to:testTo,
      subject:'Test Email — Livio Building Systems',
message:'This is a test email from Livio Building Systems.\n\nReply Email: '+LIVIO_REPLY_EMAIL+'\n\nIf you received this, your SMTP email integration is working correctly.\n\n— Livio Building Systems'
    });
    toast('✅ Test email sent to '+testTo);
  }catch(e){
    console.error('Email test error:',e);
    toast('⚠ Email test failed: '+e.message,'error',6000);
  }
}

// ── Smart Vendor Search ───────────────────────────────────────────────────
function runPaySmartSearch(){
  const q=(vEl('pay-smart-search')?.value||'').toLowerCase().trim();
  const clearBtn=vEl('pay-smart-clear');
  const resultsEl=vEl('pay-smart-results');
  if(clearBtn) clearBtn.style.display=q?'':'none';

  // Always filter the vendor cards below
  document.querySelectorAll('.pay-vendor-card').forEach(card=>{
    const name=(card.querySelector('.pay-vendor-name')?.textContent||card.innerText||'').toLowerCase();
    card.style.display=(!q||name.includes(q))?'':'none';
  });

  if(!q){if(resultsEl){resultsEl.style.display='none';resultsEl.innerHTML='';} return;}

  const p=proj();if(!p){if(resultsEl)resultsEl.style.display='none';return;}
  const allVCs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  // Match by vendor name OR trade
  const matched=allVCs.filter(v=>(v.vendor||'').toLowerCase().includes(q)||(v.trade||'').toLowerCase().includes(q)||(v.csi||'').toLowerCase().includes(q));

  if(!resultsEl) return;
  if(!matched.length){
    resultsEl.style.display='';
    resultsEl.innerHTML=`<div style="padding:16px 20px;color:var(--muted);font-size:13px;text-align:center">No vendor or trade matches "<strong>${q}</strong>"</div>`;
    return;
  }

  // Group by vendor name for consolidated view
  const nameMap={};
  matched.forEach(v=>{const k=v.vendor||'—';if(!nameMap[k])nameMap[k]=[];nameMap[k].push(v);});

  const rows=Object.entries(nameMap).map(([name,vcs])=>{
    let tC=0,tP=0;
    vcs.forEach(v=>{
      tC+=Number(v.amount||0);
      (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
        if(i.paid)tP+=Number(i.amount||0);else tP+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      });
    });
    const tBal=tC-tP;const pct=tC?Math.min(100,Math.round(tP/tC*100)):0;
    const statusColor=pct===100?'var(--green)':pct>60?'var(--blue)':'var(--amber)';
    const trades=[...new Set(vcs.map(v=>v.trade||v.csi||'General'))].join(', ');

    const contractRows=vcs.map((v,vi)=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const vPct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
      return`<div style="display:flex;align-items:center;gap:10px;padding:7px 20px 7px 30px;background:${vi%2===0?'#F7F9FF':'#fff'};border-bottom:1px solid var(--border)">
        <div style="flex:1">
          <span style="font-size:9px;background:var(--blue);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700;margin-right:6px">CONTRACT ${vi+1}</span>
          <span style="font-size:12px;font-weight:600;color:var(--navy)">${v.trade||v.csi||'General'}</span>
          ${v.csi&&v.csi!==v.trade?`<span style="font-size:9px;color:var(--muted);margin-left:5px">${v.csi}</span>`:''}
          <span style="font-size:10px;color:var(--muted);margin-left:8px">${vInvs.length} invoice${vInvs.length!==1?'s':''}</span>
        </div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">Contract</div><div style="font-size:12px;font-weight:700">$${vTotal.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">✓ Paid</div><div style="font-size:12px;font-weight:700;color:var(--green)">$${vPaid.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:80px"><div style="font-size:9px;color:var(--muted)">Balance</div><div style="font-size:12px;font-weight:700;color:${vBal>0?'var(--red)':'var(--green)'}">$${vBal.toLocaleString()}</div></div>
        <div style="text-align:right;min-width:50px"><div style="font-size:9px;color:var(--muted)">%</div><div style="font-size:12px;font-weight:700;color:${vPct===100?'var(--green)':'var(--amber)'}">${vPct}%</div></div>
      </div>`;
    }).join('');

    return`<div style="border-bottom:2px solid var(--border)">
      <!-- Vendor header row -->
      <div style="display:flex;align-items:center;gap:14px;padding:12px 20px;background:var(--navy2)">
        <div style="flex:1">
          <div style="font-size:15px;font-weight:700;color:#fff">${name}</div>
          <div style="font-size:10px;color:#8AAAC8;margin-top:2px">${trades} · ${vcs.length} contract${vcs.length!==1?'s':''}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Contract</div>
          <div style="font-size:16px;font-weight:700;color:#fff;font-family:'Barlow Condensed',sans-serif">$${tC.toLocaleString()}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">✓ Paid</div>
          <div style="font-size:16px;font-weight:700;color:#7FE0B8;font-family:'Barlow Condensed',sans-serif">$${tP.toLocaleString()}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Balance Due</div>
          <div style="font-size:16px;font-weight:700;color:${tBal>0?'#F8A4A4':'#7FE0B8'};font-family:'Barlow Condensed',sans-serif">$${tBal.toLocaleString()}</div>
        </div>
        <div style="text-align:center;min-width:90px">
          <div style="font-size:9px;color:#8AAAC8;text-transform:uppercase;letter-spacing:.7px">Progress</div>
          <div style="font-size:16px;font-weight:700;color:${pct===100?'#7FE0B8':'#FAC775'};font-family:'Barlow Condensed',sans-serif">${pct}%</div>
          <div style="height:4px;background:rgba(255,255,255,.15);border-radius:2px;margin-top:3px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${pct===100?'#7FE0B8':pct>60?'#85B7EB':'#FAC775'};border-radius:2px"></div>
          </div>
        </div>
        <div style="display:flex;gap:5px;border-left:1px solid rgba(255,255,255,.15);padding-left:14px">
          <button onclick="exportVendorNameLedgerPDF('${name.replace(/'/g,"\\'")}');event.stopPropagation()" title="Download PDF" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">🖨 PDF</button>
          <button onclick="exportVendorNameLedgerExcel('${name.replace(/'/g,"\\'")}');event.stopPropagation()" title="Download Excel" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">📊 Excel</button>
          <button onclick="openLedgerEmail('vendorname','${name.replace(/'/g,"\\'")}');event.stopPropagation()" title="Email ledger" style="background:rgba(26,107,196,.4);border:1px solid rgba(26,107,196,.6);color:#7CC4F8;font-size:11px;padding:5px 10px;border-radius:5px;cursor:pointer">📧 Email</button>
        </div>
      </div>
      <!-- Per-contract breakdown -->
      ${vcs.length>1?contractRows:''}
    </div>`;
  }).join('');

  resultsEl.style.display='';
  resultsEl.innerHTML=`
    <div style="padding:8px 16px;background:var(--bg);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
      <span style="font-size:11px;font-weight:600;color:var(--muted)">🔎 ${matched.length} contract${matched.length!==1?'s':''} found across ${Object.keys(nameMap).length} vendor${Object.keys(nameMap).length!==1?'s':''} for "<strong style="color:var(--text)">${q}</strong>"</span>
      <button onclick="clearPaySmartSearch()" style="font-size:10px;background:none;border:none;color:var(--blue);cursor:pointer;font-weight:600">Clear search</button>
    </div>
    ${rows}`;
}

function clearPaySmartSearch(){
  const el=vEl('pay-smart-search');if(el) el.value='';
  const clearBtn=vEl('pay-smart-clear');if(clearBtn) clearBtn.style.display='none';
  const resultsEl=vEl('pay-smart-results');if(resultsEl){resultsEl.style.display='none';resultsEl.innerHTML='';}
  document.querySelectorAll('.pay-vendor-card').forEach(card=>card.style.display='');
}


// ══════════════════════════════════════════════════════════════════
//  TRADE LEDGER + LEDGER EMAIL
// ══════════════════════════════════════════════════════════════════

// ── Trade Ledger Panel ────────────────────────────────────────────
function renderTradeLedgerPanel(vcWithInvs, p){
  const el=vEl('pay-trade-panel'); if(!el) return;
  if(!vcWithInvs.length){el.style.display='none';el.innerHTML='';return;}
  el.style.display='';

  // ── helpers ───────────────────────────────────────────────────
  function calcStats(vcList){
    let contract=0,paid=0;
    vcList.forEach(v=>{
      contract+=Number(v.amount||0);
      (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
        if(i.paid) paid+=Number(i.amount||0);
        else paid+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      });
    });
    return{contract,paid,bal:contract-paid,pct:contract?Math.min(100,Math.round(paid/contract*100)):0};
  }
  function progBar(pct){
    return`<div style="display:flex;align-items:center;gap:7px">
      <div style="width:70px;height:6px;background:var(--border);border-radius:3px;overflow:hidden;flex-shrink:0">
        <div style="height:100%;width:${pct}%;background:${pct===100?'var(--green-m)':pct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:3px"></div>
      </div>
      <span style="font-size:11px;font-weight:700;color:${pct===100?'var(--green)':'var(--text)'}">${pct}%</span>
    </div>`;
  }
  const TH=`padding:9px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;text-align:left;border-bottom:1px solid var(--border)`;
  const actBtns=(type,ref)=>{
    const enc=encodeURIComponent(ref);
    if(type==='vendor'){
      return`<div style="display:flex;gap:5px;flex-wrap:wrap">
        <button onclick="exportVendorNameLedgerPDF(decodeURIComponent('${enc}'))" class="btn btn-ghost btn-xs">🖨 PDF</button>
        <button onclick="exportVendorNameLedgerExcel(decodeURIComponent('${enc}'))" class="btn btn-ghost btn-xs">📊 Excel</button>
        <button onclick="openLedgerEmail('vendorname',decodeURIComponent('${enc}'))" class="btn btn-xs" style="background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">📧 Email</button>
      </div>`;
    }
    return`<div style="display:flex;gap:5px;flex-wrap:wrap">
      <button onclick="exportTradeLedgerPDF(decodeURIComponent('${enc}'))" class="btn btn-ghost btn-xs">🖨 PDF</button>
      <button onclick="exportTradeLedgerExcel(decodeURIComponent('${enc}'))" class="btn btn-ghost btn-xs">📊 Excel</button>
      <button onclick="openLedgerEmail('trade',decodeURIComponent('${enc}'))" class="btn btn-xs" style="background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0">📧 Email</button>
    </div>`;
  };

  // ── BY VENDOR ────────────────────────────────────────────────
  const byVendorName={};
  vcWithInvs.forEach(v=>{
    const k=v.vendor||'Unknown';
    if(!byVendorName[k]) byVendorName[k]=[];
    byVendorName[k].push(v);
  });
  const vendorNames=Object.keys(byVendorName).sort();

  const vendorRows=vendorNames.map((name,ni)=>{
    const vcs=byVendorName[name];
    const s=calcStats(vcs);
    const rowBg=ni%2===0?'#fff':'var(--bg)';
    // sub-contract rows (shown when vendor has multiple contracts)
    const subRows=vcs.map((v,si)=>{
      const ss=calcStats([v]);
      const tradeLabel=v.trade||v.csi||'—';
      return`<tr style="background:#F0F5FF;border-left:3px solid #B0D0F0">
        <td style="padding:6px 14px 6px 30px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="font-size:9px;background:var(--blue);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">CONTRACT ${si+1}</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${tradeLabel}</span>
            ${v.csi&&v.csi!==v.trade?`<span class="badge b-teal" style="font-size:9px">${v.csi}</span>`:''}
            ${v.contractNo?`<span style="font-size:9px;color:var(--muted)">#${v.contractNo}</span>`:''}
          </div>
        </td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;border-bottom:1px solid var(--border)">$${ss.contract.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:var(--green);border-bottom:1px solid var(--border)">$${ss.paid.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:${ss.bal>0?'var(--red)':'var(--green)'};border-bottom:1px solid var(--border)">$${ss.bal.toLocaleString()}</td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:5px">
            <div style="width:50px;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${ss.pct}%;background:${ss.pct===100?'var(--green-m)':ss.pct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:2px"></div>
            </div>
            <span style="font-size:10px;color:var(--muted)">${ss.pct}%</span>
          </div>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;gap:3px">
            <button onclick="exportVCPaymentLedgerPDF('${v.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="PDF">🖨</button>
            <button onclick="exportVCPaymentLedgerExcel('${v.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="Excel">📊</button>
            <button onclick="openLedgerEmail('vendor','${v.id}')" class="btn btn-xs" style="font-size:9px;padding:2px 5px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0" title="Email">📧</button>
          </div>
        </td>
      </tr>`;
    }).join('');
    return`<tr style="background:${rowBg};border-left:4px solid var(--blue)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${name}</div>
        <div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px">
          ${vcs.map(v=>`<span style="font-size:9px;background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:1px 7px;color:var(--muted)">${v.trade||v.csi||'General'}</span>`).join('')}
        </div>
        <div style="font-size:9px;color:var(--blue);margin-top:3px">${vcs.length} contract${vcs.length!==1?'s':''}</div>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${s.contract.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${s.paid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${s.bal>0?'var(--red)':'var(--green)'}">$${s.bal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">${progBar(s.pct)}</td>
      <td style="padding:10px 14px">${actBtns('vendor',name)}</td>
    </tr>${subRows}`;
  }).join('');

  // ── BY TRADE ─────────────────────────────────────────────────
  const byTrade={};
  vcWithInvs.forEach(v=>{
    const k=v.trade||v.csi||'General';
    if(!byTrade[k]) byTrade[k]=[];
    byTrade[k].push(v);
  });
  const trades=Object.keys(byTrade).sort();

  const tradeRows=trades.map((trade,ti)=>{
    const vcs=byTrade[trade];
    const s=calcStats(vcs);
    const rowBg=ti%2===0?'#fff':'var(--bg)';
    // sub-vendor rows
    const subRows=vcs.map(v=>{
      const ss=calcStats([v]);
      return`<tr style="background:#F4FFF8;border-left:3px solid #B8DCA0">
        <td style="padding:6px 14px 6px 30px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="font-size:9px;background:var(--green);color:#fff;padding:1px 6px;border-radius:3px;font-weight:700">VENDOR</span>
            <span style="font-size:11px;font-weight:600;color:var(--navy)">${v.vendor}</span>
            ${v.contractNo?`<span style="font-size:9px;color:var(--muted)">#${v.contractNo}</span>`:''}
          </div>
        </td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;border-bottom:1px solid var(--border)">$${ss.contract.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:var(--green);border-bottom:1px solid var(--border)">$${ss.paid.toLocaleString()}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:${ss.bal>0?'var(--red)':'var(--green)'};border-bottom:1px solid var(--border)">$${ss.bal.toLocaleString()}</td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:5px">
            <div style="width:50px;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${ss.pct}%;background:${ss.pct===100?'var(--green-m)':ss.pct>60?'var(--blue-m)':'var(--amber-m)'};border-radius:2px"></div>
            </div>
            <span style="font-size:10px;color:var(--muted)">${ss.pct}%</span>
          </div>
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid var(--border)">
          <div style="display:flex;gap:3px">
            <button onclick="exportVCPaymentLedgerPDF('${v.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="PDF">🖨</button>
            <button onclick="exportVCPaymentLedgerExcel('${v.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" title="Excel">📊</button>
            <button onclick="openLedgerEmail('vendor','${v.id}')" class="btn btn-xs" style="font-size:9px;padding:2px 5px;background:var(--blue-l);color:var(--blue);border:1px solid #B0D0F0" title="Email">📧</button>
          </div>
        </td>
      </tr>`;
    }).join('');
    return`<tr style="background:${rowBg};border-left:4px solid var(--teal)">
      <td style="padding:10px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy)">${trade}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${vcs.map(v=>v.vendor).join(' · ')}</div>
        <div style="font-size:9px;color:var(--teal);margin-top:3px">${vcs.length} vendor${vcs.length!==1?'s':''}</div>
      </td>
      <td style="padding:10px 14px;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700">$${s.contract.toLocaleString()}</td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:var(--green)">$${s.paid.toLocaleString()}</span></td>
      <td style="padding:10px 14px"><span style="font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:${s.bal>0?'var(--red)':'var(--green)'}">$${s.bal.toLocaleString()}</span></td>
      <td style="padding:10px 14px">${progBar(s.pct)}</td>
      <td style="padding:10px 14px">${actBtns('trade',trade)}</td>
    </tr>${subRows}`;
  }).join('');

  const thead=(cols)=>`<thead><tr style="background:var(--bg)">${cols.map(([lbl,col])=>`<th style="${TH};color:${col||'var(--muted)'}">${lbl}</th>`).join('')}</tr></thead>`;

  el.innerHTML=`
    <!-- ── BY VENDOR ── -->
    <div class="panel" style="margin-bottom:16px">
      <div class="ph" style="background:var(--navy2);display:flex;justify-content:space-between;align-items:center">
        <div><span class="ph-title" style="color:#fff">👤 LEDGER BY VENDOR</span><span style="font-size:10px;color:#8AAAC8;margin-left:10px">All contracts per vendor · Consolidated totals</span></div>
        <div style="display:flex;gap:5px">
          <button onclick="exportAllVendorNameLedgerPDF()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">🖨 All PDF</button>
          <button onclick="exportAllVendorNameLedgerExcel()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">📊 All Excel</button>
        </div>
      </div>
      <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
        ${thead([['Vendor Name',''],['Contract Total',''],['✓ Paid','var(--green)'],['Balance Due','var(--red)'],['Status',''],['Download / Email','']])}
        <tbody>${vendorRows}</tbody>
      </table></div>
    </div>
    <!-- ── BY TRADE ── -->
    <div class="panel" style="margin-bottom:16px">
      <div class="ph" style="background:var(--navy2);display:flex;justify-content:space-between;align-items:center">
        <div><span class="ph-title" style="color:#fff">🏗 LEDGER BY TRADE</span><span style="font-size:10px;color:#8AAAC8;margin-left:10px">Group totals · Download or email per trade</span></div>
        <div style="display:flex;gap:5px">
          <button onclick="exportAllTradeLedgerPDF()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">🖨 All PDF</button>
          <button onclick="exportAllTradeLedgerExcel()" class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)">📊 All Excel</button>
        </div>
      </div>
      <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
        ${thead([['Trade / Specialty',''],['Contract Total',''],['✓ Paid','var(--green)'],['Balance Due','var(--red)'],['Status',''],['Download / Email','']])}
        <tbody>${tradeRows}</tbody>
      </table></div>
    </div>`;
}

// ── Ledger Email Modal ────────────────────────────────────────────
function _buildLedgerText(type, ref, p){
  const lines=[];
  const now=new Date().toLocaleDateString();
  const hdr=(t)=>{lines.push(t);lines.push('='.repeat(t.length));};

  if(type==='vendor'){
    const v=(p.vendors||[]).find(x=>x.id===ref); if(!v) return '';
    const vInvs=(p.invoices||[]).filter(i=>i.vcId===ref&&i.approvalStatus==='approved');
    const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const vTotal=Number(v.amount||0); const vBal=vTotal-vPaid;
    const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
    hdr('VENDOR PAYMENT LEDGER');
    lines.push('Project   : '+p.name);
    lines.push('Project Address : '+getProjectAddressLine(p));
    lines.push('Livio Address   : '+LIVIO_OFFICE_ADDRESS);
    lines.push('Permit    : '+(p.permit||'—'));
    lines.push('Generated : '+now);
    lines.push('');
    lines.push('Vendor    : '+v.vendor);
    lines.push('Trade     : '+(v.trade||'—'));
    lines.push('CSI       : '+(v.csi||'—'));
    lines.push('');
    lines.push('Contract  : $'+vTotal.toLocaleString());
    lines.push('Paid      : $'+vPaid.toLocaleString());
    lines.push('Balance   : $'+vBal.toLocaleString());
    lines.push('Progress  : '+pct+'%');
    lines.push('');
    hdr('INVOICE DETAIL');
    vInvs.forEach(inv=>{
      const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
      const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      lines.push('');
      lines.push('  Invoice   : '+(inv.invoiceNo||'—')+' | Milestone: '+ms);
      lines.push('  Amount    : $'+Number(inv.amount||0).toLocaleString());
      lines.push('  Paid      : $'+invPaid.toLocaleString()+'  |  Balance: $'+(Number(inv.amount||0)-invPaid).toLocaleString());
      lines.push('  Status    : '+(inv.paid?'✓ Fully Paid':'Partial / Outstanding'));
      (inv.partialPayments||[]).forEach((pp,i)=>{
        lines.push('    Pmt '+(i+1)+' : $'+Number(pp.amount||0).toLocaleString()+(pp.date?' · '+fmtDate(pp.date):'')+(pp.txnNo?' | Txn: '+pp.txnNo:''));
      });
    });
  } else if(type==='quote'){
    const q=(p.quotes||[]).find(x=>x.id===ref); if(!q) return '';
    const qInvs=(p.invoices||[]).filter(i=>i.quoteId===ref&&i.approvalStatus==='approved');
    const qPaid=qInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const qTotal=Number(q.amount||0);
    const qBal=qTotal-qPaid;
    const pct=qTotal?Math.min(100,Math.round(qPaid/qTotal*100)):0;
    hdr('APPROVED QUOTE LEDGER');
    lines.push('Project   : '+p.name);
    lines.push('Project Address : '+getProjectAddressLine(p));
    lines.push('Livio Address   : '+LIVIO_OFFICE_ADDRESS);
    lines.push('Permit    : '+(p.permit||'—'));
    lines.push('Generated : '+now);
    lines.push('');
    lines.push('Vendor    : '+(q.vendor||'—'));
    lines.push('Scope     : '+(q.scope||'—'));
    lines.push('CSI       : '+(q.csi||'—'));
    lines.push('');
    lines.push('Quote     : $'+qTotal.toLocaleString());
    lines.push('Paid      : $'+qPaid.toLocaleString());
    lines.push('Balance   : $'+qBal.toLocaleString());
    lines.push('Progress  : '+pct+'%');
    lines.push('');
    hdr('INVOICE DETAIL');
    qInvs.forEach(inv=>{
      const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      lines.push('');
      lines.push('  Invoice   : '+(inv.invoiceNo||'—'));
      lines.push('  Amount    : $'+Number(inv.amount||0).toLocaleString());
      lines.push('  Paid      : $'+invPaid.toLocaleString()+'  |  Balance: $'+(Number(inv.amount||0)-invPaid).toLocaleString());
      lines.push('  Status    : '+(inv.paid?'✓ Fully Paid':'Partial / Outstanding'));
      (inv.partialPayments||[]).forEach((pp,i)=>{
        lines.push('    Pmt '+(i+1)+' : $'+Number(pp.amount||0).toLocaleString()+(pp.date?' · '+fmtDate(pp.date):'')+(pp.txnNo?' | Txn: '+pp.txnNo:''));
      });
    });
  } else if(type==='vendorname'){
    const vendorName=ref;
    const vcs=(p.vendors||[]).filter(v=>v.vendor===vendorName&&(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    let tContract=0,tPaid=0;
    vcs.forEach(v=>{tContract+=Number(v.amount||0);(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{if(i.paid)tPaid+=Number(i.amount||0);else tPaid+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);});});
    const tBal=tContract-tPaid;const pct=tContract?Math.min(100,Math.round(tPaid/tContract*100)):0;
    hdr('VENDOR PAYMENT LEDGER — '+vendorName.toUpperCase());
    lines.push('Project   : '+p.name);
    lines.push('Project Address : '+getProjectAddressLine(p));
    lines.push('Livio Address   : '+LIVIO_OFFICE_ADDRESS);
    lines.push('Permit    : '+(p.permit||'—'));
    lines.push('Generated : '+now);
    lines.push('');
    lines.push('Vendor    : '+vendorName);
    lines.push('Contracts : '+vcs.length);
    lines.push('');
    lines.push('Contract  : $'+tContract.toLocaleString());
    lines.push('Paid      : $'+tPaid.toLocaleString());
    lines.push('Balance   : $'+tBal.toLocaleString());
    lines.push('Progress  : '+pct+'%');
    vcs.forEach((v,vi)=>{
      lines.push('');
      lines.push('─── CONTRACT '+(vi+1)+' — '+(v.trade||v.csi||'General')+(v.csi?' · '+v.csi:''));
      lines.push('  Contract  : $'+Number(v.amount||0).toLocaleString());
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      lines.push('  Paid      : $'+vPaid.toLocaleString()+'  |  Balance: $'+(Number(v.amount||0)-vPaid).toLocaleString());
      vInvs.forEach(inv=>{
        const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
        const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        lines.push('    Invoice : '+(inv.invoiceNo||'—')+' | 📍 '+ms+' | $'+Number(inv.amount||0).toLocaleString()+' | Paid: $'+invPaid.toLocaleString()+' | '+(inv.paid?'✓ Paid':'Outstanding'));
        (inv.partialPayments||[]).forEach((pp,i)=>{lines.push('      Pmt '+(i+1)+' : $'+Number(pp.amount||0).toLocaleString()+(pp.date?' · '+fmtDate(pp.date):'')+(pp.txnNo?' | Txn: '+pp.txnNo:''));});
      });
    });
  } else { // trade
    const trade=ref;
    const vcs=(p.vendors||[]).filter(v=>(v.trade||v.csi||'General')===trade&&(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    let tContract=0,tPaid=0;
    vcs.forEach(v=>{
      tContract+=Number(v.amount||0);
      (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
        if(i.paid) tPaid+=Number(i.amount||0);
        else tPaid+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      });
    });
    const tBal=tContract-tPaid;
    const pct=tContract?Math.min(100,Math.round(tPaid/tContract*100)):0;
    hdr('TRADE PAYMENT LEDGER — '+trade.toUpperCase());
    lines.push('Project   : '+p.name);
    lines.push('Project Address : '+getProjectAddressLine(p));
    lines.push('Livio Address   : '+LIVIO_OFFICE_ADDRESS);
    lines.push('Permit    : '+(p.permit||'—'));
    lines.push('Generated : '+now);
    lines.push('');
    lines.push('Trade     : '+trade);
    lines.push('Vendors   : '+vcs.length);
    lines.push('');
    lines.push('Contract  : $'+tContract.toLocaleString());
    lines.push('Paid      : $'+tPaid.toLocaleString());
    lines.push('Balance   : $'+tBal.toLocaleString());
    lines.push('Progress  : '+pct+'%');
    lines.push('');
    hdr('VENDOR DETAIL');
    vcs.forEach(v=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vBal=Number(v.amount||0)-vPaid;
      lines.push('');
      lines.push('  Vendor   : '+v.vendor+'  (Contract: $'+Number(v.amount||0).toLocaleString()+')');
      lines.push('  Paid     : $'+vPaid.toLocaleString()+'  |  Balance: $'+vBal.toLocaleString());
      vInvs.forEach(inv=>{
        const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
        const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        lines.push('    Invoice : '+(inv.invoiceNo||'—')+' | '+ms+' | $'+Number(inv.amount||0).toLocaleString()+' | Paid: $'+invPaid.toLocaleString()+' | '+(inv.paid?'✓ Paid':'Outstanding'));
      });
    });
  }
  lines.push('');
  lines.push('— '+LIVIO_COMPANY_NAME+' · '+LIVIO_OFFICE_ADDRESS+' · '+now+' —');
  return lines.join('\n');
}

function openLedgerEmail(type, ref){
  const p=proj(); if(!p) return;
  let toEmail='',toName='',subject='';

  if(type==='vendor'){
    const v=(p.vendors||[]).find(x=>x.id===ref);
    if(!v){toast('⚠ Vendor not found');return;}
    toEmail=v.vendorEmail||'';
    toName=v.vendor;
    subject='Payment Ledger — '+v.vendor+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Ledger — '+v.vendor;
  } else if(type==='vendorname'){
    // Find email from any contract of this vendor
    const anyVC=(p.vendors||[]).find(v=>v.vendor===ref&&v.vendorEmail);
    toEmail=anyVC?.vendorEmail||'';
    toName=ref;
    subject='Payment Ledger — '+ref+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Ledger — '+ref;
  } else if(type==='quote'){
    const q=(p.quotes||[]).find(x=>x.id===ref);
    if(!q){toast('⚠ Quote not found');return;}
    const anyVC=(p.vendors||[]).find(v=>(v.quoteId===ref||v.vendor===q.vendor)&&v.vendorEmail);
    toEmail=anyVC?.vendorEmail||'';
    toName=q.vendor||'Vendor';
    subject='Approved Quote Ledger — '+toName+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Approved Quote Ledger — '+toName;
  } else {
    toName=ref+' Trade';
    subject='Trade Payment Ledger — '+ref+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Trade Ledger — '+ref;
  }

  const body=_buildLedgerText(type,ref,p);
  const greeting='Dear '+toName+',\n\nPlease find below the current payment ledger for your reference.\n\n';
  const closing='\n\nPlease review and contact us if you have any questions.\n\nBest regards,\nLivio Building Systems';

  vEl('ledger-email-type').value=type;
  vEl('ledger-email-ref').value=ref;
  vEl('ledger-email-to').value=toEmail;
  vEl('ledger-email-cc').value='';
  vEl('ledger-email-subject').value=subject;
  vEl('ledger-email-body').value=greeting+body+closing;

  const st=vEl('ledger-email-status');
  if(st) st.innerHTML=getEmailStatusMarkup(getEmailConfig());
  vEl('mo-ledger-email').classList.add('open');
}

function closeLedgerEmail(){vEl('mo-ledger-email').classList.remove('open');}

function copyLedgerToClipboard(){
  const txt=vEl('ledger-email-body')?.value||'';
  navigator.clipboard?.writeText(txt).then(()=>toast('📋 Ledger copied to clipboard')).catch(()=>toast('⚠ Copy failed'));
}

function sendLedgerEmail(){
  const to=vEl('ledger-email-to').value.trim();
  const cc=vEl('ledger-email-cc').value.trim();
  const subject=vEl('ledger-email-subject').value.trim();
  const body=vEl('ledger-email-body').value.trim();
  if(!to){toast('⚠ Recipient email is required');return;}
  if(!subject){toast('⚠ Subject is required');return;}
  toast('📧 Sending…',3000);
  sendAppEmail({to,cc,subject,message:body})
    .then(()=>{toast('✅ Ledger emailed to '+to);closeLedgerEmail();})
    .catch(e=>{console.error('Ledger email send error:',e);toast('⚠ Email send failed: '+e.message,'error',6000);});
}

// ── Trade Ledger PDF ──────────────────────────────────────────────
openLedgerEmail = function(type, ref){
  const p=proj(); if(!p) return;
  let toEmail='',toName='',subject='';

  if(type==='vendor'){
    const v=(p.vendors||[]).find(x=>x.id===ref);
    if(!v){toast('⚠ Vendor not found');return;}
    toEmail=(v.vendorEmail||getVendorEmailAcrossProjects(v.vendor)||'').trim();
    toName=v.vendor;
    subject='Payment Ledger — '+v.vendor+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Ledger — '+v.vendor;
  } else if(type==='vendorname'){
    toEmail=getVendorEmailAcrossProjects(ref);
    toName=ref;
    subject='Payment Ledger — '+ref+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Ledger — '+ref;
  } else if(type==='quote'){
    const q=(p.quotes||[]).find(x=>x.id===ref);
    if(!q){toast('⚠ Quote not found');return;}
    toEmail=getVendorEmailAcrossProjects(q.vendor);
    toName=q.vendor||'Vendor';
    subject='Approved Quote Ledger — '+toName+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Approved Quote Ledger — '+toName;
  } else {
    toName=ref+' Trade';
    subject='Trade Payment Ledger — '+ref+' — '+p.name;
    vEl('ledger-email-title').textContent='📧 Email Trade Ledger — '+ref;
  }

  let body=_buildLedgerText(type,ref,p);
  body=body.replace(/Address\s*:\s*[^\n]*/i,`Project Address : ${getProjectAddressLine(p)}\nLivio Address   : ${LIVIO_OFFICE_ADDRESS}`);
  const greeting='Dear '+toName+',\n\nPlease find below the current payment ledger for your reference.\n\n';
  const closing='\n\nReply Email: '+LIVIO_REPLY_EMAIL+'\n\nPlease review and contact us if you have any questions.\n\nBest regards,\n'+getLivioEmailSignature();

  vEl('ledger-email-type').value=type;
  vEl('ledger-email-ref').value=ref;
  vEl('ledger-email-to').value=toEmail;
  vEl('ledger-email-cc').value='';
  vEl('ledger-email-subject').value=subject;
  vEl('ledger-email-body').value=greeting+body+closing;

  const st=vEl('ledger-email-status');
  if(st) st.innerHTML=getEmailStatusMarkup(getEmailConfig());
  vEl('mo-ledger-email').classList.add('open');
}

function exportTradeLedgerPDF(trade){
  const p=proj();if(!p)return;
  const vcs=(p.vendors||[]).filter(v=>(v.trade||v.csi||'General')===trade&&(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  if(!vcs.length){toast('⚠ No vendors in trade: '+trade);return;}

  let tContract=0,tPaid=0;
  const subsHTML=vcs.map((v,vi)=>{
    const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
    const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const vTotal=Number(v.amount||0); const vBal=vTotal-vPaid;
    const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
    tContract+=vTotal; tPaid+=vPaid;

    const invRows=vInvs.map((inv,pi)=>{
      const bg=inv.paid?'#EDF8E5':pi%2===0?'#fff':'#fafaf8';
      const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
      const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      const invBal=Number(inv.amount||0)-invPaid;
      const pmtRows=(inv.partialPayments||[]).map(pp=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(pp.amount||0).toLocaleString()+(pp.date?' · '+fmtDate(pp.date):'')+(pp.txnNo?' | Txn: '+pp.txnNo:'')+'</div>').join('');
      return`<tr style="background:${bg}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${inv.paid?'#2D6A0F':'#A86200'};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${inv.paid?'✓ PAID':'PARTIAL'}</span><strong>${inv.invoiceNo||'—'}</strong> — 📍 ${ms}${pmtRows}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(inv.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${invPaid.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${invBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #eee">$${invBal.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${pct}%</td></tr>`;
    }).join('');

    return`<tr style="background:${vi%2===0?'#f0f4f9':'#fff'}"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${v.vendor}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">${v.trade||'—'}</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${vTotal.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${vPaid.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${vBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #ccc">$${vBal.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${pct===100?'#2D6A0F':'#A86200'};border-bottom:1px solid #ccc">${pct}%</td></tr>${invRows}`;
  }).join('');

  const tBal=tContract-tPaid; const tPct=tContract?Math.min(100,Math.round(tPaid/tContract*100)):0;
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Trade Ledger — ${trade}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}h2{font-size:13px;color:#1A6BC4;margin-bottom:10px}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Trade Payment Ledger</h1><h2>Trade: ${trade}</h2>
  <div class="meta">${p.name} · ${getProjectAddressLine(p)}<br>Livio Address: ${LIVIO_OFFICE_ADDRESS}<br>Permit: ${p.permit||'—'} · ${LIVIO_COMPANY_NAME} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Contract</div><div style="font-size:18px;font-weight:700">$${tContract.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${tPaid.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Balance</div><div style="font-size:18px;font-weight:700;color:${tBal>0?'#9B1F1F':'#2D6A0F'}">$${tBal.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Progress</div><div style="font-size:18px;font-weight:700;color:${tPct===100?'#2D6A0F':'#A86200'}">${tPct}%</div></div>
  </div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade</th><th>Contract</th><th>✓ Paid</th><th>Balance</th><th>%</th></tr></thead>
  <tbody>${subsHTML}<tr class="tot"><td colspan="2">TOTAL — ${vcs.length} vendor(s)</td><td>$${tContract.toLocaleString()}</td><td>$${tPaid.toLocaleString()}</td><td>$${tBal.toLocaleString()}</td><td>${tPct}%</td></tr></tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${LIVIO_COMPANY_NAME} · ${LIVIO_OFFICE_ADDRESS} · ${p.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`;

  const win=window.open('','_blank');if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(()=>{win.focus();win.print();},600);
  toast('🖨 Trade PDF — '+trade);
}

// ── Trade Ledger Excel ────────────────────────────────────────────
function exportTradeLedgerExcel(trade){
  const p=proj();if(!p)return;
  toast('📊 Building Excel…',3000);
  if(window.XLSX){_doTradeLedgerExcel(p,trade);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doTradeLedgerExcel(p,trade);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}
function _doTradeLedgerExcel(p,trade){
  try{
    const XLSX=window.XLSX;
    const vcs=(p.vendors||[]).filter(v=>(v.trade||v.csi||'General')===trade&&(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    if(!vcs.length){toast('⚠ No vendors in trade: '+trade);return;}
    const wb=XLSX.utils.book_new();

    let tContract=0,tPaid=0;
    const data=[
      ['TRADE PAYMENT LEDGER — '+trade.toUpperCase()],
      ['Project:',p.name,'','Project Address:',getProjectAddressLine(p)],
      ['Livio Address:',LIVIO_OFFICE_ADDRESS,'','Generated:',new Date().toLocaleDateString()],
      ['Permit:',p.permit||''],
      ['Trade:',trade],
      [],
      ['Vendor','Trade','Contract Amount','Paid','Balance Due','Progress %','Invoice #','Milestone','Inv. Amount','Inv. Paid','Inv. Balance','Status'],
    ];

    vcs.forEach(v=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;
      const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
      tContract+=vTotal;tPaid+=vPaid;

      if(!vInvs.length){data.push([v.vendor,v.trade||'',vTotal,vPaid,vBal,pct+'%','','','','','','']);}
      else{
        vInvs.forEach((inv,ii)=>{
          const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'';
          const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
          const invBal=Number(inv.amount||0)-invPaid;
          data.push([ii===0?v.vendor:'',ii===0?(v.trade||''):'',ii===0?vTotal:'',ii===0?vPaid:'',ii===0?vBal:'',ii===0?pct+'%':'',inv.invoiceNo||'',ms,Number(inv.amount||0),invPaid,invBal,inv.paid?'Paid':'Partial']);
          (inv.partialPayments||[]).forEach(pp=>data.push(['','','','','','','  ↳ Partial','',Number(pp.amount||0),Number(pp.amount||0),0,pp.date||'']));
        });
      }
      data.push([]);
    });

    const tBal=tContract-tPaid;
    data.push(['TOTAL','',tContract,tPaid,tBal,(tContract?Math.min(100,Math.round(tPaid/tContract*100)):0)+'%','','','','','','']);

    const ws=XLSX.utils.aoa_to_sheet(data);
    ws['!cols']=[{wch:26},{wch:16},{wch:14},{wch:12},{wch:14},{wch:10},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];
    XLSX.utils.book_append_sheet(wb,ws,'Trade Ledger');

    const fname=(trade.replace(/[^a-zA-Z0-9_\-]/g,'_'))+'_TradeLedger_'+(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'.xlsx';
    XLSX.writeFile(wb,fname);
    toast('📊 Trade Excel downloaded — '+trade);
  }catch(e){console.error(e);toast('⚠ Excel error: '+e.message);}
}

// ── Vendor-Name Ledger PDF (all contracts for one vendor name) ────────────
function exportVendorNameLedgerPDF(vendorName){
  const p=proj();if(!p)return;
  const vcs=(p.vendors||[]).filter(v=>v.vendor===vendorName&&(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  const manualInvs=(p.invoices||[]).filter(i=>i.isManual&&i.vendor===vendorName&&i.approvalStatus==='approved');
  if(!vcs.length&&!manualInvs.length){toast('⚠ No approved invoices for vendor: '+vendorName);return;}

  let tContract=0,tPaid=0;
  const subsHTML=vcs.map((v,vi)=>{
    const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
    const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
    const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
    tContract+=vTotal;tPaid+=vPaid;
    const invRows=vInvs.map((inv,pi)=>{
      const bg=inv.paid?'#EDF8E5':pi%2===0?'#fff':'#fafaf8';
      const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
      const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
      const invBal=Number(inv.amount||0)-invPaid;
      const pmtRows=(inv.partialPayments||[]).map(pp=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(pp.amount||0).toLocaleString()+(pp.date?' · '+fmtDate(pp.date):'')+(pp.txnNo?' | Txn: '+pp.txnNo:'')+'</div>').join('');
      return`<tr style="background:${bg}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${inv.paid?'#2D6A0F':'#A86200'};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${inv.paid?'✓ PAID':'PARTIAL'}</span><strong>${inv.invoiceNo||'—'}</strong> — 📍 ${ms}${pmtRows}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(inv.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${invPaid.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${invBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #eee">$${invBal.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${pct}%</td></tr>`;
    }).join('');
    return`<tr style="background:#e8f0f9"><td colspan="6" style="padding:7px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #ccc;color:#0C1B2E">CONTRACT ${vi+1} — <span style="color:#1A6BC4">${v.trade||v.csi||'General'}</span>${v.csi?' · '+v.csi:''}</td></tr><tr style="background:${vi%2===0?'#f0f4f9':'#fff'}"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${v.vendor}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">${v.trade||'—'}</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${vTotal.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${vPaid.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${vBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #ccc">$${vBal.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${pct===100?'#2D6A0F':'#A86200'};border-bottom:1px solid #ccc">${pct}%</td></tr>${invRows}`;
  }).join('');
  const manualTotal=manualInvs.reduce((a,inv)=>a+Number(inv.amount||0),0);
  const manualPaid=manualInvs.reduce((a,inv)=>a+(inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0)),0);
  const manualBal=manualTotal-manualPaid;
  const manualPct=manualTotal?Math.min(100,Math.round(manualPaid/manualTotal*100)):0;
  const manualHTML=manualInvs.length?`<tr style="background:#e8f7f5"><td colspan="6" style="padding:7px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #ccc;color:#0C1B2E">MANUAL INVOICES</td></tr>
    <tr style="background:#f6fcfb"><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">${vendorName}</td><td style="padding:8px;font-size:10px;color:#555;border-bottom:1px solid #ccc">Manual / No Contract</td><td style="padding:8px;font-size:12px;font-weight:700;border-bottom:1px solid #ccc">$${manualTotal.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ccc">$${manualPaid.toLocaleString()}</td><td style="padding:8px;font-size:12px;font-weight:700;color:${manualBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #ccc">$${manualBal.toLocaleString()}</td><td style="padding:8px;font-size:11px;font-weight:700;color:${manualPct===100?'#2D6A0F':'#A86200'};border-bottom:1px solid #ccc">${manualPct}%</td></tr>
    ${manualInvs.map((inv,pi)=>{const bg=inv.paid?'#EDF8E5':pi%2===0?'#fff':'#fafaf8';const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);const invBal=Number(inv.amount||0)-invPaid;const pmtRows=(inv.partialPayments||[]).map(pp=>'<div style="font-size:9px;color:#2D6A0F;background:#EDF8E5;padding:2px 7px;border-radius:3px;margin-top:2px">&#10003; $'+Number(pp.amount||0).toLocaleString()+(pp.date?' · '+fmtDate(pp.date):'')+(pp.txnNo?' | Txn: '+pp.txnNo:'')+'</div>').join('');return`<tr style="background:${bg}"><td style="padding:5px 8px 5px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${inv.paid?'#2D6A0F':'#A86200'};color:#fff;padding:1px 5px;border-radius:3px;font-size:9px;margin-right:5px">${inv.paid?'✓ PAID':'PARTIAL'}</span><strong>${inv.invoiceNo||'—'}</strong> — 📍 Manual / No Contract${pmtRows}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee">$${Number(inv.amount||0).toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #eee">$${invPaid.toLocaleString()}</td><td style="padding:5px 8px;font-size:11px;font-weight:700;color:${invBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #eee">$${invBal.toLocaleString()}</td><td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">${manualPct}%</td></tr>`;}).join('')}`:'';
  tContract+=manualTotal;tPaid+=manualPaid;

  const tBal=tContract-tPaid;const tPct=tContract?Math.min(100,Math.round(tPaid/tContract*100)):0;
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Vendor Ledger — ${vendorName}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}
  h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}h2{font-size:13px;color:#1A6BC4;margin-bottom:10px}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:7px 8px;font-size:9px;text-transform:uppercase;text-align:left}
  .tot td{background:#0C1B2E;color:#fff;font-weight:700;padding:9px 8px}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>Vendor Payment Ledger</h1><h2>Vendor: ${vendorName} · ${vcs.length} Contract(s)</h2>
  <div class="meta">${p.name} · ${getProjectAddressLine(p)}<br>Livio Address: ${LIVIO_OFFICE_ADDRESS}<br>Permit: ${p.permit||'—'} · ${LIVIO_COMPANY_NAME} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Contract</div><div style="font-size:18px;font-weight:700">$${tContract.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${tPaid.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Balance</div><div style="font-size:18px;font-weight:700;color:${tBal>0?'#9B1F1F':'#2D6A0F'}">$${tBal.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Progress</div><div style="font-size:18px;font-weight:700;color:${tPct===100?'#2D6A0F':'#A86200'}">${tPct}%</div></div>
  </div>
  <table><thead><tr><th>Vendor / Invoice</th><th>Trade</th><th>Contract</th><th>✓ Paid</th><th>Balance</th><th>%</th></tr></thead>
  <tbody>${subsHTML}${manualHTML}<tr class="tot"><td colspan="2">TOTAL — ${vcs.length} contract(s)${manualInvs.length?' + manual invoices':''}</td><td>$${tContract.toLocaleString()}</td><td>$${tPaid.toLocaleString()}</td><td>$${tBal.toLocaleString()}</td><td>${tPct}%</td></tr></tbody></table>
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${LIVIO_COMPANY_NAME} · ${LIVIO_OFFICE_ADDRESS} · ${p.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`;

  const win=window.open('','_blank');if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(()=>{win.focus();win.print();},600);
  toast('🖨 Vendor PDF — '+vendorName);
}

// ── Vendor-Name Ledger Excel ──────────────────────────────────────────────
function exportVendorNameLedgerExcel(vendorName){
  const p=proj();if(!p)return;
  toast('📊 Building Excel…',3000);
  if(window.XLSX){_doVendorNameLedgerExcel(p,vendorName);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doVendorNameLedgerExcel(p,vendorName);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}
function _doVendorNameLedgerExcel(p,vendorName){
  try{
    const XLSX=window.XLSX;
    const vcs=(p.vendors||[]).filter(v=>v.vendor===vendorName&&(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    const manualInvs=(p.invoices||[]).filter(i=>i.isManual&&i.vendor===vendorName&&i.approvalStatus==='approved');
    if(!vcs.length&&!manualInvs.length){toast('⚠ No approved invoices for vendor: '+vendorName);return;}
    const wb=XLSX.utils.book_new();
    let tContract=0,tPaid=0;
    const data=[
      ['VENDOR PAYMENT LEDGER — '+vendorName.toUpperCase()],
      ['Project:',p.name,'','Project Address:',getProjectAddressLine(p)],
      ['Livio Address:',LIVIO_OFFICE_ADDRESS,'','Generated:',new Date().toLocaleDateString()],
      ['Permit:',p.permit||'','','Contracts:',vcs.length],
      ['Vendor:',vendorName],
      [],
      ['Contract #','Trade','Contract Amount','Paid','Balance Due','Progress %','Invoice #','Milestone','Inv. Amount','Inv. Paid','Inv. Balance','Status'],
    ];
    vcs.forEach((v,vi)=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
      tContract+=vTotal;tPaid+=vPaid;
      if(!vInvs.length){data.push(['Contract '+(vi+1),v.trade||'',vTotal,vPaid,vBal,pct+'%','','','','','','']);}
      else{
        vInvs.forEach((inv,ii)=>{
          const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'';
          const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
          const invBal=Number(inv.amount||0)-invPaid;
          data.push([ii===0?'Contract '+(vi+1):'',ii===0?(v.trade||''):'',ii===0?vTotal:'',ii===0?vPaid:'',ii===0?vBal:'',ii===0?pct+'%':'',inv.invoiceNo||'',ms,Number(inv.amount||0),invPaid,invBal,inv.paid?'Paid':'Partial']);
          (inv.partialPayments||[]).forEach(pp=>data.push(['','','','','','','  ↳ Partial','',Number(pp.amount||0),Number(pp.amount||0),0,(pp.date||'')+(pp.txnNo?' | Txn:'+pp.txnNo:'')]));
        });
      }
      data.push([]);
    });
    if(manualInvs.length){
      const manualTotal=manualInvs.reduce((a,inv)=>a+Number(inv.amount||0),0);
      const manualPaid=manualInvs.reduce((a,inv)=>a+(inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0)),0);
      const manualBal=manualTotal-manualPaid;
      const manualPct=manualTotal?Math.min(100,Math.round(manualPaid/manualTotal*100)):0;
      tContract+=manualTotal;tPaid+=manualPaid;
      manualInvs.forEach((inv,ii)=>{
        const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        const invBal=Number(inv.amount||0)-invPaid;
        data.push([ii===0?'Manual Invoices':'','Manual / No Contract',ii===0?manualTotal:'',ii===0?manualPaid:'',ii===0?manualBal:'',ii===0?manualPct+'%':'',inv.invoiceNo||'','Manual / No Contract',Number(inv.amount||0),invPaid,invBal,inv.paid?'Paid':'Partial']);
        (inv.partialPayments||[]).forEach(pp=>data.push(['','','','','','','  ↳ Partial','',Number(pp.amount||0),Number(pp.amount||0),0,pp.date||'']));
      });
      data.push([]);
    }
    const tBal=tContract-tPaid;
    data.push(['TOTAL','',tContract,tPaid,tBal,(tContract?Math.min(100,Math.round(tPaid/tContract*100)):0)+'%','','','','','','']);
    const ws=XLSX.utils.aoa_to_sheet(data);
    ws['!cols']=[{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:10},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];
    XLSX.utils.book_append_sheet(wb,ws,'Vendor Ledger');
    const fname=(vendorName.replace(/[^a-zA-Z0-9_\-]/g,'_'))+'_VendorLedger_'+(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'.xlsx';
    XLSX.writeFile(wb,fname);
    toast('📊 Vendor Excel downloaded — '+vendorName);
  }catch(e){console.error(e);toast('⚠ Excel error: '+e.message);}
}

// ── All-Vendors PDF (one combined document) ───────────────────────────────
function exportAllVendorNameLedgerPDF(){
  const p=proj();if(!p)return;
  const allVCs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  if(!allVCs.length){toast('⚠ No approved invoices');return;}
  const nameMap=new Map();
  allVCs.forEach(v=>{if(!nameMap.has(v.vendor))nameMap.set(v.vendor,[]);nameMap.get(v.vendor).push(v);});
  let allContract=0,allPaid=0;
  const vendorSections=[...nameMap.entries()].map(([name,vcs])=>{
    let tC=0,tP=0;
    const rows=vcs.map((v,vi)=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
      tC+=vTotal;tP+=vPaid;
      const invRows=vInvs.map(inv=>{
        const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
        const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        const invBal=Number(inv.amount||0)-invPaid;
        const pmts=(inv.partialPayments||[]).map(pp=>'<div style="font-size:9px;color:#2D6A0F;padding:1px 7px">&#10003; $'+Number(pp.amount||0).toLocaleString()+(pp.txnNo?' | Txn:'+pp.txnNo:'')+'</div>').join('');
        return`<tr style="background:${inv.paid?'#EDF8E5':'#fff'}"><td style="padding:4px 8px 4px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${inv.paid?'#2D6A0F':'#A86200'};color:#fff;padding:1px 4px;border-radius:3px;font-size:8px">${inv.paid?'PAID':'PARTIAL'}</span> ${inv.invoiceNo||'—'} — 📍 ${ms}${pmts}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">$${Number(inv.amount||0).toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:#2D6A0F;border-bottom:1px solid #eee">$${invPaid.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:${invBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #eee">$${invBal.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">${pct}%</td></tr>`;
      }).join('');
      return`<tr style="background:#e8f0f9"><td colspan="6" style="padding:5px 8px;font-size:10px;font-weight:700;color:#0C1B2E;border-bottom:1px solid #bcd">CONTRACT ${vi+1} · ${v.trade||v.csi||'General'}${v.csi?' · '+v.csi:''}</td></tr><tr><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">${v.vendor}</td><td style="padding:6px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${v.trade||'—'}</td><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">$${vTotal.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${vPaid.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${vBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #ddd">$${vBal.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${pct===100?'#2D6A0F':'#A86200'};border-bottom:1px solid #ddd">${pct}%</td></tr>${invRows}`;
    }).join('');
    const tB=tC-tP;const tPct=tC?Math.min(100,Math.round(tP/tC*100)):0;
    allContract+=tC;allPaid+=tP;
    return`<div style="margin-bottom:22px;border:1px solid #dce3ea;border-radius:6px;overflow:hidden">
      <div style="background:#0C1B2E;color:#fff;padding:9px 12px;font-size:13px;font-weight:700">👤 ${name} <span style="font-size:10px;font-weight:400;color:#8AAAC8;margin-left:8px">${vcs.length} contract(s)</span><span style="float:right;font-size:11px">Contract $${tC.toLocaleString()} · Paid $${tP.toLocaleString()} · Bal $${tB.toLocaleString()} · ${tPct}%</span></div>
      <table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Vendor/Invoice</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Trade</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Contract</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">✓ Paid</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Balance</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">%</th></tr></thead><tbody>${rows}<tr style="background:#0C1B2E"><td colspan="2" style="padding:6px 8px;color:#fff;font-weight:700">SUBTOTAL</td><td style="padding:6px 8px;color:#fff;font-weight:700">$${tC.toLocaleString()}</td><td style="padding:6px 8px;color:#7CC4F8;font-weight:700">$${tP.toLocaleString()}</td><td style="padding:6px 8px;color:${tB>0?'#F8A4A4':'#7CC4F8'};font-weight:700">$${tB.toLocaleString()}</td><td style="padding:6px 8px;color:#fff;font-weight:700">${tPct}%</td></tr></tbody></table></div>`;
  }).join('');

  const allBal=allContract-allPaid;const allPct=allContract?Math.min(100,Math.round(allPaid/allContract*100)):0;
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>All Vendor Ledgers — ${p.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>All Vendor Payment Ledgers</h1>
  <div class="meta">${p.name} · ${getProjectAddressLine(p)}<br>Livio Address: ${LIVIO_OFFICE_ADDRESS}<br>Permit: ${p.permit||'—'} · ${LIVIO_COMPANY_NAME} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Contract</div><div style="font-size:18px;font-weight:700">$${allContract.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${allPaid.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Balance</div><div style="font-size:18px;font-weight:700;color:${allBal>0?'#9B1F1F':'#2D6A0F'}">$${allBal.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Overall Progress</div><div style="font-size:18px;font-weight:700;color:${allPct===100?'#2D6A0F':'#A86200'}">${allPct}%</div></div>
  </div>
  ${vendorSections}
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${LIVIO_COMPANY_NAME} · ${LIVIO_OFFICE_ADDRESS} · ${p.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`;

  const win=window.open('','_blank');if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(()=>{win.focus();win.print();},600);
  toast('🖨 All Vendor Ledgers PDF');
}

// ── All-Vendors Excel ─────────────────────────────────────────────────────
function exportAllVendorNameLedgerExcel(){
  const p=proj();if(!p)return;
  toast('📊 Building All-Vendor Excel…',3000);
  if(window.XLSX){_doAllVendorLedgerExcel(p);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doAllVendorLedgerExcel(p);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}
function _doAllVendorLedgerExcel(p){
  try{
    const XLSX=window.XLSX;
    const allVCs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    if(!allVCs.length){toast('⚠ No approved invoices');return;}
    const nameMap=new Map();
    allVCs.forEach(v=>{if(!nameMap.has(v.vendor))nameMap.set(v.vendor,[]);nameMap.get(v.vendor).push(v);});
    const wb=XLSX.utils.book_new();

    // Summary sheet
    const summary=[
      ['ALL VENDOR PAYMENT LEDGER'],
      ['Project:',p.name,'','Generated:',new Date().toLocaleDateString()],
      ['Project Address:',getProjectAddressLine(p),'','Permit:',p.permit||''],
      ['Livio Address:',LIVIO_OFFICE_ADDRESS],
      [],
      ['Vendor','Contracts','Contract Amount','Total Paid','Total Balance','Progress %'],
    ];
    let gC=0,gP=0;
    [...nameMap.entries()].forEach(([name,vcs])=>{
      let tC=0,tP=0;
      vcs.forEach(v=>{
        tC+=Number(v.amount||0);
        (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
          if(i.paid)tP+=Number(i.amount||0);else tP+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        });
      });
      const tB=tC-tP;const pct=tC?Math.min(100,Math.round(tP/tC*100)):0;
      summary.push([name,vcs.length,tC,tP,tB,pct+'%']);
      gC+=tC;gP+=tP;
    });
    summary.push([]);
    summary.push(['GRAND TOTAL','',gC,gP,gC-gP,(gC?Math.min(100,Math.round(gP/gC*100)):0)+'%']);
    const wsSummary=XLSX.utils.aoa_to_sheet(summary);
    wsSummary['!cols']=[{wch:26},{wch:10},{wch:16},{wch:14},{wch:16},{wch:12}];
    XLSX.utils.book_append_sheet(wb,wsSummary,'Summary');

    // One sheet per vendor
    [...nameMap.entries()].forEach(([name,vcs])=>{
      const data=[
        ['VENDOR: '+name.toUpperCase()],
        ['Project:',p.name,'','Generated:',new Date().toLocaleDateString()],
        ['Contracts:',vcs.length],
        [],
        ['Contract #','Trade','Contract Amt','Paid','Balance','%','Invoice #','Milestone','Inv. Amt','Inv. Paid','Inv. Bal','Status'],
      ];
      vcs.forEach((v,vi)=>{
        const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
        const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
        const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
        if(!vInvs.length){data.push(['Contract '+(vi+1),v.trade||'',vTotal,vPaid,vBal,pct+'%','','','','','','']);}
        else{
          vInvs.forEach((inv,ii)=>{
            const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'';
            const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
            const invBal=Number(inv.amount||0)-invPaid;
            data.push([ii===0?'Contract '+(vi+1):'',ii===0?(v.trade||''):'',ii===0?vTotal:'',ii===0?vPaid:'',ii===0?vBal:'',ii===0?pct+'%':'',inv.invoiceNo||'',ms,Number(inv.amount||0),invPaid,invBal,inv.paid?'Paid':'Partial']);
            (inv.partialPayments||[]).forEach(pp=>data.push(['','','','','','','  ↳ Partial','',Number(pp.amount||0),Number(pp.amount||0),0,(pp.date||'')+(pp.txnNo?' | Txn:'+pp.txnNo:'')]));
          });
        }
        data.push([]);
      });
      const ws=XLSX.utils.aoa_to_sheet(data);
      ws['!cols']=[{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:8},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];
      const sheetName=name.replace(/[^a-zA-Z0-9 ]/g,'').substring(0,31);
      XLSX.utils.book_append_sheet(wb,ws,sheetName);
    });

    const fname='AllVendorLedgers_'+(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'.xlsx';
    XLSX.writeFile(wb,fname);
    toast('📊 All Vendor Excel downloaded');
  }catch(e){console.error(e);toast('⚠ Excel error: '+e.message);}
}

// ── All-Trades PDF (one combined document) ───────────────────────────────
function exportAllTradeLedgerPDF(){
  const p=proj();if(!p)return;
  const allVCs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
  if(!allVCs.length){toast('⚠ No approved invoices');return;}
  const tradeMap=new Map();
  allVCs.forEach(v=>{const t=v.trade||v.csi||'General';if(!tradeMap.has(t))tradeMap.set(t,[]);tradeMap.get(t).push(v);});
  let allContract=0,allPaid=0;

  const tradeSections=[...tradeMap.entries()].map(([trade,vcs])=>{
    let tC=0,tP=0;
    const rows=vcs.map((v,vi)=>{
      const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
      const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
      const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
      tC+=vTotal;tP+=vPaid;
      const invRows=vInvs.map(inv=>{
        const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'—';
        const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        const invBal=Number(inv.amount||0)-invPaid;
        const pmts=(inv.partialPayments||[]).map(pp=>'<div style="font-size:9px;color:#2D6A0F;padding:1px 7px">&#10003; $'+Number(pp.amount||0).toLocaleString()+(pp.txnNo?' | Txn:'+pp.txnNo:'')+'</div>').join('');
        return`<tr style="background:${inv.paid?'#EDF8E5':'#fff'}"><td style="padding:4px 8px 4px 24px;font-size:10px;border-bottom:1px solid #eee" colspan="2"><span style="background:${inv.paid?'#2D6A0F':'#A86200'};color:#fff;padding:1px 4px;border-radius:3px;font-size:8px">${inv.paid?'PAID':'PARTIAL'}</span> ${inv.invoiceNo||'—'} — 📍 ${ms}${pmts}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">$${Number(inv.amount||0).toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:#2D6A0F;border-bottom:1px solid #eee">$${invPaid.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;color:${invBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #eee">$${invBal.toLocaleString()}</td><td style="padding:4px 8px;font-size:10px;border-bottom:1px solid #eee">${pct}%</td></tr>`;
      }).join('');
      return`<tr><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">${v.vendor}</td><td style="padding:6px 8px;font-size:10px;color:#555;border-bottom:1px solid #ddd">${v.csi||'—'}</td><td style="padding:6px 8px;font-weight:700;border-bottom:1px solid #ddd">$${vTotal.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:#2D6A0F;border-bottom:1px solid #ddd">$${vPaid.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${vBal>0?'#9B1F1F':'#2D6A0F'};border-bottom:1px solid #ddd">$${vBal.toLocaleString()}</td><td style="padding:6px 8px;font-weight:700;color:${pct===100?'#2D6A0F':'#A86200'};border-bottom:1px solid #ddd">${pct}%</td></tr>${invRows}`;
    }).join('');
    const tB=tC-tP;const tPct=tC?Math.min(100,Math.round(tP/tC*100)):0;
    allContract+=tC;allPaid+=tP;
    return`<div style="margin-bottom:22px;border:1px solid #dce3ea;border-radius:6px;overflow:hidden">
      <div style="background:#0C1B2E;color:#fff;padding:9px 12px;font-size:13px;font-weight:700">🏗 ${trade} <span style="font-size:10px;font-weight:400;color:#8AAAC8;margin-left:8px">${vcs.length} vendor(s)</span><span style="float:right;font-size:11px">Contract $${tC.toLocaleString()} · Paid $${tP.toLocaleString()} · Bal $${tB.toLocaleString()} · ${tPct}%</span></div>
      <table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Vendor</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">CSI</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Contract</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">✓ Paid</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">Balance</th><th style="background:#162438;color:#fff;padding:5px 8px;font-size:9px;text-align:left">%</th></tr></thead><tbody>${rows}<tr style="background:#0C1B2E"><td colspan="2" style="padding:6px 8px;color:#fff;font-weight:700">SUBTOTAL — ${vcs.length} vendor(s)</td><td style="padding:6px 8px;color:#fff;font-weight:700">$${tC.toLocaleString()}</td><td style="padding:6px 8px;color:#7CC4F8;font-weight:700">$${tP.toLocaleString()}</td><td style="padding:6px 8px;color:${tB>0?'#F8A4A4':'#7CC4F8'};font-weight:700">$${tB.toLocaleString()}</td><td style="padding:6px 8px;color:#fff;font-weight:700">${tPct}%</td></tr></tbody></table></div>`;
  }).join('');

  const allBal=allContract-allPaid;const allPct=allContract?Math.min(100,Math.round(allPaid/allContract*100)):0;
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>All Trade Ledgers — ${p.name}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}h1{font-size:20px;margin-bottom:2px;color:#0C1B2E}
  .meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.8}
  @media print{body{padding:14px}@page{margin:12mm}}</style></head><body>
  <h1>All Trade Payment Ledgers</h1>
  <div class="meta">${p.name} · ${getProjectAddressLine(p)}<br>Livio Address: ${LIVIO_OFFICE_ADDRESS}<br>Permit: ${p.permit||'—'} · ${LIVIO_COMPANY_NAME} · ${new Date().toLocaleDateString()}</div>
  <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Contract</div><div style="font-size:18px;font-weight:700">$${allContract.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Paid</div><div style="font-size:18px;font-weight:700;color:#2D6A0F">$${allPaid.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Total Balance</div><div style="font-size:18px;font-weight:700;color:${allBal>0?'#9B1F1F':'#2D6A0F'}">$${allBal.toLocaleString()}</div></div>
    <div style="border:1px solid #ddd;border-radius:5px;padding:8px 14px;text-align:center"><div style="font-size:9px;text-transform:uppercase;color:#777">Overall Progress</div><div style="font-size:18px;font-weight:700;color:${allPct===100?'#2D6A0F':'#A86200'}">${allPct}%</div></div>
  </div>
  ${tradeSections}
  <div style="margin-top:14px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">${LIVIO_COMPANY_NAME} · ${LIVIO_OFFICE_ADDRESS} · ${p.name} · ${new Date().toLocaleDateString()}</div>
  </body></html>`;

  const win=window.open('','_blank');if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(()=>{win.focus();win.print();},600);
  toast('🖨 All Trade Ledgers PDF');
}

// ── All-Trades Excel ──────────────────────────────────────────────────────
function exportAllTradeLedgerExcel(){
  const p=proj();if(!p)return;
  toast('📊 Building All-Trade Excel…',3000);
  if(window.XLSX){_doAllTradeLedgerExcel(p);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doAllTradeLedgerExcel(p);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}
function _doAllTradeLedgerExcel(p){
  try{
    const XLSX=window.XLSX;
    const allVCs=(p.vendors||[]).filter(v=>(p.invoices||[]).some(i=>i.vcId===v.id&&i.approvalStatus==='approved'));
    if(!allVCs.length){toast('⚠ No approved invoices');return;}
    const tradeMap=new Map();
    allVCs.forEach(v=>{const t=v.trade||v.csi||'General';if(!tradeMap.has(t))tradeMap.set(t,[]);tradeMap.get(t).push(v);});
    const wb=XLSX.utils.book_new();

    // Summary sheet
    const summary=[
      ['ALL TRADE PAYMENT LEDGER'],
      ['Project:',p.name,'','Generated:',new Date().toLocaleDateString()],
      ['Project Address:',getProjectAddressLine(p),'','Permit:',p.permit||''],
      ['Livio Address:',LIVIO_OFFICE_ADDRESS],
      [],
      ['Trade','Vendors','Contract Amount','Total Paid','Total Balance','Progress %'],
    ];
    let gC=0,gP=0;
    [...tradeMap.entries()].forEach(([trade,vcs])=>{
      let tC=0,tP=0;
      vcs.forEach(v=>{
        tC+=Number(v.amount||0);
        (p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved').forEach(i=>{
          if(i.paid)tP+=Number(i.amount||0);else tP+=(i.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
        });
      });
      const tB=tC-tP;const pct=tC?Math.min(100,Math.round(tP/tC*100)):0;
      summary.push([trade,vcs.length,tC,tP,tB,pct+'%']);
      gC+=tC;gP+=tP;
    });
    summary.push([]);
    summary.push(['GRAND TOTAL','',gC,gP,gC-gP,(gC?Math.min(100,Math.round(gP/gC*100)):0)+'%']);
    const wsSummary=XLSX.utils.aoa_to_sheet(summary);
    wsSummary['!cols']=[{wch:26},{wch:10},{wch:16},{wch:14},{wch:16},{wch:12}];
    XLSX.utils.book_append_sheet(wb,wsSummary,'Summary');

    // One sheet per trade
    [...tradeMap.entries()].forEach(([trade,vcs])=>{
      const data=[
        ['TRADE: '+trade.toUpperCase()],
        ['Project:',p.name,'','Generated:',new Date().toLocaleDateString()],
        [],
        ['Vendor','Trade','Contract Amt','Paid','Balance','%','Invoice #','Milestone','Inv. Amt','Inv. Paid','Inv. Bal','Status'],
      ];
      let tC=0,tP=0;
      vcs.forEach((v,vi)=>{
        const vInvs=(p.invoices||[]).filter(i=>i.vcId===v.id&&i.approvalStatus==='approved');
        const vPaid=vInvs.reduce((a,i)=>i.paid?a+Number(i.amount||0):a+(i.partialPayments||[]).reduce((b,pp)=>b+Number(pp.amount||0),0),0);
        const vTotal=Number(v.amount||0);const vBal=vTotal-vPaid;const pct=vTotal?Math.min(100,Math.round(vPaid/vTotal*100)):0;
        tC+=vTotal;tP+=vPaid;
        if(!vInvs.length){data.push([v.vendor,v.trade||'',vTotal,vPaid,vBal,pct+'%','','','','','','']);}
        else{
          vInvs.forEach((inv,ii)=>{
            const ms=(v.milestones||[]).find(m=>m.id===inv.milestoneId)?.name||'';
            const invPaid=inv.paid?Number(inv.amount||0):(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
            const invBal=Number(inv.amount||0)-invPaid;
            data.push([ii===0?v.vendor:'',ii===0?(v.trade||''):'',ii===0?vTotal:'',ii===0?vPaid:'',ii===0?vBal:'',ii===0?pct+'%':'',inv.invoiceNo||'',ms,Number(inv.amount||0),invPaid,invBal,inv.paid?'Paid':'Partial']);
            (inv.partialPayments||[]).forEach(pp=>data.push(['','','','','','','  ↳ Partial','',Number(pp.amount||0),Number(pp.amount||0),0,(pp.date||'')+(pp.txnNo?' | Txn:'+pp.txnNo:'')]));
          });
        }
        data.push([]);
      });
      const tBal=tC-tP;
      data.push(['TOTAL','',tC,tP,tBal,(tC?Math.min(100,Math.round(tP/tC*100)):0)+'%','','','','','','']);
      const ws=XLSX.utils.aoa_to_sheet(data);
      ws['!cols']=[{wch:26},{wch:16},{wch:14},{wch:12},{wch:14},{wch:8},{wch:14},{wch:20},{wch:13},{wch:11},{wch:13},{wch:10}];
      const sheetName=trade.replace(/[^a-zA-Z0-9 ]/g,'').substring(0,31);
      XLSX.utils.book_append_sheet(wb,ws,sheetName);
    });

    const fname='AllTradeLedgers_'+(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'.xlsx';
    XLSX.writeFile(wb,fname);
    toast('📊 All Trade Excel downloaded');
  }catch(e){console.error(e);toast('⚠ Excel error: '+e.message);}
}

function markInvPaid(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  const dateEl=vEl('invd_'+iid);
  inv.paid=true; inv.paidDate=dateEl?.value||localDateStr();
  saveDB();renderAll();toast('✓ Invoice marked as paid');
}
function addPartialPayment(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  const amtEl=vEl('invpamt_'+iid);
  const dateEl=vEl('invpdate_'+iid);
  const amt=parseFloat(amtEl?.value)||0;
  if(!amt){toast('⚠ Enter partial payment amount');return;}
  const invoiceAmt=Number(inv.amount||0);
  const alreadyPaid=(inv.partialPayments||[]).reduce((a,pp)=>a+Number(pp.amount||0),0);
  const remaining=invoiceAmt-alreadyPaid;
  if(amt>remaining){
    toast('⚠ Payment $'+amt.toLocaleString()+' exceeds remaining balance $'+remaining.toLocaleString());
    if(amtEl){amtEl.style.border='2px solid var(--red)';amtEl.focus();setTimeout(()=>amtEl.style.border='',2000);}
    return;
  }
  const date=dateEl?.value||localDateStr();
  if(!inv.partialPayments)inv.partialPayments=[];
  const txnEl=vEl('invptxn_'+iid);
  const txnNo=txnEl?.value.trim()||'';
  const total=alreadyPaid+amt;
  inv.partialPayments.push({id:uid(),amount:amt,date,txnNo,note:''});
  // Auto-mark fully paid if total reaches invoice amount
  if(total>=invoiceAmt){inv.paid=true;inv.paidDate=date;toast('✓ Invoice fully paid — full amount reached');}
  else{toast('✓ Partial $'+amt.toLocaleString()+' recorded · Remaining: $'+(remaining-amt).toLocaleString());}
  saveDB();renderAll();
}
function updatePartialTxn(iid,ppid,val){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  const pp=(inv.partialPayments||[]).find(x=>x.id===ppid);if(!pp)return;
  pp.txnNo=val;saveDB();toast('✓ Transaction # saved');
}
function removePartialPayment(iid,ppid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  inv.partialPayments=(inv.partialPayments||[]).filter(pp=>pp.id!==ppid);
  saveDB();renderAll();toast('Payment removed');
}
function downloadAllLienFiles(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  const files=inv.lienFiles||[];
  if(!files.length){toast('⚠ No signed waivers uploaded for this invoice');return;}
  files.forEach((f,idx)=>setTimeout(()=>dlFile(f.id),idx*200));
  toast('⬇ Downloading '+files.length+' waiver file'+(files.length!==1?'s':''));
}
function viewAllLienFiles(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  const files=inv.lienFiles||[];
  if(!files.length){toast('⚠ No signed waivers uploaded for this invoice');return;}
  files.forEach((f,idx)=>setTimeout(()=>viewFile(f.id),idx*200));
  toast('Opening '+files.length+' waiver file'+(files.length!==1?'s':''));
}
function unmarkInv(iid){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  inv.paid=false;inv.paidDate='';
  saveDB();renderAll();toast('Invoice unmarked');
}
function updateInvDate(iid,date){
  const p=proj();if(!p)return;
  const inv=(p.invoices||[]).find(x=>x.id===iid);if(!inv)return;
  inv.paidDate=date;saveDB();toast('📅 Date updated');
}
function delInvoice(iid){
  const p=proj();if(!p||!confirm('Delete this invoice?'))return;
  p.invoices=(p.invoices||[]).filter(x=>x.id!==iid);
  saveDB();renderAll();toast('🗑 Deleted');
}

function exportInvoicePDF(){
  const p=proj();if(!p){toast('⚠ No project');return;}
  const invs=p.invoices||[];
  if(!invs.length){toast('⚠ No invoices to export');return;}
  const approved=(p.quotes||[]).filter(q=>q.status==='approved');
  const contractTotal=approved.reduce((a,q)=>a+Number(q.amount||0),0);
  const totalInvoiced=invs.reduce((a,i)=>a+Number(i.amount||0),0);
  const totalPaid=invs.filter(i=>i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
  const totalDue=invs.filter(i=>!i.paid).reduce((a,i)=>a+Number(i.amount||0),0);

  const rows=invs.map(function(inv,idx){
    const bg=idx%2===0?'#fff':'#fafaf8';
    return '<tr style="background:'+bg+'">'
      +'<td style="padding:5px 8px;font-size:10px;font-weight:600;border-bottom:1px solid #eee">'+( inv.vendor||'—')+'</td>'
      +'<td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">'+(inv.invoiceNo||'—')+'</td>'
      +'<td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee">'+(inv.description||'—')+'</td>'
      +'<td style="padding:5px 8px;font-size:10px;border-bottom:1px solid #eee;white-space:nowrap">'+(inv.invoiceDate?inv.invoiceDate:'—')+'</td>'
      +'<td style="padding:5px 8px;font-size:10px;color:'+(inv.dueDate&&new Date(inv.dueDate+'T12:00:00')<new Date()&&!inv.paid?'#9B1F1F':'#555')+';border-bottom:1px solid #eee;white-space:nowrap">'+(inv.dueDate?inv.dueDate:'—')+'</td>'
      +'<td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee;white-space:nowrap">$'+Number(inv.amount||0).toLocaleString()+'</td>'
      +'<td style="padding:5px 8px;border-bottom:1px solid #eee">'+(inv.paid?'<span style="color:#2D6A0F;font-weight:700">&#10003; Paid</span>'+(inv.paidDate?' <span style="font-size:9px;color:#999">'+inv.paidDate+'</span>':''):'<span style="color:#9B1F1F">Due</span>')+'</td>'
      +'<td style="padding:5px 8px;font-size:11px;font-weight:700;border-bottom:1px solid #eee;white-space:nowrap;color:'+(inv.paid?'#2D6A0F':'#9B1F1F')+'">$'+(inv.paid?0:Number(inv.amount||0)).toLocaleString()+'</td>'
      +'</tr>';
  }).join('');

  const html='<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Invoice Report &mdash; '+p.name+'</title>'
    +'<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;color:#1a1917;padding:22px;font-size:12px}'
    +'h1{font-size:18px;margin-bottom:3px;color:#0C1B2E}.meta{color:#6b6a64;font-size:10px;margin-bottom:14px;line-height:1.7}'
    +'table{width:100%;border-collapse:collapse}th{background:#0C1B2E;color:#fff;padding:6px 8px;font-size:9px;text-transform:uppercase;text-align:left}'
    +'.tot td{background:#0C1B2E;color:#fff;font-weight:700}@media print{body{padding:14px}@page{margin:12mm}}</style></head><body>'
    +'<h1>Invoice Tracker Report</h1>'
    +'<div class="meta">'+p.name+' &nbsp;&middot;&nbsp; '+getProjectAddressLine(p)+'<br>Livio Address: '+LIVIO_OFFICE_ADDRESS+'<br>Permit: '+(p.permit||'&mdash;')+' &nbsp;&middot;&nbsp; '+LIVIO_COMPANY_NAME+' &nbsp;&middot;&nbsp; '+new Date().toLocaleDateString()+'</div>'
    +'<table><thead><tr><th>Subcontractor</th><th>Invoice #</th><th>Description</th><th>Invoice Date</th><th>Due Date</th><th>Amount</th><th>Status</th><th>Outstanding</th></tr></thead>'
    +'<tbody>'+rows
    +'<tr class="tot"><td colspan="5">TOTAL</td><td>$'+totalInvoiced.toLocaleString()+'</td><td style="color:#9FE1CB">&#10003; $'+totalPaid.toLocaleString()+'</td><td style="color:'+(totalDue>0?'#F09595':'#9FE1CB')+'">$'+totalDue.toLocaleString()+'</td></tr>'
    +'</tbody></table>'
    +'<div style="margin-top:12px;font-size:9px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:6px">'+LIVIO_COMPANY_NAME+' &middot; '+LIVIO_OFFICE_ADDRESS+' &middot; '+p.name+' &middot; Generated '+new Date().toLocaleDateString()+'</div>'
    +'</body></html>';

  const win=window.open('','_blank');
  if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html);win.document.close();
  setTimeout(function(){win.focus();win.print();},600);
  toast('🖨 Invoice report opened');
}

function exportInvoiceExcel(){
  const p=proj();if(!p){toast('⚠ No project');return;}
  toast('📊 Building Excel…',3000);
  if(window.XLSX){_doInvExcel(p);}
  else{
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload=()=>_doInvExcel(p);
    s.onerror=()=>toast('⚠ Could not load Excel library');
    document.head.appendChild(s);
  }
}
function _doInvExcel(p){
  try{
    const XLSX=window.XLSX;
    const wb=XLSX.utils.book_new();
    const invs=p.invoices||[];
    const approved=(p.quotes||[]).filter(q=>q.status==='approved');
    const data=[
      ['INVOICE TRACKER — '+p.name],
      ['Project:',p.name,'','Project Address:',getProjectAddressLine(p)],
      ['Livio Address:',LIVIO_OFFICE_ADDRESS,'','Generated:',new Date().toLocaleDateString()],
      ['Permit:',p.permit||''],
      [],
      ['Subcontractor','Invoice #','Description','Invoice Date','Due Date','Amount','Status','Date Paid','Outstanding'],
    ];
    invs.forEach(inv=>{
      data.push([inv.vendor||'',inv.invoiceNo||'',inv.description||'',inv.invoiceDate||'',inv.dueDate||'',Number(inv.amount||0),inv.paid?'Paid':'Outstanding',inv.paidDate||'',inv.paid?0:Number(inv.amount||0)]);
    });
    data.push([]);
    const totalInv=invs.reduce((a,i)=>a+Number(i.amount||0),0);
    const totalPaid=invs.filter(i=>i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
    const totalDue=invs.filter(i=>!i.paid).reduce((a,i)=>a+Number(i.amount||0),0);
    data.push(['TOTAL','','','','',totalInv,'','',totalDue]);
    data.push(['Contract Total (Approved):','','','','',approved.reduce((a,q)=>a+Number(q.amount||0),0)]);

    const ws=XLSX.utils.aoa_to_sheet(data);
    ws['!cols']=[{wch:28},{wch:14},{wch:28},{wch:14},{wch:12},{wch:14},{wch:12},{wch:12},{wch:14}];
    XLSX.utils.book_append_sheet(wb, ws, 'Invoice Tracker');

    const fname=(p.name.replace(/[^a-zA-Z0-9_\-]/g,'_')||'Project')+'_InvoiceTracker.xlsx';
    XLSX.writeFile(wb, fname);
    toast('📊 Invoice Excel downloaded');
  }catch(e){console.error(e);toast('⚠ Excel error: '+e.message);}
}


// ════ VENDOR CONTRACTS ═══════════════════════════════════════════════

function renderVendors(){
  const p=proj(); if(!p) return;
  const vendors=p.vendors||[];
  vEl('ct-ven').textContent=vendors.length;
  const el=vEl('ven-content'); if(!el) return;
  vendors.forEach(v=>regFiles(v.files||[]));

  if(!vendors.length){
    el.innerHTML=`<div class="empty"><div class="empty-ic">🤝</div>No vendors added yet. Click + Add Vendor to start.</div>`;
    return;
  }

  const approved=(p.quotes||[]).filter(q=>q.status==='approved');

  el.innerHTML=vendors.map((v,idx)=>{
    const q=approved.find(x=>x.id===v.quoteId)||null;
    const filesHTML=(v.files||[]).length
      ?`<div style="display:flex;flex-direction:column;gap:4px;margin-top:6px">`
        +(v.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:6px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:4px 10px">
            <span style="font-size:13px">${fileIcon(f.name)}</span>
            <span style="font-size:11px;font-weight:500;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name}</span>
            <button class="a-dl" onclick="dlFile('${f.id}')" title="Download">⬇</button>
          </div>`).join('')
        +`</div>`
      :'<div style="font-size:11px;color:var(--muted);font-style:italic;margin-top:6px">No contract files attached</div>';

    return`<div class="panel" style="margin-bottom:14px">
      <div class="ph" style="background:var(--navy)">
        <div>
          <span class="ph-title" style="color:#fff;font-size:14px">${v.vendor}</span>
          ${q?`<span style="font-size:11px;color:#8AAAC8;margin-left:10px">${q.scope||''}</span>`:''}
          ${v.contractNo?`<span style="background:rgba(255,255,255,.1);color:#8AAAC8;font-size:10px;padding:2px 8px;border-radius:4px;margin-left:8px">Contract # ${v.contractNo}</span>`:''}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="generateVendorContract('${v.id}')">🖨 View Contract PDF</button>
          <button class="btn btn-xs" style="background:rgba(45,106,15,.3);color:#9FE1CB;border:1px solid rgba(45,106,15,.5);font-size:10px" onclick="sendContractEmail('${v.id}')">✉ Send for Signing</button>
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="openModal('venfiles','${v.id}')">📎 Attach</button>
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:10px" onclick="openModal('vendor','${v.id}')">✏ Edit</button>
          <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4);font-size:10px" onclick="delVendor('${v.id}')">🗑</button>
        </div>
      </div>
      <div style="padding:14px 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px">
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Contract Type</div><div style="font-size:12px;font-weight:600">${v.contractType||'—'}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Contract Value</div><div style="font-size:14px;font-weight:700;font-family:'Barlow Condensed',sans-serif;color:var(--navy)">${v.amount?'$'+Number(v.amount).toLocaleString():'—'}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Start Date</div><div style="font-size:12px">${v.startDate?fmtDate(v.startDate):'—'}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">End Date</div><div style="font-size:12px">${v.endDate?fmtDate(v.endDate):'—'}</div></div>
        <div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Status</div>
          <span style="display:inline-block;padding:2px 9px;border-radius:4px;font-size:10px;font-weight:700;background:${v.status==='active'?'var(--green-l)':v.status==='signed'?'var(--blue-l)':v.status==='expired'?'var(--red-l)':'var(--bg)'};color:${v.status==='active'?'var(--green)':v.status==='signed'?'var(--blue)':v.status==='expired'?'var(--red)':'var(--muted)'}">
            ${v.status?v.status.charAt(0).toUpperCase()+v.status.slice(1):'—'}
          </span>
        </div>
        ${v.notes?`<div style="grid-column:1/-1"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Notes</div><div style="font-size:11px;color:var(--text)">${v.notes}</div></div>`:''}
      </div>
      <!-- Contract files -->
      <div style="padding:10px 16px;border-top:1px solid var(--border)">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin-bottom:4px">📄 Contract Documents (${(v.files||[]).length})</div>
        ${filesHTML}
        <button class="btn btn-ghost btn-xs" style="margin-top:8px;font-size:10px" onclick="openModal('venfiles','${v.id}')">+ Add / Manage Files</button>
      </div>
      ${(()=>{
        const linkedInvs=(p.invoices||[]).filter(inv=>{
          if(v.quoteId&&inv.quoteId&&inv.quoteId===v.quoteId) return true;
          if(inv.vcId&&inv.vcId===v.id) return true;
          // Legacy invoices (no IDs): match by vendor name only if this is the ONLY contract with that name
          if(!inv.quoteId&&!inv.vcId&&inv.vendor&&inv.vendor===v.vendor){
            const sameNameContracts=(p.vendors||[]).filter(vc=>vc.vendor===inv.vendor);
            return sameNameContracts.length===1;
          }
          return false;
        });
        if(!linkedInvs.length) return '';
        return `<div style="padding:10px 16px;border-top:1px solid var(--border)">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--blue);margin-bottom:6px">🧾 Linked Invoices (${linkedInvs.length})</div>
          <table style="width:100%;border-collapse:collapse;font-size:11px">
            <thead><tr style="background:var(--bg)">
              <th style="padding:4px 8px;text-align:left;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Invoice #</th>
              <th style="padding:4px 8px;text-align:left;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Date</th>
              <th style="padding:4px 8px;text-align:right;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Amount</th>
              <th style="padding:4px 8px;text-align:left;font-size:9px;color:var(--muted);border-bottom:1px solid var(--border)">Status</th>
            </tr></thead>
            <tbody>${linkedInvs.map((inv,i)=>`<tr style="background:${i%2===0?'#fff':'var(--bg)'}">
              <td style="padding:4px 8px;font-weight:600;color:var(--navy)">${inv.invoiceNo||'—'}</td>
              <td style="padding:4px 8px;color:var(--muted)">${inv.invoiceDate?fmtDate(inv.invoiceDate):'—'}</td>
              <td style="padding:4px 8px;text-align:right;font-family:'Barlow Condensed',sans-serif;font-weight:700">${fmtMoney(inv.amount||0)}</td>
              <td style="padding:4px 8px"><span style="padding:2px 6px;border-radius:3px;font-size:9px;font-weight:700;background:${inv.paid?'var(--green-l)':inv.approvalStatus==='approved'?'var(--blue-l)':inv.approvalStatus==='rejected'?'var(--red-l)':'var(--amber-l)'};color:${inv.paid?'var(--green)':inv.approvalStatus==='approved'?'var(--blue)':inv.approvalStatus==='rejected'?'var(--red)':'var(--amber)'}">${inv.paid?'Paid':inv.approvalStatus==='approved'?'Approved':inv.approvalStatus==='rejected'?'Rejected':'Pending'}</span></td>
            </tr>`).join('')}</tbody>
          </table>
        </div>`;
      })()}
    </div>`;
  }).join('');
}

function venDirSelect(sel){
  const opt=sel.options[sel.selectedIndex];
  const vdirId=opt.value;
  const vdir=getVDirList().find(v=>v.id===vdirId);
  if(!vdir)return;
  const emailEl=document.getElementById('f-ven-email');
  const tradeEl=document.getElementById('f-ven-trade');
  if(emailEl&&vdir.email)emailEl.value=vdir.email;
  if(tradeEl&&vdir.trade)tradeEl.value=vdir.trade;
}

let _venMilestones=[];
function venAddMilestone(){
  const list=vEl('ven-ms-list');if(!list)return;
  const i=_venMilestones.length;
  _venMilestones.push({id:uid(),name:'',amount:'',dueDate:''});
  const div=document.createElement('div');
  div.id='venms_'+i;
  div.style.cssText='display:flex;gap:6px;align-items:flex-start;margin-bottom:8px;background:#fff;border:1px solid var(--border);border-radius:6px;padding:8px 10px';
  div.innerHTML=[
    `<div style="flex:2;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Milestone</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" value="" oninput="venMsChange(${i},'name',this.value)" placeholder="e.g. Final Payment"/></div>`,
    `<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Amount ($)</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" type="number" value="" oninput="venMsChange(${i},'amount',this.value);venUpdateMilestonePct()" placeholder="0"/></div>`,
    `<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">%</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px;background:var(--bg)" id="venms_pct_${i}" value="—" readonly/></div>`,
    `<div style="flex:1;min-width:0"><label style="font-size:9px;color:var(--muted);text-transform:uppercase">Due Date</label><input class="fi" style="margin-top:2px;font-size:11px;padding:4px 7px" type="date" value="" oninput="venMsChange(${i},'dueDate',this.value)"/></div>`,
    `<button type="button" onclick="venRemoveMilestone(${i})" style="margin-top:18px;background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;padding:0 3px">×</button>`
  ].join('');
  list.appendChild(div);
  venUpdateTotal();
}
function venMsChange(i,key,val){if(_venMilestones[i])_venMilestones[i][key]=val;venUpdateTotal();}
function venRemoveMilestone(i){
  if(!_venMilestones[i])return;
  _venMilestones[i]._deleted=true;
  const el=vEl('venms_'+i);
  if(el){el.style.opacity='.3';el.style.pointerEvents='none';}
  venUpdateTotal();
}
function venUpdateMilestonePct(){
  const amt=parseFloat(vEl('f-ven-amt')?.value)||0;
  _venMilestones.forEach((ms,i)=>{
    const pct=amt&&ms.amount?Math.round(Number(ms.amount)/amt*100)+'%':'—';
    const el=vEl('venms_pct_'+i);if(el)el.value=pct;
  });
  venUpdateTotal();
}
function venUpdateTotal(){
  const tot=_venMilestones.filter(m=>!m._deleted).reduce((a,m)=>a+Number(m.amount||0),0);
  const el=vEl('ven-ms-total');
  if(el)el.textContent=tot>0?'Total: $'+tot.toLocaleString():'No milestones yet';
}

function generateVendorContract(vid){
  const p=proj(); if(!p){toast('⚠ No project selected');return;}
  const v=(p.vendors||[]).find(x=>x.id===vid); if(!v){toast('⚠ Vendor not found');return;}
  const proj_data=p;

  const msTable=(v.milestones||[]).length
    ?'<table style="width:100%;border-collapse:collapse;margin:10px 0">'
      +'<thead><tr style="background:#0C1B2E"><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">Payment Milestone</th><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">Amount</th><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">% of Contract</th><th style="padding:7px 10px;color:#fff;font-size:10px;text-align:left;font-weight:700">Due Date</th></tr></thead>'
      +'<tbody>'
      +v.milestones.map(function(ms,i){return'<tr style="background:'+(i%2===0?'#fff':'#f7f6f2')+'">'
        +'<td style="padding:6px 10px;font-size:11px;font-weight:600;border-bottom:1px solid #eee">'+ms.name+'</td>'
        +'<td style="padding:6px 10px;font-size:12px;font-weight:700;border-bottom:1px solid #eee">$'+Number(ms.amount||0).toLocaleString()+'</td>'
        +'<td style="padding:6px 10px;font-size:11px;color:#1A6BC4;border-bottom:1px solid #eee">'+(v.amount?Math.round(Number(ms.amount||0)/Number(v.amount)*100)+'%':'—')+'</td>'
        +'<td style="padding:6px 10px;font-size:11px;color:#6b6a64;border-bottom:1px solid #eee">'+(ms.dueDate||'—')+'</td>'
        +'</tr>';}).join('')
      +'<tr style="background:#0C1B2E"><td style="padding:7px 10px;font-size:11px;font-weight:700;color:#fff">TOTAL</td><td style="padding:7px 10px;font-size:13px;font-weight:700;color:#fff">$'+v.milestones.reduce(function(a,ms){return a+Number(ms.amount||0);},0).toLocaleString()+'</td><td></td><td></td></tr>'
      +'</tbody></table>'
    :'<p style="color:#999;font-style:italic;font-size:11px">No payment milestones specified.</p>';

  const html='<!DOCTYPE html><html><head><meta charset="UTF-8"/>'
    +'<title>Subcontract Agreement — '+v.vendor+'</title>'
    +'<style>'
    +'*{box-sizing:border-box;margin:0;padding:0}'
    +'body{font-family:Arial,sans-serif;color:#1a1917;padding:32px;font-size:11px;line-height:1.6}'
    +'.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid #0C1B2E}'
    +'.logo{font-size:22px;font-weight:900;color:#0C1B2E;letter-spacing:-1px}'
    +'.logo span{color:#1A6BC4}'
    +'.contract-title{font-size:18px;font-weight:700;color:#0C1B2E;text-align:center;margin:16px 0 8px}'
    +'.contract-no{text-align:center;font-size:11px;color:#6b6a64;margin-bottom:20px}'
    +'.parties{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}'
    +'.party-box{border:1px solid #e0ddd5;border-radius:6px;padding:12px 14px;background:#f9f8f5}'
    +'.party-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b6a64;margin-bottom:6px}'
    +'.party-name{font-size:14px;font-weight:700;color:#0C1B2E}'
    +'.section{margin-bottom:18px}'
    +'.section-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#0C1B2E;border-bottom:2px solid #0C1B2E;padding-bottom:3px;margin-bottom:8px}'
    +'.section-body{font-size:11px;color:#333;line-height:1.7;white-space:pre-wrap}'
    +'.exclusion-box{background:#FFF5F5;border:1px solid #F5C0C0;border-radius:6px;padding:10px 12px}'
    +'.sig-row{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:40px}'
    +'.sig-box{border-top:1px solid #333;padding-top:8px}'
    +'.sig-label{font-size:9px;color:#6b6a64;text-transform:uppercase;letter-spacing:.6px}'
    +'.sig-name{font-size:11px;font-weight:600;margin-top:12px}'
    +'@media print{body{padding:20px}@page{margin:15mm}}'
    +'</style></head><body>'
    +'<div class="header">'
      +'<div><div class="logo">LIVI<span>O</span></div><div style="font-size:10px;color:#6b6a64;margin-top:3px">Building Systems</div></div>'
      +'<div style="text-align:right"><div style="font-size:10px;color:#6b6a64">Project</div><div style="font-size:13px;font-weight:700">'+proj_data.name+'</div><div style="font-size:10px;color:#6b6a64;margin-top:2px">'+getProjectAddressLine(proj_data)+'</div><div style="font-size:10px;color:#6b6a64">Permit: '+(proj_data.permit||'—')+'</div></div>'
    +'</div>'
    +'<div class="contract-title">SUBCONTRACT AGREEMENT</div>'
    +'<div class="contract-no">Contract No: '+(v.contractNo||'—')+' &nbsp;&bull;&nbsp; Date: '+new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})+'</div>'
    +'<div class="parties">'
      +'<div class="party-box"><div class="party-label">Owner / General Contractor</div><div class="party-name">'+LIVIO_COMPANY_NAME+'</div><div style="font-size:10px;color:#6b6a64;margin-top:4px">'+LIVIO_OFFICE_ADDRESS+'</div><div style="font-size:10px;color:#6b6a64;margin-top:4px">Project: '+proj_data.name+'</div><div style="font-size:10px;color:#6b6a64">'+getProjectAddressLine(proj_data)+'</div></div>'
      +'<div class="party-box"><div class="party-label">Subcontractor</div><div class="party-name">'+v.vendor+'</div>'+(v.vendorEmail?'<div style="font-size:10px;color:#1A6BC4;margin-top:4px">'+v.vendorEmail+'</div>':'')+'</div>'
    +'</div>'
    +'<div class="section"><div class="section-title">1. Contract Details</div>'
      +'<table style="width:100%;border-collapse:collapse"><tbody>'
      +'<tr><td style="padding:4px 0;width:40%;font-weight:600;font-size:11px">Contract Type</td><td style="padding:4px 0;font-size:11px">'+(v.contractType||'—')+'</td></tr>'
      +'<tr><td style="padding:4px 0;font-weight:600;font-size:11px">Contract Value</td><td style="padding:4px 0;font-size:13px;font-weight:700;color:#0C1B2E">$'+Number(v.amount||0).toLocaleString()+'</td></tr>'
      +'<tr><td style="padding:4px 0;font-weight:600;font-size:11px">Start Date</td><td style="padding:4px 0;font-size:11px">'+(v.startDate||'—')+'</td></tr>'
      +'<tr><td style="padding:4px 0;font-weight:600;font-size:11px">End Date</td><td style="padding:4px 0;font-size:11px">'+(v.endDate||'—')+'</td></tr>'
      +'<tr><td style="padding:4px 0;font-weight:600;font-size:11px">CBC / Code Reference</td><td style="padding:4px 0;font-size:11px">CBC 2022 · CALGreen 2022 · Title 24</td></tr>'
      +'</tbody></table>'
    +'</div>'
    +(v.scope?'<div class="section"><div class="section-title">2. Scope of Work</div><div class="section-body">'+v.scope+'</div></div>':'')
    +(v.exclusions?'<div class="section"><div class="section-title">3. Exclusions</div><div class="exclusion-box section-body">'+v.exclusions+'</div></div>':'')
    +'<div class="section"><div class="section-title">'+(v.exclusions?'4':'3')+'. Payment Schedule</div>'+msTable+'</div>'
    +(v.notes?'<div class="section"><div class="section-title">Special Conditions</div><div class="section-body">'+v.notes+'</div></div>':'')
    +((v.bankAccount||v.zelleId)?'<div class="section" style="background:#F3F8FF;border:1px solid #B0D0F0;border-radius:6px;padding:10px 14px"><div class="section-title" style="border-color:#B0D0F0">Payment Instructions</div><div class="section-body">'+(v.bankName?'Bank: '+v.bankName+' | ':'')+(v.bankAcctType?'Type: '+v.bankAcctType+' | ':'')+(v.bankAccount?'Account: ****'+v.bankAccount.slice(-4)+' | ':'')+(v.routingNo?'Routing: '+v.routingNo.slice(0,3)+'****'+v.routingNo.slice(-2)+' | ':'')+(v.zelleId?'Zelle: '+v.zelleId:'')+'</div></div>':'')
    +'<div class="section"><div class="section-title">General Terms</div>'
      +'<div class="section-body" style="font-size:10px;color:#555">'
      +'1. All work shall comply with applicable codes including CBC 2022, CPC 2022, CEC 2022, CALGreen 2022, and Title 24. '
      +'2. Subcontractor shall carry all required insurance including general liability (min $2M) and workers compensation. '
      +'3. Subcontractor shall obtain all required permits unless otherwise noted in scope. '
      +'4. Changes to scope require written change order approval before proceeding. '
      +'5. Subcontractor warrants all work for one (1) year from substantial completion. '
      +'6. Payment subject to receipt of lien waiver for each milestone payment. '
      +'7. California law governs this agreement.</div>'
    +'</div>'
    +'<div class="sig-row">'
      +'<div class="sig-box">'
        +'<div style="height:50px"></div>'
        +'<div class="sig-label">Owner / GC Signature</div>'
        +'<div class="sig-name">'+LIVIO_COMPANY_NAME+'</div>'
        +'<div style="font-size:9px;color:#6b6a64;margin-top:3px">'+LIVIO_OFFICE_ADDRESS+'</div>'
        +'<div style="font-size:9px;color:#999;margin-top:3px">Date: ___________________</div>'
      +'</div>'
      +'<div class="sig-box">'
        +'<div style="height:50px"></div>'
        +'<div class="sig-label">Subcontractor Signature</div>'
        +'<div class="sig-name">'+v.vendor+'</div>'
        +'<div style="font-size:9px;color:#999;margin-top:3px">Date: ___________________</div>'
      +'</div>'
    +'</div>'
    +'<div style="margin-top:24px;font-size:9px;color:#999;text-align:center;border-top:1px solid #e0ddd5;padding-top:8px">Generated by '+LIVIO_COMPANY_NAME+' &nbsp;&bull;&nbsp; '+LIVIO_OFFICE_ADDRESS+' &nbsp;&bull;&nbsp; '+new Date().toLocaleDateString()+' &nbsp;&bull;&nbsp; '+proj_data.name+'</div>'
    +'</body></html>';

  const win=window.open('','_blank');
  if(!win){toast('⚠ Pop-up blocked');return;}
  win.document.write(html); win.document.close();
  setTimeout(function(){win.focus();win.print();},600);
  toast('🖨 Contract opened — Print → Save as PDF');
}

function resolveLienWaiverPayment(inv, waiverType, partialPaymentId){
  const partialPayments=Array.isArray(inv?.partialPayments)?inv.partialPayments:[];
  const linkedPartial=partialPaymentId ? partialPayments.find(pp=>pp.id===partialPaymentId) : null;
  const latestPartial=!linkedPartial && partialPayments.length ? partialPayments[partialPayments.length-1] : null;
  const usePartial=(waiverType||'').startsWith('Conditional') ? (linkedPartial||latestPartial) : null;
  const amountValue=usePartial ? Number(usePartial.amount||0) : Number(inv?.amount||0);
  const dateValue=usePartial?.date || inv?.invoiceDate || '';
  return {
    partialPaymentId: usePartial?.id || '',
    paymentAmount: Number.isFinite(amountValue) ? amountValue : 0,
    paymentDate: dateValue,
    isPartialPayment: !!usePartial
  };
}

function getLienWaiverEmailData(invId, waiverType, partialPaymentId){
  const p=proj(); if(!p)return null;
  const inv=(p.invoices||[]).find(x=>x.id===invId); if(!inv)return null;
  const q=(p.quotes||[]).find(x=>x.id===inv.quoteId);
  const vendorName=inv.vendor||(q?q.vendor:'')||'Vendor';
  const vendorEmail=inv.vendorEmail||(()=>{
    const vc=(p.vendors||[]).find(v=>v.vendor===vendorName||v.vdirId===inv.vdirId);
    return vc?vc.vendorEmail:'';
  })();
  const projName=p.name||'Project';
  const projAddr=p.address||'';
  const invNo=inv.invoiceNo||invId;
  const resolvedPayment=resolveLienWaiverPayment(inv, waiverType, partialPaymentId);
  const paymentAmount=resolvedPayment.paymentAmount;
  const paymentDate=resolvedPayment.paymentDate;
  const invAmt=fmtMoney(paymentAmount);
  const invDate=paymentDate?fmtDate(paymentDate):'';

  const waiverDescriptions={
    'Conditional Progress':'Conditional Waiver and Release on Progress Payment',
    'Unconditional Progress':'Conditional Waiver and Release on Progress Payment',
    'Conditional Final':'Conditional Waiver and Release on Final Payment',
    'Unconditional Final':'Conditional Waiver and Release on Final Payment'
  };
  const waiverDesc=waiverDescriptions[waiverType]||waiverType+' Lien Waiver';

  const conditionalNote=waiverType.startsWith('Conditional')
    ?'\n\nNote: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.'
    :'\n\nNote: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.';

  const body=`Dear ${vendorName},\n\nPlease find enclosed the ${waiverDesc} for the following:\n\nProject: ${projName}\nAddress: ${projAddr}\nInvoice #: ${invNo}\nInvoice Date: ${invDate}\nPayment Amount: ${invAmt}${conditionalNote}\n\nPlease sign and return this waiver at your earliest convenience.\n\nBest regards,\nLivio Building Systems`;

  return { p, inv, q, vendorName, vendorEmail, projName, projAddr, invNo, invAmt, invDate, waiverDesc, body, partialPaymentId: resolvedPayment.partialPaymentId, isPartialPayment: resolvedPayment.isPartialPayment };
}
function buildLienWaiverPdfAttachment(invId, waiverType, partialPaymentId){
  const data=getLienWaiverEmailData(invId, waiverType, partialPaymentId);
  if(!data) throw new Error('Lien waiver data not found.');
  if(!window.jspdf||!window.jspdf.jsPDF) throw new Error('PDF library not loaded yet. Try again.');

  const { jsPDF }=window.jspdf;
  const doc=new jsPDF({unit:'pt',format:'letter'});
  const W=doc.internal.pageSize.getWidth();
  const ML=40;
  const MR=40;
  const CW=W-ML-MR;
  let y=44;
  const statutoryByType={
    'Conditional Progress':{
      section:'Civil Code § 8132',
      title:'CONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT',
      notice:'NOTICE: THIS DOCUMENT WAIVES THE CLAIMANT\'S LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS EFFECTIVE ON RECEIPT OF PAYMENT. A PERSON SHOULD NOT RELY ON THIS DOCUMENT UNLESS SATISFIED THAT THE CLAIMANT HAS RECEIVED PAYMENT.',
      throughDateLabel:'Through Date:',
      body:'This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job through the Through Date of this document. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. This document is effective only on the claimant\'s receipt of payment from the financial institution on which the following check is drawn:',
      paymentFields:[
        ['Maker of Check:', 'Livio Building Systems'],
        ['Amount of Check:', data.invAmt],
        ['Check Payable to:', data.vendorName]
      ],
      exceptions:[
        '(1) Retentions.',
        '(2) Extras for which the claimant has not received payment.',
        '(3) The following progress payments for which the claimant has previously given a conditional waiver and release but has not received payment:',
        'Date(s) of waiver and release: _______________________________',
        'Amount(s) of unpaid progress payment(s): $_____________________',
        '(4) Contract rights, including (A) a right based on rescission, abandonment, or breach of contract, and (B) the right to recover compensation for work not compensated by the payment.'
      ]
    },
    'Unconditional Progress':{
      section:'Civil Code § 8134',
      title:'UNCONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT',
      notice:'NOTICE TO CLAIMANT: THIS DOCUMENT WAIVES AND RELEASES LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS UNCONDITIONALLY AND STATES THAT YOU HAVE BEEN PAID FOR GIVING UP THOSE RIGHTS. THIS DOCUMENT IS ENFORCEABLE AGAINST YOU IF YOU SIGN IT, EVEN IF YOU HAVE NOT BEEN PAID. IF YOU HAVE NOT BEEN PAID, USE A CONDITIONAL WAIVER AND RELEASE FORM.',
      throughDateLabel:'Through Date:',
      body:'This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job through the Through Date of this document. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. The claimant has received the following progress payment:',
      paymentFields:[
        ['Amount of Progress Payment:', data.invAmt]
      ],
      exceptions:[
        '(1) Retentions.',
        '(2) Extras for which the claimant has not received payment.',
        '(3) Contract rights, including (A) a right based on rescission, abandonment, or breach of contract, and (B) the right to recover compensation for work not compensated by the payment.'
      ]
    },
    'Conditional Final':{
      section:'Civil Code § 8136',
      title:'CONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT',
      notice:'NOTICE: THIS DOCUMENT WAIVES THE CLAIMANT\'S LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS EFFECTIVE ON RECEIPT OF PAYMENT. A PERSON SHOULD NOT RELY ON THIS DOCUMENT UNLESS SATISFIED THAT THE CLAIMANT HAS RECEIVED PAYMENT.',
      throughDateLabel:'',
      body:'This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for labor and service provided, and equipment and material delivered, to the customer on this job. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. This document is effective only on the claimant\'s receipt of payment from the financial institution on which the following check is drawn:',
      paymentFields:[
        ['Maker of Check:', 'Livio Building Systems'],
        ['Amount of Check:', data.invAmt],
        ['Check Payable to:', data.vendorName]
      ],
      exceptions:[
        'Disputed claims for extras in the amount of: $_____________________'
      ]
    },
    'Unconditional Final':{
      section:'Civil Code § 8138',
      title:'UNCONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT',
      notice:'NOTICE TO CLAIMANT: THIS DOCUMENT WAIVES AND RELEASES LIEN, STOP PAYMENT NOTICE, AND PAYMENT BOND RIGHTS UNCONDITIONALLY AND STATES THAT YOU HAVE BEEN PAID FOR GIVING UP THOSE RIGHTS. THIS DOCUMENT IS ENFORCEABLE AGAINST YOU IF YOU SIGN IT, EVEN IF YOU HAVE NOT BEEN PAID. IF YOU HAVE NOT BEEN PAID, USE A CONDITIONAL WAIVER AND RELEASE FORM.',
      throughDateLabel:'',
      body:'This document waives and releases lien, stop payment notice, and payment bond rights the claimant has for all labor and service provided, and equipment and material delivered, to the customer on this job. Rights based upon labor or service provided, or equipment or material delivered, pursuant to a written change order that has been fully executed by the parties prior to the date that this document is signed by the claimant, are waived and released by this document, unless listed as an Exception below. The claimant has been paid in full.',
      paymentFields:[],
      exceptions:[
        'Disputed claims for extras in the amount of: $_____________________'
      ]
    }
  };
  const statutory=statutoryByType[waiverType]||statutoryByType['Conditional Progress'];
  const customerName='Livio Building Systems';
  const ownerName=data.p?.client||data.projName||'';
  const throughDate=data.invDate||new Date().toLocaleDateString('en-US');

  const writeBlock=(text,size=10,color=[65,65,65],gap=14,font='normal')=>{
    doc.setFont('helvetica','normal');
    if(font!=='normal') doc.setFont('helvetica',font);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines=doc.splitTextToSize(String(text||''),CW);
    doc.text(lines,ML,y);
    y+=Math.max(gap,lines.length*gap);
  };

  doc.setFillColor(26,107,196);
  doc.rect(0,0,W,78,'F');
  doc.setFont('helvetica','bold');
  doc.setFontSize(18);
  doc.setTextColor(255,255,255);
  doc.text('LIVIO BUILDING SYSTEMS',ML,36);
  doc.setFontSize(9);
  doc.text('California Statutory Lien Waiver',ML,56);

  y=100;
  doc.setFont('helvetica','bold');
  doc.setFontSize(15);
  doc.setTextColor(12,27,46);
  writeBlock(statutory.title,15,[12,27,46],20,'bold');
  writeBlock(statutory.section,9,[110,110,110],14);
  writeBlock(statutory.notice,9,[135,35,35],13,'bold');
  y+=4;

  writeBlock('Identifying Information',11,[26,107,196],16,'bold');
  writeBlock(`Name of Claimant: ${data.vendorName}`,10,[70,70,70],13);
  writeBlock(`Name of Customer: ${customerName}`,10,[70,70,70],13);
  writeBlock(`Job Location: ${data.projAddr||data.projName||'-'}`,10,[70,70,70],13);
  writeBlock(`Owner: ${ownerName||'-'}`,10,[70,70,70],13);
  if(statutory.throughDateLabel){
    writeBlock(`${statutory.throughDateLabel} ${throughDate}`,10,[70,70,70],13);
  }
  y+=6;

  doc.setDrawColor(26,107,196);
  doc.setLineWidth(1);
  doc.line(ML,y,W-MR,y);
  y+=18;

  writeBlock(statutory.title.includes('UNCONDITIONAL') ? 'Unconditional Waiver and Release' : 'Conditional Waiver and Release',11,[26,107,196],16,'bold');
  writeBlock(statutory.body,9.5,[55,55,55],14);
  statutory.paymentFields.forEach(([label,value])=>{
    writeBlock(`${label} ${value||''}`,10,[70,70,70],13);
  });
  y+=18;

  writeBlock('Exceptions',11,[26,107,196],16,'bold');
  statutory.exceptions.forEach((line)=>{
    writeBlock(line,9.5,[55,55,55],14);
  });
  y+=16;

  doc.setFont('helvetica','bold');
  doc.setFontSize(10);
  doc.setTextColor(26,107,196);
  doc.text('Signature',ML,y);
  y+=30;
  doc.setDrawColor(140,140,140);
  doc.setLineWidth(0.8);
  doc.line(ML,y,W-MR,y);
  y+=32;
  doc.text('Claimant\'s Signature',ML,y);
  doc.text('Date of Signature',W-MR-110,y);
  y+=30;
  doc.line(ML,y,W-180,y);
  doc.line(W-150,y,W-MR,y);
  y+=28;
  doc.text('Claimant\'s Title',ML,y);
  y+=30;
  doc.line(ML,y,W-240,y);

  doc.setFont('helvetica','italic');
  doc.setFontSize(8);
  doc.setTextColor(120,120,120);
  doc.text(`Prefilled from project ${data.projName} / invoice ${data.invNo}`,ML,doc.internal.pageSize.getHeight()-24);

  const dataUri=doc.output('datauristring');
  const content=String(dataUri).split(',')[1]||'';
  const safeInv=(data.invNo||'Lien-Waiver').replace(/[^a-z0-9-_]+/gi,'_');
  const safeType=String(waiverType||'waiver').replace(/[^a-z0-9-_]+/gi,'_');
  return {
    filename:`${safeInv}-${safeType}.pdf`,
    content,
    contentType:'application/pdf'
  };
}
function openLienEmail(invId, waiverType, partialPaymentId){
  const data=getLienWaiverEmailData(invId, waiverType, partialPaymentId);
  if(!data)return;
  const { vendorName, projName, projAddr, invNo, invAmt, invDate, isPartialPayment }=data;

  const waiverDescriptions={
    'Conditional Progress':'Conditional Waiver and Release on Progress Payment',
    'Unconditional Progress':'Unconditional Waiver and Release on Progress Payment',
    'Conditional Final':'Conditional Waiver and Release on Final Payment',
    'Unconditional Final':'Unconditional Waiver and Release on Final Payment'
  };
  const waiverDesc=waiverDescriptions[waiverType]||waiverType+' Lien Waiver';

  const conditionalNote=waiverType.startsWith('Conditional')
    ?'\n\nNote: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.'
    :'\n\nNote: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.';

  const paymentLabel=isPartialPayment?'Partial Payment Amount':'Payment Amount';
  const body=`Dear ${vendorName},\n\nPlease find enclosed the ${waiverDesc} for the following:\n\nProject: ${projName}\nAddress: ${projAddr}\nInvoice #: ${invNo}\nInvoice Date: ${invDate}\n${paymentLabel}: ${invAmt}${conditionalNote}\n\nPlease sign and return this waiver at your earliest convenience.\n\nBest regards,\nLivio Building Systems`;

  vEl('lien-email-invid').value=invId;
  vEl('lien-email-type').value=waiverType;
  vEl('mo-lien-email').dataset.partialPaymentId=partialPaymentId||data.partialPaymentId||'';
  vEl('lien-email-title').textContent=waiverType+' Lien Waiver';
  vEl('lien-email-to').value=data.vendorEmail;
  vEl('lien-email-subject').value=waiverDesc+' — '+projName+' / Inv #'+invNo;
  vEl('lien-email-body').value=body;
  const statusEl=vEl('lien-email-status');
  if(statusEl) statusEl.innerHTML=getEmailStatusMarkup(getEmailConfig());
  vEl('mo-lien-email').classList.add('open');
}
function closeLienEmail(){vEl('mo-lien-email').classList.remove('open');}
function _saveLienSent(to){
  const invId=vEl('lien-email-invid')?.value;
  const waiverType=vEl('lien-email-type')?.value;
  const partialPaymentId=vEl('mo-lien-email')?.dataset?.partialPaymentId||'';
  if(!invId||!waiverType) return;
  const p=proj(); if(!p) return;
  const inv=(p.invoices||[]).find(x=>x.id===invId); if(!inv) return;
  if(!inv.lienSent) inv.lienSent=[];
  inv.lienSent.push({id:uid(),type:waiverType,date:localDateStr(),sentTo:to,partialPaymentId});
  saveDB(); renderPayments();
}
function sendLienEmail(){
  const to=vEl('lien-email-to').value.trim();
  const subject=vEl('lien-email-subject').value.trim();
  const body=vEl('lien-email-body').value.trim();
  const invId=vEl('lien-email-invid')?.value;
  const waiverType=vEl('lien-email-type')?.value;
  const partialPaymentId=vEl('mo-lien-email')?.dataset?.partialPaymentId||'';
  if(!to){toast('⚠ Recipient email is required');return;}
  let attachments=[];
  try{
    if(invId&&waiverType){
      attachments=[buildLienWaiverPdfAttachment(invId, waiverType, partialPaymentId)];
    }
  }catch(err){
    toast('âš  Unable to attach lien waiver PDF: '+(err.message||err),'error',6000);
    return;
  }
  sendAppEmail({to,subject,message:body,attachments})
    .then(function(){_saveLienSent(to);closeLienEmail();toast('✉ Lien waiver email sent');})
    .catch(function(err){console.error('Email error:',err);toast('⚠ Email send failed: '+err.message,'error',6000);});
}

function sendContractEmail(vid){
  openContractEmailModal(vid);
}

function openContractEmailModal(vid){
  const p=proj(); if(!p)return;
  const v=(p.vendors||[]).find(x=>x.id===vid); if(!v)return;
  const email=v.vendorEmail||'';
  const subject='Subcontract Agreement — '+v.vendor+' / '+p.name;
  const msPart=(v.milestones||[]).length?'\n\nPayment Milestones:\n'+v.milestones.map(function(ms){return'  • '+ms.name+' ($'+Number(ms.amount||0).toLocaleString()+')';}).join('\n'):'';
  const body='Dear '+v.vendor+',\n\nPlease find attached the Subcontract Agreement for:\n\nProject: '+p.name+'\nAddress: '+(p.address||'')+'\nContract #: '+(v.contractNo||'N/A')+'\nContract Value: $'+Number(v.amount||0).toLocaleString()+msPart+'\n\nPlease review, sign, and return at your earliest convenience.\n\nBest regards,\nLivio Building Systems';
  vEl('cemail-vid').value=vid;
  vEl('cemail-to').value=email;
  vEl('cemail-subject').value=subject;
  vEl('cemail-body').value=body;
  const statusEl=vEl('cemail-status');
  if(statusEl) statusEl.innerHTML=getEmailStatusMarkup(getEmailConfig());
  vEl('mo-contract-email').classList.add('open');
}
function closeContractEmailModal(){vEl('mo-contract-email').classList.remove('open');}
function sendContractEmailModal(){
  const to=vEl('cemail-to').value.trim();
  const subject=vEl('cemail-subject').value.trim();
  const body=vEl('cemail-body').value.trim();
  if(!to){toast('⚠ Recipient email is required');return;}
  sendAppEmail({to,subject,message:body})
    .then(function(){closeContractEmailModal();toast('✉ Contract email sent');})
    .catch(function(err){console.error('Email error:',err);toast('⚠ Email send failed: '+err.message,'error',6000);});
}

openLienEmail = function(invId, waiverType, partialPaymentId){
  const data=getLienWaiverEmailData(invId, waiverType, partialPaymentId);
  if(!data)return;
  const { vendorName, projName, projAddr, invNo, invAmt, invDate, isPartialPayment }=data;
  const waiverDescriptions={
    'Conditional Progress':'Conditional Waiver and Release on Progress Payment',
    'Unconditional Progress':'Unconditional Waiver and Release on Progress Payment',
    'Conditional Final':'Conditional Waiver and Release on Final Payment',
    'Unconditional Final':'Unconditional Waiver and Release on Final Payment'
  };
  const waiverDesc=waiverDescriptions[waiverType]||waiverType+' Lien Waiver';
  const conditionalNote=waiverType.startsWith('Conditional')
    ?'\n\nNote: This waiver is CONDITIONAL and becomes effective only upon receipt and clearance of the payment referenced herein.'
    :'\n\nNote: This waiver is UNCONDITIONAL. By signing, you waive all lien rights for the payment described above, regardless of whether payment has been received.';
  const paymentLabel=isPartialPayment?'Partial Payment Amount':'Payment Amount';
  const body=`Dear ${vendorName},\n\nPlease find enclosed the ${waiverDesc} for the following:\n\nProject: ${projName}\nProject Address: ${projAddr}\nLivio Address: ${LIVIO_OFFICE_ADDRESS}\nInvoice #: ${invNo}\nInvoice Date: ${invDate}\n${paymentLabel}: ${invAmt}${conditionalNote}\n\nReply Email: ${LIVIO_REPLY_EMAIL}\n\nPlease sign and return this waiver at your earliest convenience.\n\nBest regards,\n${getLivioEmailSignature()}`;

  vEl('lien-email-invid').value=invId;
  vEl('lien-email-type').value=waiverType;
  vEl('mo-lien-email').dataset.partialPaymentId=partialPaymentId||data.partialPaymentId||'';
  vEl('lien-email-title').textContent=waiverType+' Lien Waiver';
  vEl('lien-email-to').value=data.vendorEmail||getVendorEmailAcrossProjects(vendorName);
  vEl('lien-email-subject').value=waiverDesc+' — '+projName+' / Inv #'+invNo;
  vEl('lien-email-body').value=body;
  const statusEl=vEl('lien-email-status');
  if(statusEl) statusEl.innerHTML=getEmailStatusMarkup(getEmailConfig());
  vEl('mo-lien-email').classList.add('open');
}

openContractEmailModal = function(vid){
  const p=proj(); if(!p)return;
  const v=(p.vendors||[]).find(x=>x.id===vid); if(!v)return;
  const email=(v.vendorEmail||getVendorEmailAcrossProjects(v.vendor)||'').trim();
  const subject='Subcontract Agreement — '+v.vendor+' / '+p.name;
  const msPart=(v.milestones||[]).length?'\n\nPayment Milestones:\n'+v.milestones.map(function(ms){return'  • '+ms.name+' ($'+Number(ms.amount||0).toLocaleString()+')';}).join('\n'):'';
  const body='Dear '+v.vendor+',\n\nPlease find attached the Subcontract Agreement for:\n\nProject: '+p.name+'\nProject Address: '+getProjectAddressLine(p)+'\nLivio Address: '+LIVIO_OFFICE_ADDRESS+'\nContract #: '+(v.contractNo||'N/A')+'\nContract Value: $'+Number(v.amount||0).toLocaleString()+msPart+'\n\nReply Email: '+LIVIO_REPLY_EMAIL+'\n\nPlease review, sign, and return at your earliest convenience.\n\nBest regards,\n'+getLivioEmailSignature();
  vEl('cemail-vid').value=vid;
  vEl('cemail-to').value=email;
  vEl('cemail-subject').value=subject;
  vEl('cemail-body').value=body;
  const statusEl=vEl('cemail-status');
  if(statusEl) statusEl.innerHTML=getEmailStatusMarkup(getEmailConfig());
  vEl('mo-contract-email').classList.add('open');
}

function delVendor(vid){
  const p=proj();if(!p||!confirm('Delete this vendor contract?'))return;
  p.vendors=(p.vendors||[]).filter(x=>x.id!==vid);
  saveDB();renderAll();toast('🗑 Deleted');
}


// ════ CHECKLIST ══════════════════════════════════════════════════════

function renderChecklist(){
  const p=proj(); if(!p) return;
  const items=p.checklist||[];
  vEl('ct-chk').textContent=items.length;
  vEl('chk-total').textContent=items.length;
  vEl('chk-done').textContent=items.filter(i=>i.status==='done').length;
  vEl('chk-prog').textContent=items.filter(i=>i.status==='inprogress').length;
  vEl('chk-open').textContent=items.filter(i=>!i.status||i.status==='open').length;
  const el=vEl('chk-content'); if(!el) return;
  if(!items.length){el.innerHTML=`<div class="empty"><div class="empty-ic">☑</div>No checklist items yet. Click + Add Item to start.</div>`;return;}

  // Group by category
  const cats={};
  items.forEach(it=>{const k=it.category||'General';if(!cats[k])cats[k]=[];cats[k].push(it);});

  el.innerHTML=Object.entries(cats).map(([cat,citems])=>{
    const done=citems.filter(i=>i.status==='done').length;
    const pct=citems.length?Math.round(done/citems.length*100):0;
    const rows=citems.map((it,idx)=>{
      const bg=idx%2===0?'#fff':'var(--bg)';
      const stOpts=[['open','Open','var(--red)'],['inprogress','In Progress','var(--amber)'],['done','Done','var(--green)']];
      const latestComment=(it.comments||[]).slice(-1)[0];
      const commentCount=(it.comments||[]).length;
      return`<tr style="background:${bg}">
        <td style="padding:8px 12px">
          <div style="display:flex;align-items:flex-start;gap:8px">
            <input type="checkbox" ${it.status==='done'?'checked':''} onchange="chkToggle('${it.id}',this.checked)" style="margin-top:2px;width:15px;height:15px;cursor:pointer;accent-color:var(--green)"/>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:${it.status==='done'?'400':'600'};color:${it.status==='done'?'var(--muted)':'var(--text)'};text-decoration:${it.status==='done'?'line-through':'none'}">${it.name}</div>
              ${it.notes?`<div style="font-size:10px;color:var(--muted);margin-top:2px;font-style:italic">${it.notes}</div>`:''}
              ${latestComment?`<div style="margin-top:5px;background:var(--blue-l);border-left:3px solid var(--blue-m);border-radius:0 4px 4px 0;padding:4px 8px">
                <div style="display:flex;justify-content:space-between;margin-bottom:2px"><span style="font-size:9px;font-weight:600;color:var(--blue)">${latestComment.author}</span><span style="font-size:9px;color:var(--muted)">${latestComment.date}</span></div>
                <div style="font-size:10px;color:var(--text)">${latestComment.text}</div>
                ${(latestComment.files||[]).length?`<div style="margin-top:3px;display:flex;gap:3px;flex-wrap:wrap">${(latestComment.files||[]).map(f=>`<span style="background:#fff;border:1px solid #B0D0F0;border-radius:3px;padding:1px 6px;font-size:9px;color:var(--blue)">📎 ${f.name}</span>`).join('')}</div>`:''}
              </div>`:''}
              ${commentCount>1?`<button onclick="chkShowComments('${it.id}')" style="margin-top:4px;background:none;border:none;font-size:9px;color:var(--blue);cursor:pointer;padding:0;text-decoration:underline">View all ${commentCount} comments ▾</button>`:''}
            </div>
          </div>
        </td>
        <td style="padding:8px 10px">
          <select onchange="chkSetStatus('${it.id}',this.value)" style="font-size:10px;border:1px solid var(--border);border-radius:5px;padding:3px 6px;background:#fff;color:var(--text);cursor:pointer">
            ${stOpts.map(([v,l])=>`<option value="${v}" ${it.status===v||(!it.status&&v==='open')?'selected':''}>${l}</option>`).join('')}
          </select>
        </td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${it.dueDate?fmtDate(it.dueDate):'—'}</td>
        <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${it.assignee||'—'}</td>
        <td style="padding:8px 10px;font-size:9px">
          <span style="background:${it.priority==='high'?'var(--red-l)':it.priority==='medium'?'var(--amber-l)':'var(--bg)'};color:${it.priority==='high'?'var(--red)':it.priority==='medium'?'var(--amber)':'var(--muted)'};padding:2px 7px;border-radius:4px;font-weight:700">${it.priority?it.priority.charAt(0).toUpperCase()+it.priority.slice(1):'Low'}</span>
        </td>
        <td style="padding:8px 10px">
          <div style="display:flex;flex-direction:column;gap:3px">
            <button class="btn btn-blue btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('chklist-item','${it.id}')">💬 Comment</button>
            <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('chklist-item','${it.id}')">✏ Edit</button>
            <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 5px" onclick="delChkItem('${it.id}')">🗑 Del</button>
          </div>
        </td>
      </tr>`;
    }).join('');

    return`<div class="panel" style="margin-bottom:14px">
      <div class="ph" style="background:var(--navy)">
        <span class="ph-title" style="color:#fff">${cat}</span>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="display:flex;align-items:center;gap:6px">
            <div style="width:80px;height:5px;background:rgba(255,255,255,.2);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${pct}%;background:${pct===100?'#9FE1CB':'#85B7EB'};border-radius:3px"></div>
            </div>
            <span style="font-size:10px;color:#8AAAC8">${done}/${citems.length} · ${pct}%</span>
          </div>
        </div>
      </div>
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <thead><tr style="background:var(--bg)">
          <th style="padding:6px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:38%">Item</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:14%">Status</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Due Date</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:14%">Assignee</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:12%">Priority</th>
          <th style="padding:6px 10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);text-align:left;border-bottom:1px solid var(--border);width:10%">Act.</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }).join('');
}

function chkAddCommentRow(){
  const area=document.getElementById('chk-new-comment-area');
  if(area){area.scrollIntoView({behavior:'smooth',block:'center'});document.getElementById('f-chk-comment-text')?.focus();}
}

function chkSaveNewComment(itId){
  const p=proj();if(!p)return;
  const it=(p.checklist||[]).find(x=>x.id===itId);if(!it)return;
  const text=(document.getElementById('f-chk-comment-text')?.value||'').trim();
  if(!text){toast('⚠ Please write a comment first');return;}
  const author=(document.getElementById('f-chk-comment-author')?.value||'').trim()||currentUser()?.username||'Inspector';
  const date=document.getElementById('f-chk-comment-date')?.value||localDateStr();
  if(!it.comments)it.comments=[];
  it.comments.push({id:uid(),text,author,date,files:[...mPending]});
  mPending=[];
  saveDB();
  toast('✓ Comment saved');
  // Reopen modal to show updated comments
  openModal('chklist-item',itId);
}

function chkDeleteComment(itId,cid){
  const p=proj();if(!p)return;
  const it=(p.checklist||[]).find(x=>x.id===itId);if(!it)return;
  if(!confirm('Delete this comment?'))return;
  it.comments=(it.comments||[]).filter(c=>String(c.id)!==String(cid)&&String(it.comments.indexOf(c))!==String(cid));
  saveDB();
  toast('🗑 Comment deleted');
  openModal('chklist-item',itId);
}

function chkShowComments(id){
  const p=proj();if(!p)return;
  const it=(p.checklist||[]).find(x=>x.id===id);if(!it)return;
  const comments=it.comments||[];
  if(!comments.length)return;
  const html=comments.map(c=>`
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:10px 12px;margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px">
        <span style="font-size:11px;font-weight:700;color:var(--blue)">${c.author||'Inspector'}</span>
        <span style="font-size:10px;color:var(--muted)">${c.date||''}</span>
      </div>
      <div style="font-size:12px;color:var(--text)">${c.text}</div>
      ${(c.files||[]).length?`<div style="display:flex;gap:5px;margin-top:6px;flex-wrap:wrap">${(c.files||[]).map(f=>`<button class="a-dl" onclick="dlFile('${f.id}')" style="font-size:9px">${fileIcon(f.name)} ${f.name}</button>`).join('')}</div>`:''}
    </div>`).join('');
  vEl('modal-title').textContent='Comments — '+it.name.slice(0,40);
  vEl('modal-body').innerHTML=`<div style="max-height:400px;overflow-y:auto">${html}</div>
    <div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--border)">
      <button class="btn btn-navy" onclick="openModal('chklist-item','${id}')">+ Add New Comment</button>
    </div>`;
  vEl('mo').classList.add('open');
  mMode='view-only';
}
function renameChkCat(oldName){
  const p=proj();if(!p)return;
  const newName=prompt('Rename category "'+oldName+'" to:',oldName);
  if(!newName||newName===oldName)return;
  // Update all checklist items with this category
  (p.checklist||[]).forEach(it=>{if(it.category===oldName)it.category=newName;});
  // Update custom categories list
  if(p.chkCategories){const i=p.chkCategories.indexOf(oldName);if(i>-1)p.chkCategories[i]=newName;}
  saveDB();renderAll();toast('✓ Category renamed to "'+newName+'"');
  openModal('chklist-cat');
}
function chkToggle(id,checked){
  const p=proj();if(!p)return;
  const it=(p.checklist||[]).find(x=>x.id===id);if(!it)return;
  it.status=checked?'done':'open';
  saveDB();renderAll();
}
function chkSetStatus(id,val){
  const p=proj();if(!p)return;
  const it=(p.checklist||[]).find(x=>x.id===id);if(!it)return;
  it.status=val;
  saveDB();renderAll();toast('✓ Status updated');
}
function delChkItem(id){
  const p=proj();if(!p||!confirm('Delete this item?'))return;
  p.checklist=(p.checklist||[]).filter(x=>x.id!==id);
  saveDB();renderAll();toast('🗑 Deleted');
}

// ════ QA/QC ══════════════════════════════════════════════════════════

function renderQAQC(){
  const p=proj(); if(!p) return;
  const items=p.qaqcLog||[];
  vEl('ct-qaqc').textContent=items.length;
  vEl('qa-total').textContent=items.length;
  vEl('qa-ncr').textContent=items.filter(i=>i.type==='ncr'&&i.status!=='closed').length;
  vEl('qa-closed').textContent=items.filter(i=>i.status==='closed').length;
  vEl('qa-obs').textContent=items.filter(i=>i.type==='observation').length;
  items.forEach(i=>regFiles(i.files||[]));
  const el=vEl('qa-content'); if(!el) return;
  if(!items.length){el.innerHTML=`<div class="empty"><div class="empty-ic">🔍</div>No QA/QC entries yet. Click + Add QA/QC Entry to start.</div>`;return;}

  el.innerHTML=`<div class="panel">
    <table style="width:100%;border-collapse:collapse;table-layout:fixed">
      <thead><tr style="background:var(--navy)">
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:8%">Ref #</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:10%">Type</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:22%">Description</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:12%">Location</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:10%">Raised By</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:10%">Date</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8AAAC8;text-align:left;width:10%">Status</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8AAAC8;text-align:left;width:10%">Attachments</th>
        <th style="padding:8px 12px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff;text-align:left;width:8%">Act.</th>
      </tr></thead>
      <tbody>
        ${items.map((it,idx)=>{
          const bg=idx%2===0?'#fff':'var(--bg)';
          const typeColors={ncr:'var(--red)',observation:'var(--amber)',rfi:'var(--blue)',punch:'var(--purple)',other:'var(--muted)'};
          const statusColors={open:'var(--red)',inprogress:'var(--amber)',resolved:'var(--blue)',closed:'var(--green)'};
          const typeLabel=it.type==='ncr'?'NCR':it.type==='rfi'?'RFI':it.type?it.type.charAt(0).toUpperCase()+it.type.slice(1):'Other';
          const filesCell=(it.files||[]).length
            ?`<div style="display:flex;flex-direction:column;gap:2px">${(it.files||[]).map(f=>`<div style="display:flex;align-items:center;gap:3px;background:var(--bg);border:1px solid var(--border);border-radius:4px;padding:2px 5px"><span style="font-size:9px">${fileIcon(f.name)}</span><span style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60px">${f.name}</span><button class="a-dl" style="font-size:8px;padding:1px 3px" onclick="dlFile('${f.id}')">⬇</button></div>`).join('')}<button class="btn btn-ghost btn-xs" style="font-size:8px;padding:1px 5px;margin-top:1px" onclick="openModal('qafiles','${it.id}')">+</button></div>`
            :`<button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('qafiles','${it.id}')">📎 Attach</button>`;
          return`<tr style="background:${bg}">
            <td style="padding:8px 12px;font-size:11px;font-weight:700;color:var(--navy)">${it.refNo||'—'}</td>
            <td style="padding:8px 10px">
              <span style="background:${typeColors[it.type]||'#666'};color:#fff;padding:2px 7px;border-radius:4px;font-size:9px;font-weight:700">${typeLabel}</span>
              ${it.category?`<div style="font-size:9px;color:var(--muted);margin-top:3px">${it.category}</div>`:''}
            </td>
            <td style="padding:8px 10px;font-size:11px">${it.description||'—'}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${it.location||'—'}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted)">${it.raisedBy||'—'}</td>
            <td style="padding:8px 10px;font-size:10px;color:var(--muted);white-space:nowrap">${it.date?fmtDate(it.date):'—'}</td>
            <td style="padding:8px 10px">
              <select onchange="qaSetStatus('${it.id}',this.value)" style="font-size:10px;border:1px solid var(--border);border-radius:5px;padding:3px 6px;background:#fff;cursor:pointer">
                ${[['open','Open'],['inprogress','In Progress'],['resolved','Resolved'],['closed','Closed']].map(([v,l])=>`<option value="${v}" ${it.status===v?'selected':''}>${l}</option>`).join('')}
              </select>
            </td>
            <td style="padding:6px 8px">${filesCell}</td>
            <td style="padding:8px 10px">
              <div style="display:flex;flex-direction:column;gap:3px">
                <button class="btn btn-ghost btn-xs" style="font-size:9px;padding:2px 5px" onclick="openModal('qaqc-item','${it.id}')">✏</button>
                <button class="btn btn-red btn-xs" style="font-size:9px;padding:2px 5px" onclick="delQAItem('${it.id}')">🗑</button>
              </div>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

function qaSetStatus(id,val){
  const p=proj();if(!p)return;
  const it=(p.qaqcLog||[]).find(x=>x.id===id);if(!it)return;
  it.status=val;saveDB();renderAll();toast('✓ Status updated');
}
function delQAItem(id){
  const p=proj();if(!p||!confirm('Delete this entry?'))return;
  p.qaqcLog=(p.qaqcLog||[]).filter(x=>x.id!==id);
  saveDB();renderAll();toast('🗑 Deleted');
}


function importJSON(input){
  const file=input.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(!data.name) throw new Error('Invalid');
      data.id='proj_'+uid();
      ['works','milestones','quotes','plans','inspections'].forEach(k=>{if(!data[k])data[k]=[];});
      DB.projects.push(data); DB.activeId=data.id;
      saveDB(); renderAll(); toast('✓ Imported: '+data.name); nav('dashboard');
    }catch(e){toast('⚠ Invalid JSON file');}
  };
  reader.readAsText(file);
}

// ══════════════════════════════════════════════════════════════════
//  CITY AUTO-FILL & PERMIT GENERATION
// ══════════════════════════════════════════════════════════════════
function cityLookup(){
  const city=(vEl('f-city')?.value||'').trim().toLowerCase();
  const data=CITY_DB[city];
  const countyEl=vEl('f-county'), countyOk=vEl('county-ok'), cityOk=vEl('city-ok');
  if(data){
    // Always fill county from verified DB — county is now editable if user needs to override
    if(countyEl) countyEl.value=data.county;
    if(countyOk) countyOk.textContent='✓ Auto-filled';
    if(cityOk)   cityOk.textContent='✓ Recognized';
    const stateEl=vEl('f-state'); if(stateEl&&data.state) stateEl.value=data.state;
    const zipEl=vEl('f-zip'); if(zipEl&&!zipEl.value&&data.zip) zipEl.value=data.zip;
  } else {
    if(countyOk) countyOk.textContent=city?'⚠ Not in database — enter county manually':'';
    if(cityOk)   cityOk.textContent='';
  }
}

function selectQuoteStatus(val, el){
  // Deselect all status options
  el.closest('.fr').querySelectorAll('label').forEach(l=>{
    l.style.borderColor='var(--border)'; l.style.background='#fff';
  });
  el.style.borderColor='var(--blue-m)'; el.style.background='var(--blue-l)';
  const hidden=document.getElementById('f-status');
  if(hidden) hidden.value=val;
}
function pickColor(c,el){
  document.querySelectorAll('.cswatch').forEach(s=>s.classList.remove('sel'));
  el.classList.add('sel');
}

// ══════════════════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════════════════
// ── Multi-user auth ──────────────────────────────────────────────
const USERS_KEY='livio_users_v1';
const SESSION_KEY='livio_session_v2';
const DEFAULT_USERS=[
  {id:'u1',username:'admin',   password:'livio2026',role:'Admin',  email:'admin@liviobuilding.com'},
  {id:'u2',username:'manager', password:'manager123',role:'Manager',email:'manager@liviobuilding.com'},
];

const DEFAULT_ROLES=['Admin','Manager','Viewer','Contractor','Site Supervisor','Project Engineer','Owner'];
const ROLES_KEY='livio_roles_v1';
// ── Permissions ────────────────────────────────────────────────────
const PERMS_KEY='livio_perms_v1';
const ALL_PAGES=[
  {id:'projects',label:'All Projects'},{id:'dashboard',label:'Dashboard'},
  {id:'works',label:'Works at Site'},{id:'milestones',label:'Milestones'},
  {id:'quotes',label:'Quotes'},{id:'plans',label:'Plans & Docs'},
  {id:'inspections',label:'Inspections'},{id:'vendors',label:'Vendor Contracts'},
  {id:'invoices',label:'Invoices'},{id:'payments',label:'Payments'},
  {id:'checklist',label:'Checklist'},{id:'qaqc',label:'QA/QC'},
  {id:'compliance',label:'Compliance'},{id:'export',label:'Export'},
  {id:'momentum',label:'Momentum'},
  {id:'daily-tracker',label:'Daily Tracker'},
  {id:'client-contract',label:'Client Contract'},
  {id:'client-invoice',label:'Client Invoice'},
  {id:'vendor-directory',label:'Vendor Directory'}
];

function getPerms(){
  try{
    const s=localStorage.getItem(PERMS_KEY);
    return s?JSON.parse(s):{};
  }catch(e){return {};}
}
function savePerms(perms){localStorage.setItem(PERMS_KEY,JSON.stringify(perms));}

// Get pages accessible by a user (Admin gets all)
function getUserPages(user){
  if(!user||user.role==='Admin') return ALL_PAGES.map(p=>p.id);
  const perms=getPerms();
  const userPerms=perms[user.id];
  if(!userPerms) return ALL_PAGES.map(p=>p.id); // default: show all pages, no restrictions until admin sets them
  // Support both old array format and new object format
  if(Array.isArray(userPerms)){
    return userPerms.length ? userPerms : ALL_PAGES.map(p=>p.id);
  }
  // New format: object {pageId:'full'|'view'|'none'}
  const allowed=Object.entries(userPerms).filter(([k,v])=>v==='full'||v==='view').map(([k])=>k);
  return allowed.length ? allowed : ALL_PAGES.map(p=>p.id);
}

function getPageAccess(user, pageId){
  if(!user||user.role==='Admin') return 'full';
  const perms=getPerms();
  const userPerms=perms[user.id];
  if(!userPerms) return 'full'; // no perms set = full access by default
  if(Array.isArray(userPerms)) return userPerms.includes(pageId)?'full':'none';
  // New object format
  const lvl=userPerms[pageId];
  if(!lvl) return 'full'; // page not in perms = full access
  return lvl;
}

function canAccessPage(pageId){
  const cu=currentUser();
  if(!cu||cu.role==='Admin') return true;
  return getPageAccess(cu,pageId)!=='none';
}

function isPageReadOnly(pageId){
  const cu=currentUser();
  if(!cu||cu.role==='Admin') return false;
  if(cu.role==='Viewer') return true;
  return getPageAccess(cu,pageId)==='view';
}

function showAccessControl(uid){
  const cu=currentUser();
  if(!cu||cu.role!=='Admin'){toast('⚠ Admin only');return;}
  const users=getUsers();
  const u=users.find(x=>x.id===uid);
  if(!u||u.role==='Admin'){toast('Admin users always have full access');return;}
  const perms=getPerms();
  const rawPerms=perms[uid]||{};
  // Normalise to object
  const current=Array.isArray(rawPerms)
    ?rawPerms.reduce((a,k)=>{a[k]='full';return a;},{})
    :rawPerms;

  vEl('modal-title').textContent='Page Access — '+u.username+' ('+u.role+')';
  vEl('modal-body').innerHTML=`
    <div style="background:var(--blue-l);border:1px solid #B0D0F0;border-radius:7px;padding:9px 12px;margin-bottom:12px;font-size:11px;color:var(--blue)">
      Set access level for each page. <strong>Full</strong> = edit &amp; view. <strong>View Only</strong> = read-only. <strong>No Access</strong> = page hidden.
    </div>
    <div style="display:flex;gap:6px;margin-bottom:10px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">
      <div style="flex:2;color:var(--muted)">Page</div>
      <div style="flex:1;text-align:center;color:var(--green)">Full</div>
      <div style="flex:1;text-align:center;color:var(--amber)">View Only</div>
      <div style="flex:1;text-align:center;color:var(--red)">No Access</div>
    </div>
    ${ALL_PAGES.map(pg=>{
      const lvl=current[pg.id]||'none';
      return`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border:1px solid var(--border);border-radius:6px;margin-bottom:5px;background:${lvl==='full'?'var(--green-l)':lvl==='view'?'var(--amber-l)':'#fff'}">
        <div style="flex:2;font-size:11px;font-weight:500">${pg.label}</div>
        <div style="flex:1;text-align:center">
          <input type="radio" name="pg_${pg.id}" value="full" ${lvl==='full'?'checked':''}
            onchange="acUpdate('${pg.id}','full',this)" style="accent-color:var(--green);cursor:pointer"/>
        </div>
        <div style="flex:1;text-align:center">
          <input type="radio" name="pg_${pg.id}" value="view" ${lvl==='view'?'checked':''}
            onchange="acUpdate('${pg.id}','view',this)" style="accent-color:var(--amber);cursor:pointer"/>
        </div>
        <div style="flex:1;text-align:center">
          <input type="radio" name="pg_${pg.id}" value="none" ${lvl==='none'?'checked':''}
            onchange="acUpdate('${pg.id}','none',this)" style="accent-color:var(--red);cursor:pointer"/>
        </div>
      </div>`;
    }).join('')}
    <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap">
      <button onclick="acSetAll('full')" class="btn btn-ghost btn-sm" style="font-size:10px">✓ All Full</button>
      <button onclick="acSetAll('view')" class="btn btn-ghost btn-sm" style="font-size:10px">👁 All View</button>
      <button onclick="acSetAll('none')" class="btn btn-ghost btn-sm" style="font-size:10px">☐ None</button>
      <button onclick="saveAccessControl('${uid}')" class="btn btn-navy btn-sm" style="font-size:11px;margin-left:auto">💾 Save Access</button>
      <button onclick="closeModal();showManageUsers();" class="btn btn-ghost btn-sm" style="font-size:11px">← Back</button>
    </div>`;
  vEl('mo').classList.add('open');
  mMode='access-ctrl-'+uid;
  const mfa=document.querySelector('.modal-foot');if(mfa)mfa.style.display='none';
}

// Temp state for access control edits
let _acState={};
function acUpdate(pageId, level, radio){
  _acState[pageId]=level;
  // Update row background
  const row=radio.closest('div[style*="border:1px solid"]');
  if(row) row.style.background=level==='full'?'var(--green-l)':level==='view'?'var(--amber-l)':'#fff';
}
function acSetAll(level){
  ALL_PAGES.forEach(pg=>{
    _acState[pg.id]=level;
    document.querySelectorAll(`input[name="pg_${pg.id}"]`).forEach(r=>{r.checked=r.value===level;});
  });
  document.querySelectorAll('#modal-body div[style*="border:1px solid"]').forEach(row=>{
    row.style.background=level==='full'?'var(--green-l)':level==='view'?'var(--amber-l)':'#fff';
  });
}

function saveAccessControl(uid){
  // Collect from radio buttons
  const result={};
  ALL_PAGES.forEach(pg=>{
    const checked=document.querySelector(`input[name="pg_${pg.id}"]:checked`);
    result[pg.id]=checked?checked.value:'none';
  });
  // Merge with _acState
  Object.assign(result,_acState);
  const perms=getPerms();
  perms[uid]=result;
  savePerms(perms);
  _acState={};
  buildSidebarNav();
  closeModal();
  toast('✓ Page access saved for '+uid);
  showManageUsers();
}

function getRoles(){
  try{
    const s=localStorage.getItem(ROLES_KEY);
    const list=s?JSON.parse(s):null;
    if(list&&list.length) return list;
    localStorage.setItem(ROLES_KEY,JSON.stringify(DEFAULT_ROLES));
    return [...DEFAULT_ROLES];
  }catch(e){return [...DEFAULT_ROLES];}
}
function saveRoles(roles){localStorage.setItem(ROLES_KEY,JSON.stringify(roles));}
function refreshRolesList(){
  const sel=document.getElementById('nu-role');
  if(!sel)return;
  const roles=getRoles();
  const cur=sel.value||'Manager';
  sel.innerHTML=roles.map(r=>`<option value="${r}"${r===cur?' selected':''}>${r}</option>`).join('');
}
function showManageRoles(){
  const roles=getRoles();
  vEl('modal-title').textContent='Manage Roles';
  vEl('modal-body').innerHTML=`
    <div style="margin-bottom:12px">
      <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:8px">Current Roles</div>
      <div id="roles-chips" style="display:flex;flex-wrap:wrap;gap:6px">
        ${roles.map(r=>`
          <div style="display:flex;align-items:center;gap:0;border:1px solid var(--border);border-radius:20px;overflow:hidden;background:#fff">
            <span style="padding:4px 12px;font-size:11px;font-weight:500">${r}</span>
            ${r!=='Admin'?`<button onclick="deleteRole('${r}')" style="padding:4px 8px;background:none;border:none;border-left:1px solid var(--border);color:var(--muted);cursor:pointer;font-size:13px" title="Remove role">×</button>`:'<span style="padding:4px 8px;font-size:10px;color:var(--muted)">🔒</span>'}
          </div>`).join('')}
      </div>
    </div>
    <div style="border-top:1px solid var(--border);padding-top:12px">
      <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:8px">Add New Role</div>
      <div style="display:flex;gap:8px">
        <input class="fi" id="new-role-input" placeholder="e.g. Inspector, Foreman, Owner…" style="flex:1"
          onkeydown="if(event.key==='Enter')addRole()"/>
        <button onclick="addRole()" class="btn btn-navy" style="font-size:12px">+ Add</button>
      </div>
    </div>`;
  vEl('mo').classList.add('open');
  mMode='manage-roles';
  const mf2=document.querySelector('.modal-foot');
  if(mf2)mf2.style.display='none';
  setTimeout(()=>document.getElementById('new-role-input')?.focus(),100);
}
function addRole(){
  const input=document.getElementById('new-role-input');
  const name=(input?.value||'').trim();
  if(!name){toast('⚠ Enter a role name');return;}
  const roles=getRoles();
  if(roles.find(r=>r.toLowerCase()===name.toLowerCase())){toast('⚠ Role already exists');return;}
  roles.push(name);
  saveRoles(roles);
  refreshRolesList();
  toast('✓ Role "'+name+'" added');
  showManageRoles();
}
function deleteRole(name){
  if(!confirm('Remove role "'+name+'"?'))return;
  const users=getUsers();
  const inUse=users.find(u=>u.role===name);
  if(inUse){toast('⚠ Cannot delete — role is assigned to user "'+inUse.username+'"');return;}
  const roles=getRoles().filter(r=>r!==name);
  saveRoles(roles);
  refreshRolesList();
  toast('🗑 Role "'+name+'" removed');
  showManageRoles();
}

function getUsers(){
  try{
    const s=localStorage.getItem(USERS_KEY);
    const list=s?JSON.parse(s):null;
    if(list&&list.length) return list;
    // seed defaults
    localStorage.setItem(USERS_KEY,JSON.stringify(DEFAULT_USERS));
    return JSON.parse(JSON.stringify(DEFAULT_USERS));
  }catch(e){return JSON.parse(JSON.stringify(DEFAULT_USERS));}
}
function saveUsers(users){ localStorage.setItem(USERS_KEY,JSON.stringify(users)); }

/* ── Mobile menu ── */
function toggleMobMenu(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sb-overlay');
  sb.classList.toggle('mob-open');
  ov.classList.toggle('show');
}
function closeMobMenu(){
  document.getElementById('sidebar')?.classList.remove('mob-open');
  document.getElementById('sb-overlay')?.classList.remove('show');
}
// Close sidebar when a nav item is clicked on mobile
document.querySelectorAll('.sb-nav a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=768)closeMobMenu();}));
// Show/hide hamburger based on screen width
function checkMobBtn(){
  const btn=document.getElementById('mob-menu-btn');
  if(btn)btn.style.display=window.innerWidth<=768?'flex':'none';
}
window.addEventListener('resize',checkMobBtn);
checkMobBtn();

function doLogin(){
  const user=(document.getElementById('login-user')?.value||'').trim();
  const pass=(document.getElementById('login-pass')?.value||'').trim();
  const errEl=document.getElementById('login-error');
  const btn=document.querySelector('#login-screen button[onclick="doLogin()"]');
  if(!user||!pass){if(errEl){errEl.style.display='';errEl.textContent='Please enter username and password.';}return;}
  // Show loading state immediately
  if(btn){btn.textContent='Signing in…';btn.disabled=true;}
  const users=getUsers();
  const found=users.find(u=>u.username===user&&u.password===pass);
  if(found){
    sessionStorage.setItem(SESSION_KEY,JSON.stringify({id:found.id,username:found.username,role:found.role}));
    const ls=document.getElementById('login-screen');if(ls)ls.style.display='none';
    if(errEl)errEl.style.display='none';
    const lbl=document.getElementById('sb-user-label');
    if(lbl)lbl.textContent=found.username+' ('+found.role+')';
    document.body.classList.add('logged-in');
    buildSidebarNav();
    // Only render current page (projects) — defer rest for speed
    renderProjects();
    nav('projects');
    // Render remaining pages lazily after UI is visible
    setTimeout(()=>{
      renderDashboard();renderWorks();renderMilestones();renderQuotes();
      renderPlans();renderInspections();renderPayments();renderInvoices();
      renderVendors();renderChecklist();renderQAQC();renderCompliance();renderExport();
      renderVendorDirectory();
    },300);
  } else {
    if(btn){btn.textContent='Sign In →';btn.disabled=false;}
    if(errEl){errEl.style.display='';errEl.textContent='Incorrect username or password.';}
    const pe=document.getElementById('login-pass');if(pe){pe.value='';pe.focus();}
  }
}

function currentUser(){
  try{const s=sessionStorage.getItem(SESSION_KEY);return s?JSON.parse(s):null;}catch(e){return null;}
}

function doLogout(){
  sessionStorage.removeItem(SESSION_KEY);
  document.body.classList.remove('logged-in');
  const ls=document.getElementById('login-screen');if(ls)ls.style.display='flex';
  const ue=document.getElementById('login-user');const pe=document.getElementById('login-pass');
  const lbl=document.getElementById('sb-user-label');
  if(ue){ue.value='';setTimeout(()=>ue.focus(),100);}
  if(pe)pe.value='';if(lbl)lbl.textContent='';
  const errEl=document.getElementById('login-error');if(errEl)errEl.style.display='none';
}

function toggleLoginPass(){
  const p=document.getElementById('login-pass');if(p)p.type=p.type==='password'?'text':'password';
}

// ── Manage Users ─────────────────────────────────────────────────
function showManageUsers(){
  const cu=currentUser();
  if(!cu||cu.role!=='Admin'){toast('⚠ Only Admin can manage users');return;}
  const users=getUsers();
  const rows=users.map(u=>{
    const roleOpts=getRoles().map(r=>`<option value="${r}"${u.role===r?' selected':''}>${r}</option>`).join('');
    return`<tr style="background:#fff;border-bottom:1px solid var(--border)">
      <td style="padding:7px 10px">
        <input value="${u.username}" onchange="quickEditUser('${u.id}','username',this.value)"
          style="font-size:12px;font-weight:600;border:1px solid transparent;border-radius:4px;padding:3px 6px;width:100%;background:transparent;outline:none"
          onfocus="this.style.borderColor='var(--blue)';this.style.background='#fff'" onblur="this.style.borderColor='transparent';this.style.background='transparent'"/>
      </td>
      <td style="padding:7px 10px">
        <select onchange="quickEditUser('${u.id}','role',this.value)"
          style="font-size:11px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;background:#fff;color:var(--text);cursor:pointer;width:100%">
          ${roleOpts}
        </select>
      </td>
      <td style="padding:7px 10px">
        <button onclick="editUser('${u.id}')" class="btn btn-ghost btn-xs" style="font-size:9px;white-space:nowrap">🔑 Password</button>
      </td>
      <td style="padding:7px 10px">
        ${u.role!=='Admin'
          ?`<button onclick="showAccessControl('${u.id}')" class="btn btn-blue btn-xs" style="font-size:9px">🔐 Pages</button>`
          :'<span style="font-size:9px;color:var(--blue);font-weight:700">Full</span>'}
      </td>
      <td style="padding:7px 10px">
        ${u.username!==cu.username?`<button onclick="deleteUser('${u.id}')" class="btn btn-red btn-xs" style="font-size:9px">🗑</button>`:'<span style="font-size:10px;color:var(--muted)">You</span>'}
      </td>
    </tr>`;
  }).join('');

  vEl('modal-title').textContent='Manage Users';
  vEl('modal-body').innerHTML=`
    <table style="width:100%;border-collapse:collapse;margin-bottom:12px">
      <thead><tr style="background:var(--navy)">
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Username</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Role</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Password</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Pages</th>
        <th style="padding:7px 10px;font-size:9px;color:#fff;text-align:left;font-weight:700;text-transform:uppercase">Del</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px">
      <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:10px">+ Add New User</div>
      <div class="fg">
        <div class="fr"><label class="fl">Username *</label><input class="fi" id="nu-user" placeholder="e.g. john.smith"/></div>
        <div class="fr"><label class="fl">Password *</label><input class="fi" id="nu-pass" type="password" placeholder="Min 4 characters"/></div>
      </div>
      <div class="fr" style="margin-top:6px"><label class="fl">Email Address (for password reset)</label><input class="fi" id="nu-email" type="email" placeholder="user@company.com"/></div>
      <div class="fg" style="margin-top:6px">
        <div class="fr"><label class="fl">Role</label>
          <div style="display:flex;gap:6px">
            <select class="fs" id="nu-role" style="flex:1">
              ${getRoles().map(r=>`<option value="${r}"${r==='Manager'?' selected':''}>${r}</option>`).join('')}
            </select>
            <button type="button" onclick="showManageRoles()" class="btn btn-ghost btn-xs" style="flex-shrink:0;font-size:10px" title="Add/edit roles">⚙ Roles</button>
          </div>
        </div>
        <div class="fr" style="align-items:flex-end">
          <button onclick="addNewUser()" class="btn btn-navy" style="width:100%">+ Add User</button>
        </div>
      </div>
    </div>`;
  vEl('mo').classList.add('open');
  mMode='manage-users';
  refreshRolesList();
  // hide standard save button - this modal manages its own actions
  const mf=document.querySelector('.modal-foot');
  if(mf)mf.style.display='none';
}

function addNewUser(){
  const username=(vEl('nu-user')?.value||'').trim();
  const password=(vEl('nu-pass')?.value||'').trim();
  const role=vEl('nu-role')?.value||'Manager';
  if(!username||!password){toast('⚠ Username and password required');return;}
  if(password.length<4){toast('⚠ Password must be at least 4 characters');return;}
  const users=getUsers();
  if(users.find(u=>u.username===username)){toast('⚠ Username already exists');return;}
  const email=(vEl('nu-email')?.value||'').trim();
  users.push({id:'u'+Date.now(),username,password,role,email});
  saveUsers(users);
  toast('✓ User "'+username+'" added');
  showManageUsers();
}

function deleteUser(uid){
  if(!confirm('Delete this user?'))return;
  const users=getUsers().filter(u=>u.id!==uid);
  saveUsers(users);
  toast('🗑 User deleted');
  showManageUsers();
}

function quickEditUser(uid, field, value){
  const users=getUsers();
  const u=users.find(x=>x.id===uid);if(!u)return;
  if(field==='username'){
    if(!value.trim()){toast('⚠ Username cannot be empty');return;}
    if(users.find(x=>x.id!==uid&&x.username===value.trim())){toast('⚠ Username already taken');return;}
    u.username=value.trim();
  } else if(field==='role'){
    u.role=value;
  }
  saveUsers(users);
  buildSidebarNav();
  toast('✓ '+field.charAt(0).toUpperCase()+field.slice(1)+' updated');
}

function editUser(uid){
  const users=getUsers();
  const u=users.find(x=>x.id===uid);if(!u)return;
  const cu=currentUser();
  const roles=getRoles();
  const roleOpts=roles.map(r=>`<option value="${r}"${u.role===r?' selected':''}>${r}</option>`).join('');
  vEl('modal-title').textContent='Change Password — '+u.username;
  vEl('modal-body').innerHTML=`
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 12px;margin-bottom:14px;font-size:11px;color:var(--muted)">
      Username: <strong style="color:var(--navy)">${u.username}</strong> &nbsp;·&nbsp; Role: <strong>${u.role}</strong>
    </div>
    <div style="margin-bottom:12px">
      <label style="font-size:11px;font-weight:600;color:#333;display:block;margin-bottom:4px">Email Address</label>
      <input id="eu-email" class="fi" type="email" value="${u.email||''}" placeholder="user@company.com"/>
    </div>
    <div style="margin-bottom:16px">
      <label style="font-size:11px;font-weight:600;color:#333;display:block;margin-bottom:4px">New Password <span style="font-weight:400;color:var(--muted)">(leave blank to keep current)</span></label>
      <input id="eu-pass" class="fi" type="password" placeholder="Min 4 characters"/>
    </div>
    <div id="eu-error" style="display:none;background:#FFF0F0;border:1px solid #F5C0C0;color:#9B1F1F;font-size:11px;padding:8px 12px;border-radius:6px;margin-bottom:8px"></div>
    <div style="display:flex;gap:8px">
      <button onclick="closeModal();showManageUsers();" class="btn btn-ghost btn-sm" style="font-size:12px">← Back</button>
      <button onclick="saveEditUser('${uid}')" class="btn btn-navy btn-sm" style="font-size:12px;flex:1">💾 Save</button>
    </div>`;
  vEl('mo').classList.add('open');
  mMode='edit-user';
  const mf=document.querySelector('.modal-foot');if(mf)mf.style.display='none';
  document.getElementById('eu-user')?.focus();
}

function saveEditUser(uid){
  const users=getUsers();
  const u=users.find(x=>x.id===uid);if(!u)return;
  const cu=currentUser();
  const newUser=(document.getElementById('eu-user')?.value||'').trim();
  const newRole=(document.getElementById('eu-role')?.value||'').trim();
  const newEmail=(document.getElementById('eu-email')?.value||'').trim();
  const newPass=(document.getElementById('eu-pass')?.value||'').trim();
  const errEl=document.getElementById('eu-error');

  if(!newUser){if(errEl){errEl.style.display='';errEl.textContent='Username cannot be empty.';}return;}
  // Check username conflict
  if(users.find(x=>x.id!==uid&&x.username===newUser)){
    if(errEl){errEl.style.display='';errEl.textContent='Username "'+newUser+'" is already taken.';}return;
  }
  if(newPass&&newPass.length<4){if(errEl){errEl.style.display='';errEl.textContent='Password must be at least 4 characters.';}return;}

  u.username=newUser;
  u.email=newEmail;
  if(newRole) u.role=newRole;
  if(newPass) u.password=newPass;
  saveUsers(users);
  toast('✓ User updated successfully');
  closeModal();
  showManageUsers();
}

// ── Forgot / Reset Password ───────────────────────────────────────
const RESET_KEY='livio_reset_v1';

function showForgotPass(){
  const el=document.getElementById('forgot-pass-screen');if(el)el.style.display='flex';
  const fu=document.getElementById('forgot-user');if(fu)fu.focus();
}
function closeForgotPass(){
  const el=document.getElementById('forgot-pass-screen');if(el)el.style.display='none';
  ['forgot-user','forgot-email'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  const er=document.getElementById('forgot-error');if(er)er.style.display='none';
  const ok=document.getElementById('forgot-success');if(ok)ok.style.display='none';
}
function doForgotPass(){
  const username=(document.getElementById('forgot-user')?.value||'').trim();
  const email=(document.getElementById('forgot-email')?.value||'').trim();
  const errEl=document.getElementById('forgot-error');
  const okEl=document.getElementById('forgot-success');
  if(!username||!email){if(errEl){errEl.style.display='';errEl.textContent='Please enter both username and email.';}return;}
  const users=getUsers();
  const u=users.find(x=>x.username===username&&(x.email||'').toLowerCase()===email.toLowerCase());
  if(!u){
    if(errEl){errEl.style.display='';errEl.textContent='No account found with that username and email combination.';}
    return;
  }
  // Generate 6-digit reset code
  const code=String(Math.floor(100000+Math.random()*900000));
  const expiry=Date.now()+30*60*1000; // 30 min
  const resets=JSON.parse(localStorage.getItem(RESET_KEY)||'{}');
  resets[username]={code,expiry};
  localStorage.setItem(RESET_KEY,JSON.stringify(resets));

  // Open mailto
  const subject=encodeURIComponent('Livio Building Systems — Password Reset');
  const bodyParts=['Hello '+username+',','','You requested a password reset for your Livio Building Systems account.','','Your reset code is: '+code,'','This code is valid for 30 minutes.','','Steps to reset: 1. Open the Livio Building Systems app  2. Click Forgot Password?  3. Click I have a reset code  4. Enter the code and your new password','','If you did not request this, please ignore this email.','','— Livio Building Systems'];
  const body=encodeURIComponent(bodyParts.join('\n'));
  window.open('mailto:'+email+'?subject='+subject+'&body='+body,'_self');
  if(errEl)errEl.style.display='none';
  if(okEl){
    okEl.style.display='';
    okEl.innerHTML='✓ Email client opened! Send the email to <strong>'+email+'</strong>. '
      +'<br><span style="font-size:10px">Then come back and click <em>"I have a reset code"</em> below.</span>';
  }
  // Show reset code link
  const resetBtn=document.getElementById('forgot-reset-btn');
  if(resetBtn)resetBtn.style.display='';
}
function showResetPass(){
  closeForgotPass();
  const el=document.getElementById('reset-pass-screen');if(el)el.style.display='flex';
  const ru=document.getElementById('reset-user');if(ru){ru.value=document.getElementById('forgot-user')?.value||'';ru.focus();}
}
function closeResetPass(){
  const el=document.getElementById('reset-pass-screen');if(el)el.style.display='none';
  ['reset-user','reset-code','reset-new','reset-conf'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  const er=document.getElementById('reset-error');if(er)er.style.display='none';
}
function doResetPass(){
  const username=(document.getElementById('reset-user')?.value||'').trim();
  const code=(document.getElementById('reset-code')?.value||'').trim();
  const nw=(document.getElementById('reset-new')?.value||'').trim();
  const conf=(document.getElementById('reset-conf')?.value||'').trim();
  const errEl=document.getElementById('reset-error');
  if(!username||!code||!nw||!conf){if(errEl){errEl.style.display='';errEl.textContent='All fields are required.';}return;}
  const resets=JSON.parse(localStorage.getItem(RESET_KEY)||'{}');
  const r=resets[username];
  if(!r||r.code!==code){if(errEl){errEl.style.display='';errEl.textContent='Invalid reset code.';}return;}
  if(Date.now()>r.expiry){if(errEl){errEl.style.display='';errEl.textContent='Reset code has expired. Please request a new one.';}return;}
  if(nw.length<4){if(errEl){errEl.style.display='';errEl.textContent='New password must be at least 4 characters.';}return;}
  if(nw!==conf){if(errEl){errEl.style.display='';errEl.textContent='Passwords do not match.';}return;}
  const users=getUsers();
  const u=users.find(x=>x.username===username);
  if(!u){if(errEl){errEl.style.display='';errEl.textContent='User not found.';}return;}
  u.password=nw;
  saveUsers(users);
  delete resets[username];
  localStorage.setItem(RESET_KEY,JSON.stringify(resets));
  closeResetPass();
  const ls=document.getElementById('login-screen');if(ls)ls.style.display='flex';
  setTimeout(()=>{
    const ue=document.getElementById('login-user');if(ue)ue.value=username;
    const err=document.getElementById('login-error');
    if(err){err.style.display='';err.style.background='#EDF8E5';err.style.borderColor='#B8DCA0';err.style.color='#2D6A0F';err.textContent='✓ Password reset successfully. Please sign in with your new password.';}
  },100);
}

// ── Change own password ───────────────────────────────────────────
function showSetupPass(){
  const el=document.getElementById('setup-pass-screen');if(el)el.style.display='flex';
  const su=document.getElementById('setup-user');if(su)su.focus();
}
function closeSetupPass(){
  const el=document.getElementById('setup-pass-screen');if(el)el.style.display='none';
  ['setup-user','setup-curr','setup-new','setup-conf'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  const er=document.getElementById('setup-error');if(er)er.style.display='none';
}
function doSetupPass(){
  const username=(document.getElementById('setup-user')?.value||'').trim();
  const curr=(document.getElementById('setup-curr')?.value||'').trim();
  const nw=(document.getElementById('setup-new')?.value||'').trim();
  const conf=(document.getElementById('setup-conf')?.value||'').trim();
  const errEl=document.getElementById('setup-error');
  if(!username||!curr||!nw||!conf){if(errEl){errEl.style.display='';errEl.textContent='All fields are required.';}return;}
  const users=getUsers();
  const u=users.find(x=>x.username===username&&x.password===curr);
  if(!u){if(errEl){errEl.style.display='';errEl.textContent='Current username or password is incorrect.';}return;}
  if(nw.length<4){if(errEl){errEl.style.display='';errEl.textContent='New password must be at least 4 characters.';}return;}
  if(nw!==conf){if(errEl){errEl.style.display='';errEl.textContent='New passwords do not match.';}return;}
  u.password=nw;
  saveUsers(users);
  closeSetupPass();
  toast('✓ Password updated successfully');
}

// ════ VENDOR DIRECTORY ════════════════════════════════════════════
const VDIR_KEY = 'dt_vendor_directory';
function getVDirList(){try{return JSON.parse(localStorage.getItem(VDIR_KEY)||'[]')}catch{return[]}}
function saveVDirList(list){localStorage.setItem(VDIR_KEY,JSON.stringify(list))}

function renderVendorDirectory(){
  const el=vEl('vdir-content'); if(!el)return;
  const list=getVDirList();
  if(!list.length){
    el.innerHTML=`<div class="empty"><div class="empty-ic">📋</div><p>No vendors in directory yet.<br>Click <strong>+ Add Vendor</strong> to start building your subcontractor database.</p></div>`;
    return;
  }
  el.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px">`
    +list.map(v=>`<div class="panel" style="overflow:hidden">
      <div class="ph" style="background:var(--navy)">
        <div>
          <div class="ph-title" style="color:#fff;font-size:13px">${v.company||v.name}</div>
          <div style="font-size:10px;color:#8AAAC8;margin-top:2px">${v.name}${v.trade?' · '+v.trade:''}</div>
        </div>
        <div style="display:flex;gap:5px">
          <button class="btn btn-xs" style="background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2)" onclick="openVDirModal('${v.id}')">✏</button>
          <button class="btn btn-xs" style="background:rgba(180,30,30,.3);color:#F09595;border:1px solid rgba(180,30,30,.4)" onclick="deleteVDir('${v.id}')">🗑</button>
        </div>
      </div>
      <div style="padding:12px 16px;display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px">
        ${v.phone?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">Phone</div><div style="font-weight:600">${v.phone}</div></div>`:''}
        ${v.email?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">Email</div><div style="font-weight:600;color:var(--blue);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.email}</div></div>`:''}
        ${v.license?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">License #</div><div style="font-weight:600">${v.license}</div></div>`:''}
        ${v.trade?`<div><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:1px">Trade</div><div style="font-weight:600">${v.trade}</div></div>`:''}
      </div>
      ${(v.bank||v.acct||v.routing||v.zelle)?`
      <div style="padding:10px 16px;border-top:1px solid var(--border);background:var(--bg)">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:6px">🏦 Payment Info</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px">
          ${v.bank?`<div><div style="font-size:9px;color:var(--muted)">Bank</div><div style="font-weight:600">${v.bank}</div></div>`:''}
          ${v.acctType?`<div><div style="font-size:9px;color:var(--muted)">Type</div><div style="font-weight:600">${v.acctType}</div></div>`:''}
          ${v.acct?`<div><div style="font-size:9px;color:var(--muted)">Account</div><div style="font-weight:600;font-family:monospace">****${v.acct.slice(-4)}</div></div>`:''}
          ${v.routing?`<div><div style="font-size:9px;color:var(--muted)">Routing</div><div style="font-weight:600;font-family:monospace">${v.routing.slice(0,3)}****${v.routing.slice(-2)}</div></div>`:''}
          ${v.zelle?`<div style="grid-column:1/-1"><div style="font-size:9px;color:var(--muted)">Zelle</div><div style="font-weight:600;color:var(--green)">${v.zelle}</div></div>`:''}
        </div>
      </div>`:''}
      ${v.notes?`<div style="padding:8px 16px;border-top:1px solid var(--border);font-size:11px;color:var(--muted)">${v.notes}</div>`:''}
    </div>`).join('')
    +`</div>`;
}

function openVDirModal(id){
  const list=getVDirList();
  const v=id?list.find(x=>x.id===id):{};
  document.getElementById('vdir-modal-title').textContent=id?'Edit Vendor':'Add Vendor to Directory';
  document.getElementById('vdir-id').value=id||'';
  document.getElementById('vdir-name').value=v.name||'';
  document.getElementById('vdir-company').value=v.company||'';
  document.getElementById('vdir-phone').value=v.phone||'';
  document.getElementById('vdir-email').value=v.email||'';
  document.getElementById('vdir-trade').value=v.trade||'';
  document.getElementById('vdir-license').value=v.license||'';
  document.getElementById('vdir-bank').value=v.bank||'';
  document.getElementById('vdir-acct-type').value=v.acctType||'';
  document.getElementById('vdir-acct').value=v.acct||'';
  document.getElementById('vdir-routing').value=v.routing||'';
  document.getElementById('vdir-zelle').value=v.zelle||'';
  document.getElementById('vdir-notes').value=v.notes||'';
  document.getElementById('mo-vdir').classList.add('open');
}
function closeVDirModal(){document.getElementById('mo-vdir').classList.remove('open')}
function saveVDir(){
  const name=document.getElementById('vdir-name').value.trim();
  const company=document.getElementById('vdir-company').value.trim();
  if(!name&&!company){toast('⚠ Name or Company is required');return;}
  const id=document.getElementById('vdir-id').value||('vdir_'+Math.random().toString(36).slice(2,10));
  const v={id,name,company,phone:document.getElementById('vdir-phone').value.trim(),email:document.getElementById('vdir-email').value.trim(),trade:document.getElementById('vdir-trade').value.trim(),license:document.getElementById('vdir-license').value.trim(),bank:document.getElementById('vdir-bank').value.trim(),acctType:document.getElementById('vdir-acct-type').value,acct:document.getElementById('vdir-acct').value.trim(),routing:document.getElementById('vdir-routing').value.trim(),zelle:document.getElementById('vdir-zelle').value.trim(),notes:document.getElementById('vdir-notes').value.trim()};
  const list=getVDirList();
  const idx=list.findIndex(x=>x.id===id);
  if(idx>=0)list[idx]=v; else list.push(v);
  saveVDirList(list);
  closeVDirModal();
  renderVendorDirectory();
  toast('✅ Vendor saved to directory!');
}
function deleteVDir(id){
  if(!confirm('Remove this vendor from directory?'))return;
  const list=getVDirList().filter(x=>x.id!==id);
  saveVDirList(list);
  renderVendorDirectory();
  toast('🗑 Vendor removed');
}

// ══════════════════════════════════════════════════════════════════
//  EXPOSE ALL FUNCTIONS TO WINDOW (for React onclick= handlers)
// ══════════════════════════════════════════════════════════════════
export function initLegacyApp() {
  // Navigation & rendering
  window.nav = nav;
  window.handleAdd = handleAdd;
  window.renderAll = renderAll;
  window.renderProjects = renderProjects;
  window.renderDashboard = renderDashboard;
  window.renderWorks = renderWorks;
  window.renderMilestones = renderMilestones;
  window.renderQuotes = renderQuotes;
  window.renderPlans = renderPlans;
  window.renderInspections = renderInspections;
  window.renderPayments = renderPayments;
  window.renderInvoices = renderInvoices;
  window.renderVendors = renderVendors;
  window.renderChecklist = renderChecklist;
  window.renderQAQC = renderQAQC;
  window.renderCompliance = renderCompliance;
  window.renderExport = renderExport;
  window.renderVendorDirectory = renderVendorDirectory;
  window.renderSettingsPage = renderSettingsPage;
  window.updateSidebar = updateSidebar;
  window.buildSidebarNav = buildSidebarNav;

  // DB
  window.saveDB = saveDB;
  window.proj = proj;
  window.DB = DB;

  // Projects
  window.switchProj = switchProj;
  window.delProj = delProj;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.saveModal = saveModal;
  window.cityLookup = cityLookup;
  window.pickColor = pickColor;
  window.selectQuoteStatus = selectQuoteStatus;

  // Works, Milestones, Quotes, Plans
  window.delItem = delItem;
  window.dlFile = dlFile;
  window.delPlan = delPlan;
  window.openMarkPP = openMarkPP;
  window.unmarkPP = unmarkPP;
  window.delProgressPayment = delProgressPayment;
  window.unmarkPaid = unmarkPaid;
  window.updatePaidDate = updatePaidDate;
  window.delPayMs = delPayMs;

  // Payments
  window.runPaySmartSearch = (typeof runPaySmartSearch !== 'undefined') ? runPaySmartSearch : ()=>{};
  window.clearPaySmartSearch = (typeof clearPaySmartSearch !== 'undefined') ? clearPaySmartSearch : ()=>{};
  window.filterPayVendors = (typeof filterPayVendors !== 'undefined') ? filterPayVendors : ()=>{};
  window.clearPaySearch = (typeof clearPaySearch !== 'undefined') ? clearPaySearch : ()=>{};
  window.showAllPayVendors = (typeof showAllPayVendors !== 'undefined') ? showAllPayVendors : ()=>{};
  window.exportPaymentLedgerPDF = exportPaymentLedgerPDF;
  window.exportPaymentLedgerExcel = exportPaymentLedgerExcel;
  window.exportVCPaymentLedgerPDF = exportVCPaymentLedgerPDF;
  window.exportVCPaymentLedgerExcel = exportVCPaymentLedgerExcel;
  window.exportVendorNameLedgerPDF = exportVendorNameLedgerPDF;
  window.exportVendorNameLedgerExcel = exportVendorNameLedgerExcel;
  window.exportTradeLedgerPDF = exportTradeLedgerPDF;
  window.exportTradeLedgerExcel = exportTradeLedgerExcel;
  window.exportAllVendorNameLedgerPDF = exportAllVendorNameLedgerPDF;
  window.exportAllVendorNameLedgerExcel = exportAllVendorNameLedgerExcel;
  window.exportAllTradeLedgerPDF = exportAllTradeLedgerPDF;
  window.exportAllTradeLedgerExcel = exportAllTradeLedgerExcel;
  window.markPaid = markPaid;
  window.openPayInvoice = ()=>{};
  window.openLienWvr = ()=>{};

  // Invoices
  window.exportInvoicePDF = exportInvoicePDF;
  window.exportInvoiceExcel = exportInvoiceExcel;
  window.invSwitchSource = invSwitchSource;
  window.invManualVendorChange = invManualVendorChange;
  window.invUpdateMilestones = invUpdateMilestones;
  window.invMilestoneSelected = invMilestoneSelected;
  window.openInvPayment = openInvPayment;
  window.closeInvPayment = closeInvPayment;
  window.saveInvPayment = saveInvPayment;
  window.viewFile = viewFile;
  window.addPartialPayment = addPartialPayment;
  window.updatePartialTxn = updatePartialTxn;
  window.removePartialPayment = removePartialPayment;
  window.viewAllLienFiles = viewAllLienFiles;
  window.downloadAllLienFiles = downloadAllLienFiles;
  window.approveInvoice = approveInvoice;
  window.rejectInvoice = rejectInvoice;
  window.deleteInvPayment = deleteInvPayment;
  window.unmarkInv = unmarkInv;
  window.markInvPaid = markInvPaid;
  window.delInvoice = delInvoice;

  // Lien email
  window.openLienEmail = (typeof openLienEmail !== 'undefined') ? openLienEmail : ()=>{};
  window.closeLienEmail = (typeof closeLienEmail !== 'undefined') ? closeLienEmail : ()=>{};
  window.sendLienEmail = (typeof sendLienEmail !== 'undefined') ? sendLienEmail : ()=>{};

  // Ledger email
  window.openLedgerEmail = (typeof openLedgerEmail !== 'undefined') ? openLedgerEmail : ()=>{};
  window.closeLedgerEmail = closeLedgerEmail;
  window.sendLedgerEmail = sendLedgerEmail;
  window.copyLedgerToClipboard = copyLedgerToClipboard;

  // Contract email
  window.closeContractEmailModal = closeContractEmailModal;
  window.sendContractEmailModal = sendContractEmailModal;
  window.openContractEmailModal = (typeof openContractEmailModal !== 'undefined') ? openContractEmailModal : ()=>{};

  // Milestones export
  window.exportMilestonePDF = exportMilestonePDF;
  window.exportMilestoneExcel = exportMilestoneExcel;

  // Export page
  window.exportPDF = exportPDF;
  window.exportWord = exportWord;
  window.exportPPTX = exportPPTX;
  window.exportJSON = exportJSON;
  window.exportAllFiles = exportAllFiles;
  window.importJSON = importJSON;

  // Vendor directory
  window.openVDirModal = openVDirModal;
  window.closeVDirModal = closeVDirModal;
  window.saveVDir = saveVDir;
  window.deleteVDir = deleteVDir;

  // Vendors (contracts)
  window.venDirSelect = venDirSelect;
  window.venAddMilestone = venAddMilestone;
  window.venMsChange = venMsChange;
  window.venRemoveMilestone = venRemoveMilestone;
  window.venUpdateMilestonePct = venUpdateMilestonePct;
  window.venUpdateTotal = venUpdateTotal;
  window.delVendor = delVendor;

  // Checklist
  window.delChkItem = delChkItem;

  // QA/QC
  window.delQAItem = delQAItem;

  // Auth
  window.doLogin = doLogin;
  window.doLogout = doLogout;
  window.toggleLoginPass = toggleLoginPass;
  window.showForgotPass = showForgotPass;
  window.closeForgotPass = closeForgotPass;
  window.doForgotPass = doForgotPass;
  window.showResetPass = showResetPass;
  window.closeResetPass = closeResetPass;
  window.doResetPass = doResetPass;
  window.showSetupPass = showSetupPass;
  window.closeSetupPass = closeSetupPass;
  window.doSetupPass = doSetupPass;
  window.showManageUsers = showManageUsers;
  window.currentUser = currentUser;

  // Roles & permissions
  window.showManageRoles = showManageRoles;
  window.addRole = addRole;
  window.deleteRole = deleteRole;
  window.showAccessControl = showAccessControl;
  window.acUpdate = acUpdate;
  window.acSetAll = acSetAll;
  window.saveAccessControl = saveAccessControl;

  // Mobile menu
  window.toggleMobMenu = toggleMobMenu;
  window.closeMobMenu = closeMobMenu;

  // Settings
  window.saveEmailConfig = saveEmailConfig;
  window.testEmailConfig = testEmailConfig;
  window.clearEmailConfig = clearEmailConfig;
  window.getApiBase = getApiBase;
  window.getBackendBase = getBackendBase;
  window.__LIVIO_API_BASE = getApiBase();

  // File helpers
  window.handleFileInput = handleFileInput;
  window.handleDrop = handleDrop;
  window.removePending = removePending;
  window.dropZoneHTML = dropZoneHTML;
  window.attachListHTML = attachListHTML;
  window.regFiles = regFiles;
  window.FA = FA;

  // Print
  window.print = window.print;

  hydrateDBFromServer();
}
