import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="up">
          <p>Nigeria</p>
        </div>

        <hr />

        <div className="down">
          <ul className="one">
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8QkNQCCBI&url=https%3A%2F%2Fabout.google%2F%3Futm_source%3Dgoogle-NG%26utm_medium%3Dreferral%26utm_campaign%3Dhp-footer%26fg%3D1&usg=AOvVaw0pWXO8SBD0FTvux1O2KYl-">About</a>
            </li>
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8QkdQCCBM&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fen_ng%2Fads%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&usg=AOvVaw1cGvEdrGBobkeaNX9K9o65">Advertising</a>
            </li>
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8QktQCCBQ&url=https%3A%2F%2Fwww.google.com%2Fservices%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&usg=AOvVaw2SJ4zwRVXKyZr53qG9dm4K">Business</a>
            </li>
            <li>
              <a href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
            </li>
          </ul>

          <ul class="two">
            <li>
              <img src="assets/images/carbon.jpg" alt="carbon neutral since 2007" width="11" height="13" />
            </li>
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8QiM8HCBU&url=https%3A%2F%2Fsustainability.google%2Fcommitments%2F%3Futm_source%3Dgooglehpfooter%26utm_medium%3Dhousepromos%26utm_campaign%3Dbottom-footer%26utm_content%3D&usg=AOvVaw33CBu8Ltt2Pn0iagTN2qxC">Carbon neutral since 2007</a>
            </li>
          </ul>

          <ul className="three">
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8Q8awCCBY&url=https%3A%2F%2Fpolicies.google.com%2Fprivacy%3Fhl%3Den-NG%26fg%3D1&usg=AOvVaw0N1Zi2bCM41yPJwczZ5dFQ">Privacy</a>
            </li>
            <li>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8Q8qwCCBc&url=https%3A%2F%2Fpolicies.google.com%2Fterms%3Fhl%3Den-NG%26fg%3D1&usg=AOvVaw1zugHefvD7yNj6ufZwyE0U">Terms</a>
            </li>
            <li>
              Settings
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;