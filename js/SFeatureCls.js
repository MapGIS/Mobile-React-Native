/**
 * @content 简单要素类对象功能组件
 * @author  2019-09-18
 */
import { NativeModules } from 'react-native';

import VectorCls from './VectorCls.js';
import DataBase from './DataBase.js';
import Rect from './Rect.js';
import Record from './Record.js';
import FClsInfo from './FClsInfo.js';
import Fields from './Fields.js';
import RecordSet from './RecordSet.js';
import GeomInfo from './GeomInfo.js';
import Geometry from './Geometry.js';
import GeoPoints from './GeoPoints.js'
import GeoVarLine from './GeoVarLine.js'
import GeoPolygon from './GeoPolygon.js'
import GeoPolygons from './GeoPolygons.js'
import GeoAnno from './GeoAnno.js'
import PntInfo from './PntInfo.js'
import LinInfo from './LinInfo.js'
import RegInfo from './RegInfo.js'
import TextAnnInfo from './TextAnnInfo.js'

let SFCLS = NativeModules.JSSFeatureCls;

/**
 * @class SFeatureCls
 * @description 简单要素类对象
 */
export default class SFeatureCls extends VectorCls {
  constructor() {
    super();
    Object.defineProperty(this, '_MGSFeatureClsId', {
      get: function() {
        return this._MGVectorClsId;
      },
      set: function(_MGSFeatureClsId) {
        this._MGVectorClsId = _MGSFeatureClsId;
        this._MGBasClsId = _MGSFeatureClsId;
      },
    });
  }

  /**
   * 构造一个新的 SFeatureCls 对象。
   * @memberOf SFeatureCls
   * @returns {Promise.<SFeatureCls>}简单要素类对象
   */
  async createObj(db) {
    try {
      var { SFeatureClsId } = await SFCLS.createObj(db._MGDataBaseId);
      var sFeatureCls = new SFeatureCls();
      sFeatureCls._MGSFeatureClsId = SFeatureClsId;
      return sFeatureCls;
    } catch (e) {
      console.error(e);
    }
  }

