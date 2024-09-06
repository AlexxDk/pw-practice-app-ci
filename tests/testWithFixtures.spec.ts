import  {test } from "../test-option";
import {faker} from '@faker-js/faker'

test('parametrized methods', async ({ pageManager }) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFromWithCredentialsAndSelectOption('test@gmail.com', 'Welcome1', "Option 2")
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)


})
