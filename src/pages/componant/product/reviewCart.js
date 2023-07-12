import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

function ReviewCart({ review }) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 20,
    value: review?.rating,
    isHalf: true,
  };
  return (
    <>
      <div
        style={{ boxShadow: "0px 0px 1px gray" }}
        className="rounded-[20px] bg-[#fff] p-8 w-[350px] text-center flex flex-col justify-center items-center"
      >
        <img
          className="rounded-full w-[70px] border-[2px]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEX+/v68vb////+5urzQ0dO9vb24uLji4uL39/fp6en7+/u2t7nHx8fb29vt7e3f39/LBOR1AAADeUlEQVR4nO2b2ZKsIAyGMRA2Ad//bQ/ay/Sp7tYEidbU+N/OVPtVQhYSVerSpUuXLvUVvOik5/visqnKLvgTKMC7hKjvQkzOHwsBMaPFAYebsMpijgcyQBj08CY9hMMYwNh3gAUiH+MMiMbiZ4RBm0OcAeaDE34YjiDIX7zw9IU4QfnqhTtDEWdIqwBVSRgA3LiFYJ2oGSBuAcx5KooiuJVoOMYMkAgIsqehrEfDQ4JBAdNqTnhIC3piNTG+ICRBBJIbqsQQwJOMUM3gpRigUBHEzmPtVIgIYr0LKTEtCGIhcSH8OgS541hoBJJBGalWkOujz0/Q1DI1GEEEd36x9rSWRaxKKWLjJtkuzIVqs4ev7avsBTtu3mRq9yraxFPMMEpPGSDhxp1S9CQsCH4DYfDCBLMrVhHkKtQrw7Q24piOmfRMX0cM4zEEiy8+GuLQkZv/VK+0kUzMbwwqJLT4IospqGNnwAAlJ/tUyuWEUfg8+PbBTZMLXp00i1c/64CTHv+nBZuSfr7yPkzLLuajplB8lKOAJRCHcdQrqn9NxkUJY9SfDKYmgLUq+UyT2qap954IwGdEjVu9wkOoLZrSMVtWAPNpE7Rli9QtY4LKlg2wyPYpXFBLM+kEfFCtXh3WdhCJ98gv0runweBTqwme2nfDnNdAxCD4Lmt2nErCDoYibZrvVxB2HYNXhlYC6miJwtDkCvDdCFrvF7QlEJmhIUlB2B2N/yG0HIe0Oxr/08hOUaR5CkvsEwmEcQpPyD0NPcPhJu4IirwDYiAw43J1iNAmZE6AqKNeDgIyEfpG5A2B1b1AlEBgZQYg7sd5CKyQ2BirtSHwQkIgILgVWyAguHNZ6Fyj7vptCBvvT7VpZHSxEGUQGLUS/PkIWy+yNSIw0qMQAmdRUFvXC+FCuCEIBSUnIs7PC0rJOIIB0PlK+xCvWAu0LGhZ7ydTX1TgSDNvdN1mPD/iGUEtU56eEDiM/NfEwfc8kvUgNAzFQU3dDKGxcf4JMeseEHps/2YBIE5pWco2Px7R7l0KQAzzZzntFuiwGpk/TnJJjw0UWo+9FkTzrqvkhDcMglPmb4n0OJip6+dU9adiySahtRsrGl3/A5PJPqrua7p5DRp9CRVkftLwviFcgjhlt+wqxbaV943sjOLcy84058mFUrw6bI9+0rb40qVLl/6Q/gHK8Cm3GCyM5QAAAABJRU5ErkJggg=="
        />
        <p className="my-3 text-[gray]">
        {review?.comment}
        </p>
        <h2 className="font-bold text-[17px]">{review?.name}</h2>
        <ReactStars {...options} />
      </div>
    </>
  );
}

export default ReviewCart;
