import postSize from './post_size.js';
import interactionModal from './interaction_modals.js';
import registerFormValidation from './registerValidationForm.js';
import counterRender from './get_counters.js';
import getMessages from './messages/get_messages.js'
import getContentPage from './get_page_content.js'
import newUser from './new_user.js'
import { userLogin } from './user_login.js';

interactionModal();
registerFormValidation();
counterRender();
getMessages()
getContentPage();
newUser()
userLogin()


// alert(postSize('Это новый пост'));
