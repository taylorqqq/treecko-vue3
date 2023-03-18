<template>
  <div class="hidden md:block menu w-[200px] bg-gray-800 p-2 min-h-screen">
    <div class="logo text-gray-300 flex items-center">
      <i class="fab fa-battle-net text-pink-700 mr-2 text-[26px]"></i>
      <span class="text-[20px]">管理系统</span>
    </div>

    <!-- 菜单 -->
    <div class="left-container text-white">
      <dl v-for="(pmenu, index) in menus" :key="index">
        <dt @click="handeleChoosePMenu(pmenu)">
          <section>
            <i :class="pmenu.icon"></i>
            <span>{{ pmenu.name }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-100"
              :class="{ 'rotate-180': pmenu.active }"
            ></i>
          </section>
        </dt>
        <dd
          v-show="pmenu.active"
          v-for="(cmenu, cindex) in pmenu.children"
          :class="{ active: cmenu.active }"
          @click="handeleChooseCMenu(pmenu, cmenu)"
        >
          {{ cmenu.name }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
interface IMenuItem {
  name: string;
  icon?: string;
  children?: IMenuItem[];
  active?: boolean;
}

const menus = reactive<IMenuItem[]>([
  {
    name: "错误页面",
    icon: "fab fa-behance-square",
    active: true,
    children: [
      {
        name: "403错误",
        active: true,
      },
      {
        name: "404错误",
        active: false,
      },
      {
        name: "500错误",
        active: false,
      },
    ],
  },
  {
    name: "编辑器",
    icon: "fab fa-android",
    active: false,
    children: [
      {
        name: "markdown编辑器",
        active: false,
      },
      {
        name: "富文本编辑器",
        active: false,
      },
    ],
  },
]);

/**
 * @description 选择菜单
 * @param {IMenuItem} pmenu 父菜单
 * @param {IMenuItem} cmenu 子菜单
 * @return {*}
 */
const handeleChoosePMenu = (pmenu: IMenuItem) => {
  handeleResetMenu(pmenu);
  pmenu.active = !pmenu.active;
  menus.forEach((item) => {
    if (item.name == pmenu.name) {
      if (item?.children && item?.children.length > 0) {
        item.children[0].active = true;
      }
    }
  });
};
const handeleChooseCMenu = (pmenu: IMenuItem, cmenu: IMenuItem) => {
  handeleResetMenu(pmenu);
  cmenu.active = true;
};

/**
 * @description 状态重置
 *
 */
const handeleResetMenu = (menu: IMenuItem) => {
  menus.forEach((pmenu) => {
    if (menu.name != pmenu.name) {
      pmenu.active = false;
    }
    pmenu.children?.forEach((cmenu) => (cmenu.active = false));
  });
};
</script>

<style scoped lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-6 flex justify-between items-center cursor-pointer;
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
            @apply text-[20px];
          }
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
}
</style>
