export const renderFooter = () => {
  const block = `
  <div class="git">
  <div class="git-nazima">
    <div class="git-img"></div>
    <a class="git-nazima-text" href="https://github.com/nazimajumaniyazova">Nazima</a>
  </div>

  <div class="git-ayur">
    <div class="git-img"></div>
    <a class="git-ayur-text" href="https://github.com/mighty-mite">Ayur</a>
  </div>

  <div class="git-anton">
    <div class="git-img"></div>
    <a class="git-anton-text" href="https://github.com/antonfio">Anton</a>
  </div>
</div>

<div class="year">2023</div>
<a class="rs-school" href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md"></a>
  `
  const saction = <HTMLElement>document.createElement('footer');
  saction.classList.add('footer')
  saction.innerHTML = block;
  document.body.appendChild(saction);
}
renderFooter()