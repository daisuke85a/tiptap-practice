<template>
  <div class="icon" :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]">
    <!-- <svg class="icon__svg">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#icon--' + name"></use>
    </svg> -->
    <svg :viewBox="symbol.viewBox"  class="icon__svg">
      <use :xlink:href="'#' + name" />
    </svg>
  </div>
</template>

<script>

import add_col_after from '../../assets/images/add_col_after.svg';
import bold from '../../assets/images/bold.svg';                
import delete_col from '../../assets/images/delete_col.svg';          
import hr from '../../assets/images/hr.svg';                  
import mention from '../../assets/images/mention.svg';             
import redo from '../../assets/images/redo.svg';                
import ul from '../../assets/images/ul.svg';
import add_col_before from '../../assets/images/add_col_before.svg';      
import checklist from '../../assets/images/checklist.svg';           
import delete_row from '../../assets/images/delete_row.svg';          
import image from '../../assets/images/image.svg';               
import ol from '../../assets/images/ol.svg';                  
import remove from '../../assets/images/remove.svg';              
import underline from '../../assets/images/underline.svg';
import add_row_after from '../../assets/images/add_row_after.svg';       
import code from '../../assets/images/code.svg';                
import delete_table from '../../assets/images/delete_table.svg';        
import italic from '../../assets/images/italic.svg';              
import paragraph from '../../assets/images/paragraph.svg';           
import strike from '../../assets/images/strike.svg';              
import undo from '../../assets/images/undo.svg';
import add_row_before from '../../assets/images/add_row_before.svg';      
import combine_cells from '../../assets/images/combine_cells.svg';       
import github from '../../assets/images/github.svg';              
import link from '../../assets/images/link.svg';                
import quote from '../../assets/images/quote.svg';               
import table from '../../assets/images/table.svg';

export default {
  props: {
    name: {},
    size: {
      default: 'normal',
    },
    modifier: {
      default: null,
    },
    fixAlign: {
      default: true,
    },
  },
  data: function(){
    return {symbol: bold}
  }
}
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 .3rem;
  top: -.05rem;
  fill: currentColor;

  &.has-align-fix {
  	top: -.1rem;
  }

  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

}

// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }

  *[d="M0 0h24v24H0z"] {
    display: none;
  }
}
</style>
