<script>
  import BaseButton from '@/components/ui/BaseButton.vue';
  import HeaderMenuItem from '@/components/header/HeaderMenuItem.vue';

  export default {
    components: { BaseButton, HeaderMenuItem },

    data() {
      return{
        isOpen: false
      }
    }
  }

  </script>

  <template>
    <div @keydown.esc="isOpen = false" class="relative"   tabindex="0">
      <BaseButton icon-name="menu" @click="isOpen = !isOpen" class="header-menu-button pointer" />

      <HeaderMenuItem  v-show="isOpen" class="submenu"/>
    </div>
  </template>

  <style scoped>
  .header-menu-button {
    background: var(--header-control-bg);
    color: var(--header-control-fg);

    padding: var(--header-control-py) var(--header-control-px);

    border: 1px solid var(--header-control-border-color);
    border-radius: var(--header-control-radius);
    box-shadow: var(--header-control-shadow);

    transition: all 0.2s ease;
  }

  .header-menu-button:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.05);
  }

  .submenu {
    position: fixed;
    top: 0px;
    left: 0px;

    margin-top: var(--height-header);

    background: rgba(30, 41, 59, 0.4);
    border: solid 1px black;
    /* border-radius: 0% 0% 20% 0%; */
  }

  </style>
