import React, { Component } from "react";
import { Spinner } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/Searchbar/Searchbar";
import axios from "axios";
import { Button } from "./components/Button/Button";
import styles from "./global.module.css";

const apiKey = "17963589-c265f5bdf910c5306ecbadda5";

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    Page: 1,
    showModal: false,
    currentId: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  onToggleModal = () => {
    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };
  onCloseModal = () => this.setState({ showModal: false, getLargeImage: "" });

  getId = (id) => {
    this.setState({ currentId: id });
  };

  getLargeImage = () => {
    const filteredEl = this.state.images.filter(
      (el) => el.id === this.state.currentId
    );
    let el = filteredEl[0];

    return el.webformatURL;
  };

  getQuery = (query) => {
  
    this.setState({ query: query, Page: 1, images: [] });
  
  };
  
  fetchImages = () => {
    this.setState({ isLoading: true,});
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.Page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((result) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...result.data.hits],
          isLoading: false,
          Page: prevState.Page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.clientHeight,
        behavior: "smooth",
      });
    }, 100);
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.onCloseModal();
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.getQuery} />

        <ImageGallery
          gallery={this.state.images}
          onToggleModal={this.onToggleModal}
          getId={this.getId}
        />

        {this.state.images.length > 0 ? (
          <Button fetch={this.fetchImages} />
        ) : (
          ""
        )}

        {this.state.isLoading && <Spinner />}

        {this.state.showModal && (
          <Modal
            onToggleModal={this.onToggleModal}
            getLargeImage={this.getLargeImage}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
