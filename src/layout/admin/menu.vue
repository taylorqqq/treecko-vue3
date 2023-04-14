<template>
  <div class="admin-menu">
    <div class="menu" :class="{ close: useMenuStore().close }">
      <div class="logo">
        <i-home theme="outline" size="24" fill="#fff" class="mr-2" />
        <!-- <i class="fas fa-robot text-pink-700 mr-2 text-[26px]"></i> -->
        <span class="text-[20px]">管理系统</span>
      </div>

      <!-- 菜单 -->
      <div class="left-container text-white">
        <dl>
          <dt
            @click="
              () => {
                menus.forEach((item) => {
                  item.isActive = false;
                  if (item.children && item.children.length > 0) {
                    item.children.forEach((citem) => {
                      citem.isActive = false;
                    });
                  }
                });
                $router.push('/dashboard');
              }
            "
            :class="{
              active: $route.path === '/dashboard' && isMenuNotActive(),
            }"
          >
            <section>
              <!-- <i class="fas fa-home"></i> -->
              <i-dashboard-one
                theme="outline"
                size="24"
                fill="#fff"
                class="mr-2 pmenuIcon"
              />
              <span>dashboard</span>
            </section>
          </dt>
        </dl>
        <dl v-for="(pmenu, index) in menus" :key="index">
          <dt
            @click="handeleChoosePMenu(pmenu)"
            :class="{
              pactive: pmenu?.isActive && useMenuStore().close,
            }"
          >
            <section>
              <!-- <i :class="pmenu?.icon"></i> -->
              <component
                :is="icons[pmenu?.icon!]"
                theme="outline"
                size="24"
                fill="#fff"
                class="mr-2 pmenuIcon"
              />
              <span>{{ pmenu?.title }}</span>
            </section>
            <section>
              <!-- <i
                class="fas fa-angle-down duration-100 rotate"
                :class="{ 'rotate-180': pmenu?.isActive }"
              ></i> -->
              <i-down
                theme="filled"
                size="24"
                fill="#fff"
                v-show="!pmenu?.isActive"
              />
              <i-up
                theme="filled"
                size="24"
                fill="#fff"
                v-show="pmenu?.isActive"
              />
            </section>
          </dt>
          <dd :class="pmenu?.isActive ? 'block' : 'hidden'">
            <div
              v-for="(cmenu, cindex) in pmenu.children"
              :class="{ active: cmenu?.isActive, horizontal: model.horizontal }"
              @click="handeleChooseCMenu(pmenu, cmenu)"
            >
              {{ model.horizontal ? cmenu?.title : cmenu?.title?.slice(0, 4) }}
              <!-- {{ cmenu?.title }} -->
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div
      class="bg block md:hidden"
      :class="{ close: useMenuStore().close }"
      @click="useMenuStore().toggleMenu()"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useMenuStore } from "@/store/menuStore";
import router from "@/router";
import * as icons from "@icon-park/vue-next";
import { IMenu } from "#/menu";
const { menus } = useMenuStore();

const model = ref({
  horizontal: true,
});

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

const isMenuNotActive = () => {
  return menus.every((pmenu) => {
    return pmenu.isActive == false;
  });
};
</script>

<style scoped lang="scss">
.menu {
  @apply w-[200px] bg-gray-800 p-2 min-h-screen duration-300;
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
        &.pactive {
          @apply md:bg-blue-800;
        }
      }

      dd {
        div {
          @apply py-3 pl-4 my-2 rounded-md cursor-pointer bg-gray-700 hover:bg-blue-500 duration-300;
          &.active {
            @apply bg-blue-800 hover:bg-blue-500;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu {
    @apply absolute top-0 left-0 z-30;

    &.close {
      @apply hidden;
    }
  }
}

@media screen and (min-width: 768px) {
  .menu {
    &.close {
      @apply w-[80px];
      .logo {
        @apply justify-center;

        i {
          @apply mr-0;
        }
      }

      span {
        @apply hidden;
      }
      .pmenuIcon {
        @apply block mr-0;
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
            @apply absolute w-[184px] left-[72px] top-0 m-0 z-20 bg-blue-800 px-2 bg-gray-900;
            .horizontal {
              @apply hover:bg-blue-500;
            }
          }
        }
      }
    }
  }
}

.bg {
  @apply w-full h-full bg-black opacity-50 fixed top-0 left-0 z-20;

  &.close {
    @apply hidden;
  }
}
</style>
