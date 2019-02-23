function FindProxyForURL(url, host) {
  if (shExpMatch(host, '*.draconiusgo.com')) {
    return 'PROXY ##PROXY##';
  }

  // if (shExpMatch(host, "sso.pokemon.com")) {
  // 	return "PROXY ##PROXY##";
  // }

  return DIRECT;
}
