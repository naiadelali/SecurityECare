import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];    
  children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'home'
    }, 
    {
        state: 'cadastros',
        name: 'Cadastros Básicos',
        type: 'sub',
        icon: 'format_list_bulleted',
       
        children: [
            {state: 'vidas', name: 'Vidas' }
        ]
    } , {
      state: 'forms',
      name: 'Forms',
      type: 'sub',
      icon: 'insert_drive_file',
  
      children: [
  
        {state: 'form-layout', name: 'Form-Layout'},
        {state: 'autocomplete', name: 'Autocomplete'},
        {state: 'checkbox', name: 'Checkbox'},
        {state: 'datepicker', name: 'Datepicker'},
        {state: 'editor', name: 'Editor'},
        {state: 'form-validation', name: 'Form Validation'},
        {state: 'file-upload', name: 'File Upload'},
        {state: 'wizard', name: 'Wizard'}
  
      ]
    },
    {
      state: 'material',
      name: 'Material Ui',
      type: 'sub',
      icon: 'bubble_chart',
      badge: [
        {type: 'red', value: '17'}
      ],
      children: [
        {state: 'button', name: 'Buttons'},
        {state: 'cards', name: 'Cards'},
        {state: 'grid', name: 'Grid List'},
        {state: 'lists', name: 'Lists'},
        {state: 'menu', name: 'Menu'},
        {state: 'tabs', name: 'Tabs'},
        {state: 'stepper', name: 'Stepper'},
        {state: 'expansion', name: 'Expansion Panel'},
        {state: 'chips', name: 'Chips'},
        {state: 'toolbar', name: 'Toolbar'},
        {state: 'progress-snipper', name: 'Progress snipper'},
        {state: 'progress', name: 'Progress Bar'},
        {state: 'dialog', name: 'Dialog'},
        {state: 'tooltip', name: 'Tooltip'},
        {state: 'snackbar', name: 'Snackbar'},
        {state: 'slider', name: 'Slider'},
        {state: 'slide-toggle', name: 'Slide Toggle'}
      ]
    }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
