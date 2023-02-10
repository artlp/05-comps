import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>I Accept</Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open modal
      </Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti aut, perferendis nihil, eum expedita officiis, impedit fugit voluptatum ipsum praesentium ea animi dolore autem quidem optio quos? Veritatis, nostrum?
      Nostrum, corporis, nesciunt odit eligendi ullam, iure officiis nihil repudiandae tenetur eum cum molestias animi magni ipsam fuga laudantium. Totam consequatur numquam voluptatibus eligendi minus illum ducimus asperiores aliquam voluptatum?
      Quidem officiis vitae expedita, recusandae mollitia amet vero ipsam eius fugiat error? Harum dolore in iure, obcaecati asperiores sit odio nulla, error corrupti magni quaerat nisi similique beatae nobis facilis.
      Debitis, eaque laudantium necessitatibus doloremque et blanditiis rerum, in perferendis consequuntur tempora odit, natus dolor! Optio sunt dolorem at exercitationem tenetur, consequuntur rerum quae vel dolores, ex, ipsa nobis pariatur.
      Possimus quaerat libero reiciendis autem velit laborum quae a et alias eligendi expedita quis porro eveniet, asperiores ut inventore facilis mollitia laboriosam, ducimus illo quod fuga nam voluptatum. Possimus, qui!
      Repudiandae facere veritatis, velit voluptates odio molestiae asperiores explicabo nesciunt. Laudantium odio qui inventore et, numquam officia fugit omnis ipsa ab saepe quaerat eaque, dolor, vitae aliquam. Ab, adipisci! Harum.
      Id sunt optio exercitationem eum voluptate iure voluptas sed dolorem fuga numquam, consequuntur natus doloremque nam veritatis doloribus minima voluptatibus aperiam aliquid quo cum consectetur aspernatur impedit! Alias, earum harum?
      Rerum iusto, quae pariatur officia earum eligendi nostrum praesentium, voluptatibus porro provident magnam minus dolor asperiores, illum eaque dolore deserunt nihil expedita debitis odit quidem delectus perferendis? Quo, dolorum fuga?
      Odio sed inventore sunt aperiam consequatur expedita, error consectetur possimus suscipit nulla quae quidem, necessitatibus aspernatur incidunt veniam ducimus libero cupiditate? A quam at rerum, nostrum aliquid dolore delectus deserunt.
      Recusandae omnis consequuntur ea autem deserunt placeat quasi esse dolorum incidunt aliquid, reiciendis, perspiciatis unde dolore voluptate nemo maiores vel repudiandae, eaque in quod corrupti velit hic voluptas temporibus! Consectetur.
      Natus ipsum facere veniam sapiente at ex corporis odio repellat rem incidunt nam asperiores quam saepe non perferendis ea, quibusdam est reiciendis minima illum unde! Et inventore ratione assumenda excepturi!
      Asperiores sapiente deleniti minus doloribus et ab, suscipit ut repudiandae, blanditiis atque maxime soluta ullam ipsam perferendis aliquid nostrum sit nisi dolore aliquam neque! Reiciendis quia et voluptatem sapiente deleniti!
      Inventore enim quo nam, ad, fuga aperiam nisi non laudantium, illum nihil quisquam explicabo. Alias recusandae deleniti, explicabo voluptate culpa labore, repellat, laboriosam reiciendis distinctio omnis a dolore voluptatum dolorum?
      Temporibus veniam, assumenda consectetur, iste necessitatibus sequi odio repudiandae nostrum eos neque magni vero ipsa ducimus repellat accusamus corrupti maxime! Quidem fugiat cum ab vel numquam quod veritatis libero exercitationem?
      Quod a deserunt quo eaque harum, odit doloribus amet minima nobis explicabo esse, dolorum, corrupti cupiditate dolores modi. Ad suscipit alias neque optio accusamus sunt, magni soluta dolorem eius ipsum.
      Atque, dolorem asperiores. Odit perferendis dolore, adipisci rerum numquam repudiandae veritatis omnis impedit repellat vel? Reprehenderit harum laudantium, perspiciatis maxime beatae fuga animi similique maiores illum suscipit dignissimos iure minima.
      Quisquam, minima provident. At porro quam voluptate libero iusto, assumenda illo quo impedit ipsum sit voluptatum ea ad alias eaque expedita? Quia rem ad impedit. Nam eveniet obcaecati iste dolor.
      Quas in minima, nesciunt quia eos et vitae id quos amet? Nobis debitis consectetur, recusandae dignissimos ea aperiam alias consequuntur quos delectus cum magni tempora eveniet totam illum hic saepe.
      In dignissimos obcaecati atque beatae. Praesentium, recusandae veritatis voluptatum quisquam eveniet dolores id numquam nobis perferendis repellendus sit? Commodi impedit beatae adipisci quam ratione, fugit sunt magnam enim suscipit incidunt.
      Quasi corporis laudantium, repellendus, natus maxime ullam ipsam velit distinctio accusantium similique repudiandae eum! Voluptates soluta ut adipisci natus! Nisi, suscipit eligendi. Maxime labore et ratione iusto officiis? Aspernatur, vitae?</p>
    </div>
  );
}

export default ModalPage;
