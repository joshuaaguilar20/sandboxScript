function isSandboxedIframe() {
  if (window.parent === window) return 'no-iframe';
  try { var f = window.frameElement; } catch(err) { f = null; }
  if(f === null) {
    if(document.domain !== '') return 'unkown'; // Probably 'non-sandboxed'
    if(location.protocol !== 'data:') return 'sandboxed';
    return 'unkown'; // Can be 'sandboxed' on Firefox
  }
  return f.hasAttribute('sandbox') ? 'sandboxed' : 'non-sandboxed';
}

//Changing Sandbox att failed as plugin needs flash and detects sandbox blocking content



setInterval(isSandboxedIframe, 3000);

 




