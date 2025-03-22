import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {CONTROL_DESCRIPTION} from '../../../shared/constant/control.constant';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';

@Component({
    selector: 'app-menu-ops',
    templateUrl: 'menu.ops.component.html',
    standalone: false
})
export class MenuOpsComponent extends OpsAbstract implements OnInit {

    public permissions: any = APP_NAVIGATION.permissions;
    public iconTypeOptions: Map<string, string>;
    public iconThemeOptions: Map<string, string>;
    public menuTypeOptions: Map<string, number>;

    constructor(
        public override fb: FormBuilder,
        public override activatedRoute: ActivatedRoute,
        public override crudService: CRUDService,
        public override appCtrlService: AppControlService,
        public override alertService: AlertService,
    ) {
        super(fb, activatedRoute, crudService, appCtrlService, alertService);
    }

    ngOnInit(): void {
        super.init();
        this.crudForm = this.fb.group({
            path: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.path),
            icon: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.icon),
            iconType: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectOne, this.object?.iconType),
            iconTheme: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectOne, this.object?.iconTheme),
            rootMenuId: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.numeric, this.object?.rootMenuId),
            displayPosition: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.numeric, this.object?.displayPosition),
            menuType: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectOne, this.object?.menuType),
        });
        this.iconTypeOptions = new Map<string, string>();
        this.iconTypeOptions.set('nzIcon', 'nzIcon');
        this.iconTypeOptions.set('fontawesome', 'fontawesome');

        this.iconThemeOptions = new Map<string, string>();
        this.iconThemeOptions.set('outline', 'outline');

        this.menuTypeOptions = new Map<string, number>();
        this.menuTypeOptions.set('parent', 1);
        this.menuTypeOptions.set('child', 2);
    }

    override customUpdateValidations(): boolean {
        return true;
    }

    override customCreateValidations(): boolean {
        return true;
    }

    override customPostSuccessOps(): void {
    }

    override customPostFailureOps(): void {
    }

}
