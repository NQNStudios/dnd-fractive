// Your Javascript goes here
globeActive = false;

function GlobePrint() {
  if (globeActive) {
    return Core.GetSection("GlobeEffects").innerHTML;
  }
}

function activateGlobe()
{
    globeActive = true;
    Core.GotoSection("Gallery");
}

function deactivateGlobe()
{
  globeActive = false;
  Core.GotoSection("Gallery");
}
