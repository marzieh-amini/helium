import * as Yup from 'yup';
export const articleSchema = Yup.object().shape({
  authorId: Yup.string().required("لطفا نام نویسنده مقاله را وارد کنید. "),
  title: Yup.string().required(" لطفا عنوان مقاله را وارد کنید. "),
  description: Yup.string().required("لطفا متن مقاله را وارد کنید. "),
  articleImage: Yup.string().url("ادرس تصویر صحیح نیست").required("لطفا ادرس تصویر مقاله را وارد کنید. "),
  createDate: Yup.string().required("لطفا زمان ایجاد مقاله را انتخاب کنید. "),
  studyTime: Yup.number().required("لطفا مدت زمان مطالعه مقاله را وارد کنید. "),
  tags: Yup.number().required("لطفا برچسب مقاله را انتخاب کنید. "),
});
