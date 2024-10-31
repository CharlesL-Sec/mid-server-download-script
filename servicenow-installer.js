var buildstamp = gs.getProperty('mid.buildstamp')
var m = new MIDPackage('mid', buildstamp, 'windows', 'x86-64');
var uri = new MIDPackageUriFactory(m, 'attachment_download').getUris(1)[0];
gs.print(uri);
