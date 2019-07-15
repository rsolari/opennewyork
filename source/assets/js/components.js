const menuItems = [
  ["index", "Home"],
  ["calendar", "Events"],
  ["faq", "FAQ"],
  ["about", "About"],
  ["press", "Press"],
  ["zoning", "Zoning 101"],
  ["learn", "Reading List"],
]
function menuLinks() {
  const links = menuItems.map((item)=> {
    return `<a href="${item[0]}.html" class="navLink">${item[1]}</a>`
  })
  return links.join("\n")
}
function menuListItems() {
  const links = menuItems.map((item)=> {
  return `<li><a href="${item[0]}.html">${item[1]}</a></li>`
  })
  return links.join("\n")
}

headerAndNav = `
    <header id="header">
      <div class="logo"><a href="index.html">Open New York</a></div>
      ${menuLinks()}
      <a href="#menu" class="navPanelToggle">Menu</a>
    </header>

    <!-- Nav -->
    <nav id="menu">
      <ul class="links">
        ${menuListItems()}
      </ul>
    </nav>
    `

    window.footer=`
      <div class="copyright">
        <ul class="icons" style='font-size: 1.1rem'>
          <li><a href="mailto:OpenNYForAll@gmail.com" class="fas fa-envelope"><span class="label"></span></a></li>
          <li><a href="https://twitter.com/OpenNYForAll" class="fab fa-twitter"><span class="label"></span></a></li>
          <li><a href="https://slack.opennewyork.city/" class="fab fa-slack-hash"><span class="label"></span></a></li>
          <li><a href="https://m.facebook.com/OpenNYForAll/" class="fab fa-facebook-f"><span class="label"></span></a></li>
        </ul>
        <p>&copy; Open New York. All rights reserved. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>, <a href="https://www.flickr.com/photos/ghostrider/1674242990/in/photolist-3xWW7s-7w4rMq-ePNbr9-9HcXW9-9ghLZ-2assk5-6dvzPR-9LnyZr-bV7cei-kZxnW-FwKFM-4JP57G-bkrEnG-8yK6P3-87Atmk-2MXhzm-9bU8E9-6c5b4C-9EbtFU-8k6Zw3-73GFfa-7KonDM-Sa2hYD-NaZFUP-8RR5BR-dCXcYG-AmxjU3-dmNsih-qyk2WH-8jBA4X-rsqWmJ-pP6Ncd-bjxQyz-p9Gpnx-eax6bb-4eTVwb-f21E8b-a4By8z-i16G4L-6qF5HN-6qBUj1-o8vNox-axBU58-dtRmz9-5mgyeT-4h7gxf-4h3eJx-4kDeFf-9NXaJG-f6pXpz/">Daniel Torres Bonatto (cropped)</a> and <a target="_blank" href="https://www.flickr.com/photos/endymion120/14053261861/">Vincent Desjardin</a> CC 2.0 license.</p>
				</div>
    `
    function addComponents(useAlt) {
      $(".nav").append(headerAndNav)
      if (useAlt) {
        $("#header").addClass("alt")
      }
      $("#footer").append(window.footer)
    }
