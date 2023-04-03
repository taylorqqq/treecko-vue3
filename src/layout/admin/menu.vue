<template>
  <div class="menu" :class="{ close: useMenuStore().close }">
    <div class="logo">
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
          :class="{
            active: $route.path === '/dashboard' && isMenuNotActive(),
          }"
        >
          <section>
            <i class="fas fa-home"></i>
            <span>dashboard</span>
          </section>
        </dt>
      </dl>
      <dl v-for="(pmenu, index) in menus" :key="index">
        <dt
          @click="handeleChoosePMenu(pmenu)"
          :class="{
            active: pmenu?.isActive && useMenuStore().close,
          }"
        >
          <section>
            <i :class="pmenu?.icon"></i>
            <span>{{ pmenu?.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-100 rotate"
              :class="{ 'rotate-180': pmenu?.isActive }"
            ></i>
          </section>
        </dt>
        <dd
          v-show="pmenu?.isActive"
          v-for="(cmenu, cindex) in pmenu.children"
          :class="{ active: cmenu?.isActive }"
          @click="handeleChooseCMenu(pmenu, cmenu)"
          :style="getStyle(cindex)"
        >
          <!-- {{ useMenuStore().close ? cmenu?.title?.slice(0, 4) : cmenu?.title }} -->
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
  handeleResetMenu(pmenu, 0);
  pmenu.isActive = !pmenu.isActive;
};
/**
 * @description 选择子菜单
 */
const handeleChooseCMenu = (pmenu: IMenu, cmenu: IMenu) => {
  handeleResetMenu(pmenu, 1);
  cmenu.isActive = true;
  router.push({
    name: cmenu.route,
  });
};

/**
 * @description 状态重置
 */
const handeleResetMenu = (menu: IMenu, status: number) => {
  menus.forEach((pmenu) => {
    if (menu.title != pmenu.title) {
      pmenu.isActive = false;
    }
    if (status) {
      pmenu.children?.forEach((cmenu) => {
        cmenu.isActive = false;
      });
    }
  });
};

/**
 * @description 获取子菜单样式
 */
const getStyle = (index: number) => {
  const top = index * 46 + "px"; // 40是菜单项的高度
  return {
    top,
  };
};

const isMenuNotActive = () => {
  return menus.every((pmenu) => {
    return pmenu.isActive == false;
  });
};
</script>

<style scoped lang="scss">
.menu {
  @apply hidden md:block w-[200px] bg-gray-800 p-2 min-h-screen duration-300;
  .logo {
    @apply text-gray-300 flex items-center;
  }
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

      dt {
        &.active {
          @apply bg-blue-800;
        }
      }

      dd {
        @apply py-3 pl-4 my-2 rounded-md cursor-pointer bg-gray-700 hover:bg-blue-500 duration-300;
        &.active {
          @apply bg-blue-800 hover:bg-blue-500;
        }
      }
    }
  }

  &.close {
    @apply w-[80px];
    .logo {
      @apply justify-center;
    }

    span {
      @apply hidden;
    }

    .left-container {
      dl {
        @apply relative;
        dt {
          @apply justify-center;
          section {
            i {
              @apply mr-0;
            }

            .rotate {
              @apply hidden;
            }
          }
        }
        // &:hover {
        //   dd {
        //     display: block !important;
        //   }
        // }
        dd {
          @apply absolute w-[184px] left-[80px] top-0 m-0 z-10;
        }
      }
    }
  }
}
</style>
