<template>
  <v-layout row wrap>
    <v-flex xs12>

      <Tree :data="items" draggable cross-tree @drop="sayDropped">
        <div slot-scope="{ data, store }">
          <template v-if="!data.isDragPlaceHolder">
            <div @dblclick="store.toggleOpen(data)">
              <b v-if="data.children && data.children.length" @click="store.toggleOpen(data)">{{ data.open ? '-' : '+' }}</b>
              <span>{{ data.text }}</span>
            </div>
          </template>
        </div>
      </Tree>

    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { DraggableTree } from "vue-draggable-nested-tree";
  import Notify from "@services/Notify";

  export default {
    name: "tree",
    components: {
      Tree: DraggableTree
    },
    data() {
      return {
        items: [{
          text: 'node 1'
        }, {
          text: 'node 2'
        }, {
          text: 'node 3 undraggable',
          draggable: false
        }, {
          text: 'node 4'
        }, {
          text: 'node 5 undroppable',
          droppable: false
        }]
      }
    },
    methods: {
      // Run when an item is dragged
      sayDragged() {
        console.log("I was dragged");
      },
      
      // Run when an item is dropped
      sayDropped() {
        console.log("I was dropped");
        Notify.success("Successfully dropped");
      },

      // Run ONLY when an item that is dragged, changes position
      sayChanged() {
        console.log("I was changed");
      }
    }
  }
</script>

<style lang="scss">
.tree-node-inner {
  padding: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.draggable-placeholder-inner {
  border: 1px dashed #0088f8;
  box-sizing: border-box;
  background: rgba(0, 136, 249, 0.09);
  color: #0088f9;
  text-align: center;
  padding: 0;
  display: flex;
  align-items: center;
}
</style>