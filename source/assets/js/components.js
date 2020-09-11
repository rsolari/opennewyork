const menuItems = [
  ["index.html", "Home"],
  ["calendar.html", "Events"],
  ["faq.html", "FAQ"],
  ["about.html", "About"],
  ["press.html", "Press"],
  ["zoning.html", "Zoning 101"],
  ["learn.html", "Reading List"],
  ["https://docs.google.com/forms/d/e/1FAIpQLSdtmmYrzB1qxw3u2xf93xrUxyhwHsBx8wVxTeaH91yxMbLB1Q/viewform", "Project Submission Form"],
]
function menuLinks() {
  const links = menuItems.map((item)=> {
    return `<a href="${item[0]}" class="navLink">${item[1]}</a>`
  })
  return links.join("\n")
}
function menuListItems() {
  const links = menuItems.map((item)=> {
  return `<li><a href="${item[0]}">${item[1]}</a></li>`
  })
  return links.join("\n")
}

style_contrib = `
  <style>
    .contribute {
      display: flex;
      justify-content: center;
      margin-bottom: 2em;
      font-weight: nomral;
    }
    
    .rounded-div {
      border-radius: 4px;
    }
  </style>  
`
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
contribute = `
  ${style_contrib}
  <div class='contribute'>
    <div id="cp3f0777bd4f" style="margin: 10px 0" class="rounded-div" onclick="document.getElementById('pay_now_form_6299550622').submit()">
      <form action="https://checkout.globalgatewaye4.firstdata.com/pay" id="pay_now_form_6299550622" method="post">
      <input type="hidden" name="x_login" value="WSP-OPEN-kGRNYgDKeA" />
      <input type="hidden" name="x_show_form" value="PAYMENT_FORM" />
      <input type="hidden" name="x_fp_sequence" value="15786855033662628778" />
      <input type="hidden" name="x_fp_hash" value="PNB-1.0-0322ba7283802d43d6717df577114d07e6080c5f" />
      <input type="hidden" name="x_amount" value="" /><input type="hidden" name="x_currency_code" value="USD" />
      <input type="hidden" name="x_test_request" value="FALSE" /><input type="hidden" name="x_relay_response" value="" />
      <input type="hidden" name="donation_prompt" value="" /><input type="hidden" name="button_code" value="Donate Now Open New York" />
      <button type="button">Donate Now</button>
      </form>
    </div>  
    <style type="text/css">
      div#cp3f0777bd4f{ width: 200px; background-color: #3498DB; padding: 2px 0; }
      div#cp3f0777bd4f:hover{ cursor: pointer}
      div#cp3f0777bd4f * { background-color: transparent;}
      div#cp3f0777bd4f form{ margin:0; padding:0;text-align:center }
      div#cp3f0777bd4f div.cpwrap {
        width: 90%;border:0;margin:0 auto;padding: 0px; background-color: #3498DB
      }
      div#cp3f0777bd4f button{
        width: 95%;border:0;margin:0;padding: 0; background-color: #3498DB;text-align: center; color: #FFFFFF; 
        font-family: "Scope One", serif; font-weight: normal; font-size: 1.35em;
      }
      div#cp3f0777bd4f button:focus,div#cp3f0777bd4f button:visited,div#cp3f0777bd4f button:active{
        border:none;outline: none
      }
      div#cp3f0777bd4f{background-color: #3498DB;}
    </style>
  </div>  `


    window.footer=`
      <div class="copyright">        
          ${contribute}
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

    function addMainComponents() {
      console.log('adding main components')
      $('.main-contrib').append(contribute)
    }