  async create(name, geomType, dsID, srsID, flds) {
    try {
      return await SFCLS.create(
        this._MGSFeatureClsId,
        name,
        geomType,
        dsID,
        srsID,
        flds._MGFieldsId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 打开简单要素类图层
   * @memberOf SFeatureCls
   * @param id 图层ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async openById(id) {
    try {
      return await SFCLS.openById(this._MGSFeatureClsId, id);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 打开简单要素类
   * @memberOf SFeatureCls
   * @param name 简单要素名称
   * @return {Promise} 成功：类对象ID;失败：<=0
   */
  async openByName(name) {
    try {
      return await SFCLS.open(this._MGSFeatureClsId, name);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 是否已经打开
   * @memberOf SFeatureCls
   * @return {Promise}  是否打开
   */
  async hasOpen() {
    try {
      return await SFCLS.hasOpen(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 清空数据
   * @memberOf SFeatureCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async clear() {
    try {
      return await SFCLS.clear(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 关闭类
   * @memberOf SFeatureCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async close() {
    try {
      return await SFCLS.close(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地理数据库
   * @memberOf SFeatureCls
   * @return {Promise<DataBase>} 地理数据库对象
   */
  async getGDataBase() {
    try {
      let { DataBaseId } = await SFCLS.getGDataBase(this._MGSFeatureClsId);
      var db = new DataBase();
      db._MGDataBaseId = DataBaseId;
      return db;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取简单要素类要素数目
   * @memberOf SFeatureCls
   * @return {Promise} 要素数目
   */
  async getCount() {
    try {
      return await SFCLS.getCount(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取简单要素类的矩形范围
   * @memberOf SFeatureCls
   * @return {Promise<Rect>} 矩形范围
   */
  async getRange() {
    try {
      let { RectId } = await SFCLS.getRange(this._MGSFeatureClsId);
      var rc = new Rect();
      rc._MGRectId = RectId;
      return rc;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取简单要素类的要素类类型
   * @memberOf SFeatureCls
   * @return {Promise} 要素类类型
   */
  async getClsType() {
    try {
      return await SFCLS.getClsType(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取对象几何类型
   * @memberOf SFeatureCls
   * @return {Promise}成功返回对象几何类型
   */
  async getGeomType() {
    try {
      return await SFCLS.getGeomType(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取当前简单要素类对应的要素类ID
   * @memberOf SFeatureCls
   * @return {Promise} 要素类ID
   */
  async getClsID() {
    try {
      return await SFCLS.getClsID(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取当前简单要素类的信息
   * @memberOf SFeatureCls
   * @return {Promise<FClsInfo>} 简单要素类的信息
   */
  async getClsInfo() {
    try {
      let { FClsInfoId } = await SFCLS.getClsInfo(this._MGSFeatureClsId);
      var fClsInfo = new FClsInfo();
      fClsInfo._MGFClsInfoId = FClsInfoId;
      return fClsInfo;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取当前简单要素类的属性结构
   * @memberOf SFeatureCls
   * @return {Promise<Fields>} 属性结构
   */
  async getFields() {
    try {
      let { FieldsId } = await SFCLS.getFields(this._MGSFeatureClsId);
      var fields = new Fields();
      fields._MGFieldsId = FieldsId;
      return fields;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加对象
   * @memberOf SFeatureCls
   * @param geom 对象几何信息
   * @param rcd 对象属性信息
   * @param inf 对象的图形信息
   * @return {Promise} 成功：添加的对象ID；失败:<=0
   */
  async append(geom, rcd, info) {
    try {
      return await SFCLS.append(
        this._MGSFeatureClsId,
        geom._MGGeometryId,
        rcd._MGRecordId,
        info._MGGeomInfoId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取当前要素类所有要素集合
   * @memberOf SFeatureCls
   * @return {Promise<RecordSet>}成功返回查询到的要素集合，失败返回空
   */
  async selectAllFeature() {
    try {
      let { RecordSetId } = await SFCLS.selectAllFeature(this._MGSFeatureClsId);
      var recordSet = new RecordSet();
      recordSet._MGRecordSetId = RecordSetId;
      return recordSet;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 查询
   * @memberOf SFeatureCls
   * @param def 查询条件
   * @return {Promise<RecordSet>}记录集对象
   */
  async select(def) {
    try {
      let { RecordSetId } = await SFCLS.select(
        this._MGSFeatureClsId,
        def._MGQueryDefId
      );
      var recordSet = new RecordSet();
      recordSet._MGRecordSetId = RecordSetId;
      return recordSet;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取要素矩形范围
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @return {Promise<Rect>}矩形范围
   */
  async getRect(objID) {
    try {
      let { RectId } = await SFCLS.getRect(this._MGSFeatureClsId, objID);
      var rect = new Rect();
      rect._MGRectId = RectId;
      return rect;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取对象信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param ptGeom 对象几何信息
   * @param ptRcd 对象属性信息
   * @param ptInf 对象的图形信息
   * @return {Promise}成功：>0;失败：<=0
   */
  async get(objID, geom, rcd, info) {
    try {
      return await SFCLS.get(
        this._MGSFeatureClsId,
        objID,
        geom._MGGeometryId,
        rcd._MGRecordId,
        info._MGGeomInfoId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取对象的属性信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @return {Promise<Record>}对象的属性信息
   */
  async getAtt(objID) {
    try {
      let { RecordId } = await SFCLS.getAtt(this._MGSFeatureClsId, objID);
      var record = new Record();
      record._MGRecordId = RecordId;
      return record;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取对象几何信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @return {Promise<Geometry>}对象几何信息
   */
  async getGeometry(objID) {
    try {
      let { GeometryId,GeometryType } = await SFCLS.getGeometry(
        this._MGSFeatureClsId,
        objID
      );
      let geometry = null;
      switch(GeometryType)
      {
        case 2:
            geometry = new GeoPoints();
            geometry._MGGeometryId = GeometryId;
          break;
          case 12:
            geometry = new GeoVarLine();
            geometry._MGGeometryId = GeometryId;
          break;
          case 14:
            geometry = new GeoPolygon();
            geometry._MGGeometryId = GeometryId;
          break;
          case 15:
            geometry = new GeoPolygons();
            geometry._MGGeometryId = GeometryId;
          break;
          case 17:
            geometry = new GeoAnno();
            geometry._MGGeometryId = GeometryId;
            break;
          default:
            break;
      }
      return geometry;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取对象图形信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @return {Promise<GeomInfo>}对象图形信息
   */
  async getInfo(objID) {
    try {
      let { GeomInfoId,GeometryType} = await SFCLS.getInfo(this._MGSFeatureClsId, objID);
      let geomInfo = null;
      switch(GeometryType)
      {
        case 2:
            geomInfo = new PntInfo();
            geomInfo._MGGeomInfoId = GeomInfoId;
          break;
          case 12:
            geomInfo = new LinInfo();
            geomInfo._MGGeomInfoId = GeomInfoId;
          break;
          case 14:
            geomInfo = new RegInfo();
            geomInfo._MGGeomInfoId = GeomInfoId;
          break;
          case 15:
            geomInfo = new RegInfo();
            geomInfo._MGGeomInfoId = GeomInfoId;
          break;
          case 17:
            geomInfo = new TextAnnInfo();
            geomInfo._MGGeomInfoId = GeomInfoId;
            break;
          default:
            break;
      }
      return geomInfo;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取要素几何类型
   * @memberOf SFeatureCls
   * @param objID 要素ID
   * @return{Promise}几何类型
   */
  async getGeometryType(objID) {
    try {
      return await SFCLS.getGeometryType(this._MGSFeatureClsId, objID);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取类名称
   * @memberOf SFeatureCls
   * @return{Promise}类名称
   */
  async getClsName() {
    try {
      return await SFCLS.getClsName(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置类名称
   * @memberOf SFeatureCls
   * @param newVal 类名称
   */
  async setClsName(newVal) {
    try {
      await SFCLS.setClsName(this._MGSFeatureClsId, newVal);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取类URL
   * @memberOf SFeatureCls
   * @return {Promise} URL串
   */
  async getURL() {
    try {
      return await SFCLS.getURL(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取类别名
   * @memberOf SFeatureCls
   * @return {Promise}类别名
   */
  async getAliasName() {
    try {
      return await SFCLS.getAliasName(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置类别名
   * @memberOf SFeatureCls
   * @param newVal 类别名
   * @return {Promise}成功：>0;失败：<=0
   */
  async setAliasName(newVal) {
    try {
      return await SFCLS.setAliasName(this._MGSFeatureClsId, newVal);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 取空间参考系ID
   * @memberOf SFeatureCls
   * @return {Promise}空间参考系ID
   */
  async getSrID() {
    try {
      return await SFCLS.getSrID(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置要素数据集ID
   * @memberOf SFeatureCls
   * @param newVal 要素数据集ID
   * @return {Promise}成功：>0;失败：<=0
   */
  async setSrID(newVal) {
    try {
      return await SFCLS.setSrID(this._MGSFeatureClsId, newVal);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取X方向符号比
   * @memberOf SFeatureCls
   * @return {Promise} X方向符号比
   */
  async getScaleX() {
    try {
      return await SFCLS.getScaleX(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取Y方向符号比
   * @memberOf SFeatureCls
   * @return {Promise} Y方向符号比
   */
  async getScaleY() {
    try {
      return await SFCLS.getScaleY(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置X,Y方向符号比
   * @memberOf SFeatureCls
   * @param scale 符号比
   * @return {Promise} 成功：>0;失败：<=0
   */
  async setScaleXY(scaleX, scaleY) {
    try {
      return await SFCLS.setScaleXY(this._MGSFeatureClsId, scaleX, scaleY);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 删除一个简单要素类
   * @memberOf SFeatureCls
   * @param objID 简单要素类ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async deleteByID(objID) {
    try {
      return await SFCLS.deleteByID(this._MGSFeatureClsId, objID);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 删除一组简单要素类
   * @memberOf SFeatureCls
   * @param objIDs 一组简单要素类ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async deleteByIDs(objIDArray) {
    try {
      return await SFCLS.deleteByIDs(this._MGSFeatureClsId, objIDArray);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 更新对象
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param geom 对象几何信息
   * @param rcd 对象属性信息
   * @param inf 对象的图形信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async update(objID, geom, rcd, info) {
    try {
      return await SFCLS.update(
        this._MGSFeatureClsId,
        objID,
        geom._MGGeometryId,
        rcd._MGRecordId,
        info._MGGeomInfoId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 更新对象的属性
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param rcd 对象属性信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateAtt(objID, rcd) {
    try {
      return await SFCLS.updateAtt(
        this._MGSFeatureClsId,
        objID,
        rcd._MGRecordId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 更新几何图形信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param geom 几何对象
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateGeometry(objID, geom) {
    try {
      return await SFCLS.updateGeometry(
        this._MGSFeatureClsId,
        objID,
        geom._MGGeometryId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 更新对象图形信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param inf 对象的图形信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateInfo(objID, info) {
    try {
      return await SFCLS.updateInfo(
        this._MGSFeatureClsId,
        objID,
        info._MGGeomInfoId
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 根据类名删除类
   * @memberOf SFeatureCls
   * @param db 地理数据库对象
   * @param clsName 类名
   * @return {Promise} 成功：>0;失败：<=0
   */
  async removeByName(db, clsName) {
    try {
      return await SFCLS.removeByName(
        this._MGSFeatureClsId,
        db._MGDataBaseId,
        clsName
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 根据类ID删除类
   * @memberOf SFeatureCls
   * @param db 地理数据库对象
   * @param clsID 类ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async removeByID(db, clsID) {
    try {
      return await SFCLS.removeByID(this._MGSFeatureClsId, db._MGDataBaseId, clsID);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 计算总平面(实地)面积(仅支持区要素)
   * @memberOf SFeatureCls
   * @param bRealArea 是否是实地面积
   * @return {Promise} 成功返回总面积
   */
  async calTotalArea(bRealArea) {
    try {
      return await SFCLS.calTotalArea(this._MGSFeatureClsId, bRealArea);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 计算总平面(实地)长度(支持线、区要素)
   * @memberOf SFeatureCls
   * @param bRealLen 实地长度的标志
   * @return {Promise} 成功返回总长度
   */
  async calTotalLength(bRealLen) {
    try {
      return await SFCLS.calTotalLength(this._MGSFeatureClsId, bRealLen);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 计算平面(实地)面积并保存到字段(仅支持区要素)
   * @memberOf SFeatureCls
   * @param bRealArea 是否是实地面积
   * @param fldIndex 保存的字段索引号，即保存到第fldIndex个字段中
   * @return {Promise} 成功：>0，失败：<=0
   */
  async areaToField(bRealArea, fldIndex) {
    try {
      return await SFCLS.areaToField(
        this._MGSFeatureClsId,
        bRealArea,
        fldIndex
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 计算平面(实地)长度并保存到字段(支持线、区要素)
   * @memberOf SFeatureCls
   * @param bRealLen 是否计算实际长度
   * @param fldI 保存数据的属性字段索引号
   * @return {Promise} 成功：>0，失败：<=0
   */
  async lengthToField(bRealLen, fldIndex) {
    try {
      return await SFCLS.lengthToField(
        this._MGSFeatureClsId,
        bRealLen,
        fldIndex
      );
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 注册同步能力
   * @memberOf SFeatureCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async registerSyncEnabled() {
    try {
      return await SFCLS.registerSyncEnabled(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 是否具有同步能力
   * @memberOf SFeatureCls
   * @return {Promise} 是否具有同步能力
   */
  async isSyncEnabled() {
    try {
      return await SFCLS.isSyncEnabled(this._MGSFeatureClsId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 更新要素类
   * @memberOf SFeatureCls
   * @param fields 属性信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateFields(fields) {
    try {
      return await SFCLS.updateFields(
        this._MGSFeatureClsId,
        fields._MGFieldsId
      );
    } catch (e) {
      console.error(e);
    }
  }
}
