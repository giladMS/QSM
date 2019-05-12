import {eFormTypes} from './forms.models';

export const langOptions: string[] = [
  'English',
  'French',
  'German',
];

export const formTypeOptions = [
  { key: eFormTypes.Template, val: 'Template Form'},
  { key: eFormTypes.Reactive, val: 'Reactive Form'},
  { key: eFormTypes.Material, val: 'Third Party Form - Angular material'}
  ];
