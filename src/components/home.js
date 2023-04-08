import "./styles/body.css";
import "./styles/home.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chairman from "./srcs/chairman.png";
import refinery from "./srcs/refinery.jpg";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
        setVisible(entry.isIntersecting);
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* some random text to check */}
      {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo
        tristique, sodales urna molestie, vulputate diam. Ut vel aliquam ex. Nam
        auctor magna sit amet lobortis semper. Integer in tellus at magna
        suscipit aliquet eget sed ante. Praesent nec tristique velit. Nunc
        convallis, nisi non tempor accumsan, ipsum justo pellentesque est,
        lobortis vestibulum nibh diam accumsan dolor. Proin quis maximus nibh.
        Praesent pellentesque molestie lectus at sollicitudin. Aliquam augue
        sapien, volutpat id sodales sed, mattis in lectus. Maecenas diam dui,
        eleifend vitae vestibulum accumsan, commodo vel erat. Sed tempor dictum
        hendrerit. Phasellus erat neque, accumsan eu ipsum sagittis, tristique
        posuere neque. Praesent ut dolor sit amet leo auctor interdum. Sed id
        velit vel neque consectetur eleifend. Praesent euismod vulputate elit
        eget iaculis. Sed aliquam nunc lorem, vitae consectetur leo hendrerit
        sed. Suspendisse lobortis ante eget augue congue elementum. Ut malesuada
        dapibus metus, ut finibus felis eleifend ac. Donec et aliquam ante, sit
        amet feugiat arcu. Aliquam nec consequat nulla. Vestibulum a scelerisque
        nunc. Praesent erat elit, varius id orci nec, consequat sollicitudin
        elit. Mauris aliquam dignissim erat non euismod. Phasellus non ornare
        tortor. Proin aliquet, ligula id pretium sagittis, risus tellus aliquet
        tellus, id mollis justo velit id ligula. Nulla accumsan viverra justo
        non congue. Etiam vel tincidunt massa, ut consectetur nisi. Vivamus
        auctor euismod metus, sit amet feugiat nulla luctus in. Quisque sed
        justo congue, ultricies ligula vel, condimentum eros. Cras at mi a leo
        varius vulputate. Mauris porttitor feugiat venenatis. Etiam ac tellus a
        arcu vulputate gravida sed eu urna. Etiam scelerisque enim eleifend
        cursus viverra. Praesent ullamcorper, diam euismod laoreet accumsan,
        ligula nisl aliquam tortor, sed commodo neque ipsum vitae nunc. Nam
        pulvinar, velit a dapibus interdum, nisi nibh varius dui, ac imperdiet
        dui magna vel lorem. Vestibulum ultricies orci in imperdiet tempor.
        Proin auctor, dolor non vestibulum dignissim, ipsum mi sodales dui, a
        faucibus tellus arcu eu nunc. Curabitur sem nisi, lobortis et mi ac,
        scelerisque pulvinar sapien. Nullam at odio finibus, lobortis nunc at,
        ultrices eros. Suspendisse placerat dui eget nibh aliquet ultricies.
        Suspendisse tellus est, euismod at felis in, elementum eleifend nulla.
        Nunc tristique a sem et iaculis. Praesent nisi urna, commodo et lectus
        vel, vehicula suscipit metus. Sed condimentum, libero ac fringilla
        facilisis, turpis lorem condimentum urna, sit amet fermentum augue elit
        malesuada lacus. Vestibulum eu est et enim bibendum volutpat at et
        velit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Morbi placerat nunc vel tortor
        iaculis rhoncus. Curabitur ac elit ut risus dignissim euismod eget a
        odio. Fusce hendrerit vestibulum imperdiet. Suspendisse sit amet mi vel
        ligula ultricies eleifend. Donec quis ultricies turpis, sit amet
        elementum justo. Nulla a quam bibendum metus vehicula dictum. Vivamus
        elementum lacus eget lectus faucibus, sit amet viverra nisl fermentum.
        Etiam non vehicula orci. Nunc rhoncus pulvinar urna, at lacinia lacus
        sollicitudin vel. Donec ultrices ac lacus sed lacinia. Fusce congue odio
        nec tempus varius. Proin sed lacus hendrerit, efficitur felis ac,
        ultricies turpis. Curabitur quis dolor neque. In euismod tristique
        ultrices. Vivamus est nibh, laoreet posuere justo sed, fringilla
        malesuada turpis. Maecenas eget lorem euismod, iaculis lacus
        scelerisque, rutrum neque. Maecenas venenatis tincidunt diam a
        hendrerit. Curabitur velit nisi, tristique ac tincidunt ac, vehicula non
        sapien. Praesent felis urna, euismod vitae sapien vitae, facilisis
        volutpat dolor. Vestibulum pretium at elit at viverra. Nunc ut augue
        tristique, vestibulum tortor non, eleifend augue. Donec hendrerit sapien
        non molestie ornare. Praesent ultricies nulla luctus, vehicula diam ut,
        pharetra libero. Donec dapibus scelerisque mi, quis varius metus
        consectetur et. Ut pellentesque mollis auctor. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec ut justo tristique, sodales
        urna molestie, vulputate diam. Ut vel aliquam ex. Nam auctor magna sit
        amet lobortis semper. Integer in tellus at magna suscipit aliquet eget
        sed ante. Praesent nec tristique velit. Nunc convallis, nisi non tempor
        accumsan, ipsum justo pellentesque est, lobortis vestibulum nibh diam
        accumsan dolor. Proin quis maximus nibh. Praesent pellentesque molestie
        lectus at sollicitudin. Aliquam augue sapien, volutpat id sodales sed,
        mattis in lectus. Maecenas diam dui, eleifend vitae vestibulum accumsan,
        commodo vel erat. Sed tempor dictum hendrerit. Phasellus erat neque,
        accumsan eu ipsum sagittis, tristique posuere neque. Praesent ut dolor
        sit amet leo auctor interdum. Sed id velit vel neque consectetur
        eleifend. Praesent euismod vulputate elit eget iaculis. Sed aliquam nunc
        lorem, vitae consectetur leo hendrerit sed. Suspendisse lobortis ante
        eget augue congue elementum. Ut malesuada dapibus metus, ut finibus
        felis eleifend ac. Donec et aliquam ante, sit amet feugiat arcu. Aliquam
        nec consequat nulla. Vestibulum a scelerisque nunc. Praesent erat elit,
        varius id orci nec, consequat sollicitudin elit. Mauris aliquam
        dignissim erat non euismod. Phasellus non ornare tortor. Proin aliquet,
        ligula id pretium sagittis, risus tellus aliquet tellus, id mollis justo
        velit id ligula. Nulla accumsan viverra justo non congue. Etiam vel
        tincidunt massa, ut consectetur nisi. Vivamus auctor euismod metus, sit
        amet feugiat nulla luctus in. Quisque sed justo congue, ultricies ligula
        vel, condimentum eros. Cras at mi a leo varius vulputate. Mauris
        porttitor feugiat venenatis. Etiam ac tellus a arcu vulputate gravida
        sed eu urna. Etiam scelerisque enim eleifend cursus viverra. Praesent
        ullamcorper, diam euismod laoreet accumsan, ligula nisl aliquam tortor,
        sed commodo neque ipsum vitae nunc. Nam pulvinar, velit a dapibus
        interdum, nisi nibh varius dui, ac imperdiet dui magna vel lorem.
        Vestibulum ultricies orci in imperdiet tempor. Proin auctor, dolor non
        vestibulum dignissim, ipsum mi sodales dui, a faucibus tellus arcu eu
        nunc. Curabitur sem nisi, lobortis et mi ac, scelerisque pulvinar
        sapien. Nullam at odio finibus, lobortis nunc at, ultrices eros.
        Suspendisse placerat dui eget nibh aliquet ultricies. Suspendisse tellus
        est, euismod at felis in, elementum eleifend nulla. Nunc tristique a sem
        et iaculis. Praesent nisi urna, commodo et lectus vel, vehicula suscipit
        metus. Sed condimentum, libero ac fringilla facilisis, turpis lorem
        condimentum urna, sit amet fermentum augue elit malesuada lacus.
        Vestibulum eu est et enim bibendum volutpat at et velit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Morbi placerat nunc vel tortor iaculis rhoncus. Curabitur ac
        elit ut risus dignissim euismod eget a odio. Fusce hendrerit vestibulum
        imperdiet. Suspendisse sit amet mi vel ligula ultricies eleifend. Donec
        quis ultricies turpis, sit amet elementum justo. Nulla a quam bibendum
        metus vehicula dictum. Vivamus elementum lacus eget lectus faucibus, sit
        amet viverra nisl fermentum. Etiam non vehicula orci. Nunc rhoncus
        pulvinar urna, at lacinia lacus sollicitudin vel. Donec ultrices ac
        lacus sed lacinia. Fusce congue odio nec tempus varius. Proin sed lacus
        hendrerit, efficitur felis ac, ultricies turpis. Curabitur quis dolor
        neque. In euismod tristique ultrices. Vivamus est nibh, laoreet posuere
        justo sed, fringilla malesuada turpis. Maecenas eget lorem euismod,
        iaculis lacus scelerisque, rutrum neque. Maecenas venenatis tincidunt
        diam a hendrerit. Curabitur velit nisi, tristique ac tincidunt ac,
        vehicula non sapien. Praesent felis urna, euismod vitae sapien vitae,
        facilisis volutpat dolor. Vestibulum pretium at elit at viverra. Nunc ut
        augue tristique, vestibulum tortor non, eleifend augue. Donec hendrerit
        sapien non molestie ornare. Praesent ultricies nulla luctus, vehicula
        diam ut, pharetra libero. Donec dapibus scelerisque mi, quis varius
        metus consectetur et. Ut pellentesque mollis auctor.
      </div> */}
      <Container fluid>
        {/* put this in a separate component maybe?? */}
        <FadeInSection>
          <Row className="margin1">
            <Col md>
              <h1>Who We Are</h1>
              <div className="div-text">
                A leader in international trade, oil & gas, and agriculture, we
                provide our business partners with full-fledged investment
                options. The combination of our expertise and our presence in
                markets regionally and globally makes us an effective channel
                that identify and execute the knowledge of trade marketing,
                export management, and consultancy for our clients.
                <br></br>
                <img
                  src={refinery}
                  width="100%"
                  height="50%"
                  id="refinery"
                  alt="refinery"
                />
              </div>
              <h1>Our Mission</h1>
              <div className="div-text">
                To build world-class distribution and consultancy for leading
                manufacturers in selected industries.
              </div>
            </Col>

            <Col md>
              <div className="singleColumn">
                {/* put this in a separate component maybe?? */}
                <h1>Our Chairman</h1>
                <div className="div-text">
                  <img src={chairman} width="50%" height="50%" alt="chairman" />
                  <br />
                  Sheikh Khalifa Khaled Zayed Saquer Al-Nahyan is a member of
                  the Al Nahyan family which is one of the ruling families of
                  the United Arab Emirates. Sheikh Khalifa is currently the
                  Chief Executive Officer of Bin Zayed Energy, one of the
                  largest privately held companies in the UAE, headquartered in
                  Dubai. On September 2020, he was appointed as the Vice
                  Chairman of the Board of Directors- Al Firdous Company
                  Holdings.
                  <br />
                  <br />
                  Under His Excellency’s guidance and following his vision,
                  Arkan Group is aiming to become a UAE model business
                  ambassador in the European markets through Greece and Balkan
                  Counties and also to the east with already established trading
                  routes in China, India, Malaysia and other countries.
                </div>
              </div>
            </Col>
          </Row>
        </FadeInSection>
      </Container>
    </>
  );
}

export default Home;
