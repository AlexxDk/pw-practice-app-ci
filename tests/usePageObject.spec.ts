import test, { expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import {faker} from '@faker-js/faker'


test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
});

test('navigate to form page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()

})

test('parametrized methods', async ({ page }) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFromWithCredentialsAndSelectOption('test@gmail.com', 'Welcome1', "Option 2")
    await page.screenshot({path: 'screenshots/formLayoutsPage.png'})
    const buffer = await page.screenshot()
    // console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
    await page.locator("nb-card", { hasText: "Inline Form", }).screenshot({path: 'screenshots/inLineForm.png'})

//     // await pm.navigateTo().datepickerPage()
//     // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
//     // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)
})
