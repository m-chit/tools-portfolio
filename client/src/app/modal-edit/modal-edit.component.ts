import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {NgForm} from '@angular/forms';
import {ToolsService} from '../services/tools.service';
import {Http} from '@angular/http';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-modal-edit',
    templateUrl: './modal-edit.component.html',
    styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {
    @ViewChild('f') newTool: NgForm;
    @Input() tool: ToolModel;
    @Input() toolCategoryNames: string[];
    @Output() toolEdited = new EventEmitter<ToolModel>();
    toolToEdit: ToolModel;
    newCategory: string;
    hidden = true;
    text: string;

    constructor(private toolsService: ToolsService, private alertService: AlertService) {
    }

    ngOnInit() {
        this.toolToEdit = this.tool;
    }

    showModalEdit() {
        this.toolsService.getTool(this.tool._id).subscribe(
            response => this.toolToEdit = response.json(),
            error => console.log(error)
        );
        this.hidden = false;
    }

    hideModal() {
        this.hidden = true;
    }

    addTags() {
        if (this.newTool.value.tag !== '' && !this.toolToEdit.tags.includes(this.newTool.value.tag)) {
            this.toolToEdit.tags = [...this.toolToEdit.tags, this.newTool.value.tag];
        }
    }

    removeTag(tagToRemove: string) {
        this.toolToEdit.tags = this.toolToEdit.tags.filter(tag => tag !== tagToRemove);
    }

    hasNewCategory() {
        return !(this.newTool.value.category.length !== 0 && this.newTool.value.category !== 'Add category...');
    }

    isFormCorrect() {
        return this.newTool.value.name.length !== 0 &&
            this.newTool.value.details.length !== 0 &&
            this.toolToEdit.category.length !== 0;
    }

    onSubmit() {
        if (this.hasNewCategory()) {
            this.toolToEdit.category = this.newCategory;
        }

        if (this.isFormCorrect()) {
            this.toolsService.editTool(this.toolToEdit, this.tool._id).subscribe(
                response => {
                    this.tool = this.toolToEdit;
                    this.toolEdited.emit(this.tool);
                    this.alertService.showModal('Edited tool!');
                    this.hideModal();


                }
            );
        } else {
            this.alertService.showModal('Tool was not edited, please fill name, details and category fields!');
        }
    }
}
