function funExibe(par_alt, par_src) {
    img_destaque.src = par_src;
    img_destaque.alt = img_destaque.title = par_alt;
    p_destaque.innerHTML = par_alt;
}