import React from "react";

export default function Item() {
  return (
    <div className="outer-div">
      <div className="row">
        <div className="col-md">
          <div className="item">
            <h1>NFT Image</h1>
          </div>
        </div>
        <div className="col-md">
          <div className="order-box">
            <h1>NFT Name</h1>
            <div className="row pl-3">
              <div className="small-price-name">Price</div>
            </div>
            <div className="row pl-3">
              <div className="price">1 ETH</div>
            </div>
            <div className="row">
              <div className="col-md">
                <button className="buy-btn btn btn-block btn-primary">
                  Buy
                </button>
              </div>
              <div className="col-md">
                <button className="offer-btn btn btn-block">Make Offer</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md">
          <div className="row">
            <div className="description-box accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Description
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="description-box accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Details
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          cum, eos placeat architecto recusandae dolore! Possimus velit quam
          corrupti beatae, dicta quidem reiciendis harum iusto aut. Dolores
          cumque pariatur nostrum.
        </div>
      </div>
    </div>
  );
}
