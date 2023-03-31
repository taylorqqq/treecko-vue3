<template>
  <div
    class="menu hidden md:block w-[200px] bg-gray-800 p-2 min-h-screen"
    :class="{ close: useMenuStore().close }"
  >
    <div class="logo text-gray-300 flex items-center">
      <i class="fab fa-battle-net text-pink-700 mr-2 text-[26px]"></i>
      <span class="text-[20px]">管理系统</span>
    </div>

    <!-- 菜单 -->
    <div class="left-container text-white">
      <dl>
        <dt
          @click="
            () => {
              $router.push('/dashboard');
              menus.forEach((item) => {
                item.isActive = false;
                if (item.children && item.children.length > 0) {
                  item.children.forEach((citem) => {
                    citem.isActive = false;
                  });
                }
              });
            }
          "
          :class="{ active: $route.path === '/dashboard' }"
        >
          <section>
            <i class="fas fa-home"></i>
            <span>dashboard</span>
          </section>
        </dt>
      </dl>
      <dl v-for="(pmenu, index) in menus" :key="index">
        <dt @click="handeleChoosePMenu(pmenu)">
          <section>
            <i :class="pmenu?.icon"></i>
            <span>{{ pmenu?.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-100"
              :class="{ 'rotate-180': pmenu?.isActive }"
            ></i>
          </section>
        </dt>
        <dd
          v-show="pmenu?.isActive"
          v-for="(cmenu, cindex) in pmenu.children"
          :class="{ active: cmenu?.isActive }"
          @click="handeleChooseCMenu(pmenu, cmenu)"
        >
          {{ cmenu?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/store/menuStore";
import router from "@/router";
const { menus } = useMenuStore();

/**
 * @description 选择菜单
 */
const handeleChoosePMenu = (pmenu: IMenu) => {
  pmenu.isActive = !pmenu.isActive;
};
/**
 * @description 选择子菜单
 */
const handeleChooseCMenu = (pmenu: IMenu, cmenu: IMenu) => {
  handeleResetMenu(pmenu);
  cmenu.isActive = true;
  router.push({
    name: cmenu.route,
  });
};

/**
 * @description 状态重置
 */
const handeleResetMenu = (menu: IMenu) => {
  menus.forEach((pmenu) => {
    if (menu.title != pmenu.title) {
      pmenu.isActive = false;
    }
    pmenu.children?.forEach((cmenu) => {
      cmenu.isActive = false;
    });
  });
};
</script>

<style scoped lang="scss">
.menu {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-2 py-3 px-2 bg-gray-900 rounded-md flex justify-between items-center cursor-pointer;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-[24px];
          }
          span {
            @apply text-[14px];
          }
        }
        section {
          i {
            @apply text-[16px];
          }
        }
      }

      dd {
        @apply py-3 pl-4 my-2 rounded-md cursor-pointer bg-gray-700 hover:bg-blue-500 duration-300;
        &.active {
          @apply bg-blue-800 hover:bg-blue-500;
        }
      }

      dt {
        &.active {
          @apply bg-blue-800;
        }
      }
    }
  }

  // &.close {
  //   @apply w-[80px];
  // }
}
</style>
