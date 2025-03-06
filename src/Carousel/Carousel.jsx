import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const img = [
    {
      title: 1,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTsIHqmKvuiJaunFg-3M7eRlEBPik8Un-eqTK-od9x48LzeGITagPm82bIopTRvyhIEMehQNdXN2qfj0AVpDTMhftqYStaCieJdbO-jfhSkFUVGBs9eYkpkjdzOj_UCKZi53.webp?r=06c",
    },
    {
      title: 2,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92",
    },
    {
      title: 3,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUiKNXIYjkmCmVedWUxralkvxaJAvqtsiIxM-jkmtG4Bgpu2XYlDGkqwmqUjujkKNLwjuiImN5xHgYQvYE5sgAtW2voNprG98TkAh737RgL5kQZrGbIhuwp_Tn_aJi7PzSFE.webp?r=f85",
    },
    {
      title: 4,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX__4IDXUfAha-ZJby9rICyllwCXAkILhlvlrj_TXuGnRRIxxXZBffOBGK4S4kl_HN6oSWDXguVxJrnKIVY7LVDxnEP-Mo9RDWU.webp?r=207",
    },
    {
      title: 5,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABexxJ7CuzN9sn4oXmDXsOPWU4dalTxyPYB7mIcyBrXl-dNeHcSB1yT4BinjKzhXgVpBdRVm4GSA3X7NyZEIkGbm40jcHE4hYKJyPYK7YN660ARcEsF57PrIPsalxMtfHnlur.webp?r=319",
    },
    {
      title: 6,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQzXaGfD-AkdJYI8dTxdVCMHaEKLuB-za_6PRMt6qN8GzCNxzT0rP-njK5RM5nQ3hbyrteXaLslVDxXEs1zhhwV0xq6-piKQwFUOrrkuwBr-omC8vt0Nhx1PCYt1jgkRHmyY.webp?r=3f5",
    },
    {
      title: 7,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdlOrlosQt4L9vOvfFrEU3IC1nd91dIiP29xrvpMJi9p9PCa7ChKaA72ZKvp4kh1QK_fmXKRFEWcDuujXqVonhurgI1GOsc_aHfVwOAHZ3g6s5HVWlRMei27YciQg49LX5Zx.webp?r=736",
    },
    {
      title: 8,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTU8p8yu4Z_R9h_C_jTAvk4BqsCfT-nuRwVFdEHralokj1ljn1Ez-Bii2oI9zDtJF0TSdLZyoNDiw4e3uvL1XH6vJeqemOshHZp6_N485bj0Et6EjZZFIuMm8xYKqyLnPDVv.webp?r=14c",
    },
    {
      title: 9,
      imgUrl:
        "https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABScSAnI47ovoETcYBhKCILXN91D3uCQTeh3aG24EF1iRpP7YNh86hK0eF8JkfKAzdNYZcjcvLy4UB_BpSQgg2AcvjjRMpP6A8C0.webp?r=4bd",
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h3>Trending Now</h3>
          <Slider {...settings} className="carousel">
            {img.map((ele, i) => (
              <div key={i} className="carouselImage">
                <img src={ele.imgUrl} />
                <h2>{ele.title}</h2>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}

export default Carousel;
