

import BaseButton from "../components/BaseButton";
import Card from "../components/Card";
import Icon from "../components/Icon";

export default {
  install(Vue) {
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
