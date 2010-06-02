//HELPER FUNCTIONS AND STRUCTURES

Cassandra_login_args = function(args){
this.auth_request = new AuthenticationRequest()
if( args != null ){if (null != args.auth_request)
this.auth_request = args.auth_request
}}
Cassandra_login_args.prototype = {}
Cassandra_login_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.auth_request = new AuthenticationRequest()
this.auth_request.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_login_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_login_args')
if (null != this.auth_request) {
output.writeFieldBegin('auth_request', Thrift.Type.STRUCT, 1)
this.auth_request.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_login_result = function(args){
this.success = 0
this.authnx = new AuthenticationException()
this.authzx = new AuthorizationException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.authnx)
this.authnx = args.authnx
if (null != args.authzx)
this.authzx = args.authzx
}}
Cassandra_login_result.prototype = {}
Cassandra_login_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.authnx = new AuthenticationException()
this.authnx.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.authzx = new AuthorizationException()
this.authzx.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_login_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_login_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.I32, 0)
output.writeI32(this.success)
output.writeFieldEnd()
}
if (null != this.authnx) {
output.writeFieldBegin('authnx', Thrift.Type.STRUCT, 1)
this.authnx.write(output)
output.writeFieldEnd()
}
if (null != this.authzx) {
output.writeFieldBegin('authzx', Thrift.Type.STRUCT, 2)
this.authzx.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_set_keyspace_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_set_keyspace_args.prototype = {}
Cassandra_set_keyspace_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_set_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_set_keyspace_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_set_keyspace_result = function(args){
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
}}
Cassandra_set_keyspace_result.prototype = {}
Cassandra_set_keyspace_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_set_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_set_keyspace_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_args = function(args){
this.key = ''
this.column_path = new ColumnPath()
this.consistency_level = 1
if( args != null ){if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_args.prototype = {}
Cassandra_get_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_args')
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 1)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 2)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 3)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_result = function(args){
this.success = new ColumnOrSuperColumn()
this.ire = new InvalidRequestException()
this.nfe = new NotFoundException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.nfe)
this.nfe = args.nfe
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_result.prototype = {}
Cassandra_get_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRUCT) {
this.success = new ColumnOrSuperColumn()
this.success.read(input)
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRUCT, 0)
this.success.write(output)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 2)
this.nfe.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 3)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 4)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_slice_args = function(args){
this.key = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_slice_args.prototype = {}
Cassandra_get_slice_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_slice_args')
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 1)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_slice_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_slice_result.prototype = {}
Cassandra_get_slice_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size51 = 0
var rtmp3
this.success = []
var _etype54 = 0
rtmp3 = input.readListBegin()
_etype54 = rtmp3.etype
_size51 = rtmp3.size
for (var _i55 = 0; _i55 < _size51; ++_i55)
{
var elem56 = null
elem56 = new ColumnOrSuperColumn()
elem56.read(input)
this.success.push(elem56)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter57 in this.success)
{
iter57=this.success[iter57]
iter57.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_slice_args = function(args){
this.keys = []
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.keys)
this.keys = args.keys
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_slice_args.prototype = {}
Cassandra_multiget_slice_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.LIST) {
{
var _size58 = 0
var rtmp3
this.keys = []
var _etype61 = 0
rtmp3 = input.readListBegin()
_etype61 = rtmp3.etype
_size58 = rtmp3.size
for (var _i62 = 0; _i62 < _size58; ++_i62)
{
var elem63 = null
var rtmp = input.readString()
elem63 = rtmp.value
this.keys.push(elem63)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_slice_args')
if (null != this.keys) {
output.writeFieldBegin('keys', Thrift.Type.LIST, 1)
{
output.writeListBegin(Thrift.Type.STRING, this.keys.length)
{
for(var iter64 in this.keys)
{
iter64=this.keys[iter64]
output.writeString(iter64)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_slice_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_slice_result.prototype = {}
Cassandra_multiget_slice_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size65 = 0
var rtmp3
this.success = {}
var _ktype66 = 0
var _vtype67 = 0
rtmp3 = input.readMapBegin()
_ktype66= rtmp3.ktype
_vtype67= rtmp3.vtype
_size65= rtmp3.size
for (var _i69 = 0; _i69 < _size65; ++_i69)
{
key70 = ''
val71 = []
var rtmp = input.readString()
key70 = rtmp.value
{
var _size72 = 0
var rtmp3
val71 = []
var _etype75 = 0
rtmp3 = input.readListBegin()
_etype75 = rtmp3.etype
_size72 = rtmp3.size
for (var _i76 = 0; _i76 < _size72; ++_i76)
{
var elem77 = null
elem77 = new ColumnOrSuperColumn()
elem77.read(input)
val71.push(elem77)
}
input.readListEnd()
}
this.success[key70] = val71
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, this.success.length)
{
for(var kiter78 in this.success){
var viter79 = this.success[kiter78]
output.writeString(kiter78)
{
output.writeListBegin(Thrift.Type.STRUCT, viter79.length)
{
for(var iter80 in viter79)
{
iter80=viter79[iter80]
iter80.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_count_args = function(args){
this.key = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_count_args.prototype = {}
Cassandra_get_count_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_count_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_count_args')
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 1)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_count_result = function(args){
this.success = 0
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_count_result.prototype = {}
Cassandra_get_count_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_count_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_count_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.I32, 0)
output.writeI32(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_count_args = function(args){
this.keyspace = ''
this.keys = []
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.keys)
this.keys = args.keys
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_count_args.prototype = {}
Cassandra_multiget_count_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.LIST) {
{
var _size81 = 0
var rtmp3
this.keys = []
var _etype84 = 0
rtmp3 = input.readListBegin()
_etype84 = rtmp3.etype
_size81 = rtmp3.size
for (var _i85 = 0; _i85 < _size81; ++_i85)
{
var elem86 = null
var rtmp = input.readString()
elem86 = rtmp.value
this.keys.push(elem86)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_count_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_count_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.keys) {
output.writeFieldBegin('keys', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRING, this.keys.length)
{
for(var iter87 in this.keys)
{
iter87=this.keys[iter87]
output.writeString(iter87)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 3)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 4)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 5)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_count_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_count_result.prototype = {}
Cassandra_multiget_count_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size88 = 0
var rtmp3
this.success = {}
var _ktype89 = 0
var _vtype90 = 0
rtmp3 = input.readMapBegin()
_ktype89= rtmp3.ktype
_vtype90= rtmp3.vtype
_size88= rtmp3.size
for (var _i92 = 0; _i92 < _size88; ++_i92)
{
key93 = ''
val94 = 0
var rtmp = input.readString()
key93 = rtmp.value
var rtmp = input.readI32()
val94 = rtmp.value
this.success[key93] = val94
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_count_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_count_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I32, this.success.length)
{
for(var kiter95 in this.success){
var viter96 = this.success[kiter95]
output.writeString(kiter95)
output.writeI32(viter96)
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_range_slices_args = function(args){
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.range = new KeyRange()
this.consistency_level = 1
if( args != null ){if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.range)
this.range = args.range
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_range_slices_args.prototype = {}
Cassandra_get_range_slices_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.range = new KeyRange()
this.range.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_range_slices_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slices_args')
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 1)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 2)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.range) {
output.writeFieldBegin('range', Thrift.Type.STRUCT, 3)
this.range.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_range_slices_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_range_slices_result.prototype = {}
Cassandra_get_range_slices_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size97 = 0
var rtmp3
this.success = []
var _etype100 = 0
rtmp3 = input.readListBegin()
_etype100 = rtmp3.etype
_size97 = rtmp3.size
for (var _i101 = 0; _i101 < _size97; ++_i101)
{
var elem102 = null
elem102 = new KeySlice()
elem102.read(input)
this.success.push(elem102)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_range_slices_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slices_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter103 in this.success)
{
iter103=this.success[iter103]
iter103.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_insert_args = function(args){
this.key = ''
this.column_parent = new ColumnParent()
this.column = new Column()
this.consistency_level = 1
if( args != null ){if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.column)
this.column = args.column
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_insert_args.prototype = {}
Cassandra_insert_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column = new Column()
this.column.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_insert_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_insert_args')
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 1)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.column) {
output.writeFieldBegin('column', Thrift.Type.STRUCT, 3)
this.column.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_insert_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_insert_result.prototype = {}
Cassandra_insert_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_insert_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_insert_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_remove_args = function(args){
this.key = ''
this.column_path = new ColumnPath()
this.clock = new Clock()
this.consistency_level = 1
if( args != null ){if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.clock)
this.clock = args.clock
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_remove_args.prototype = {}
Cassandra_remove_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.clock = new Clock()
this.clock.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_remove_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_remove_args')
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 1)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 2)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.clock) {
output.writeFieldBegin('clock', Thrift.Type.STRUCT, 3)
this.clock.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_remove_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_remove_result.prototype = {}
Cassandra_remove_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_remove_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_remove_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_batch_mutate_args = function(args){
this.mutation_map = {}
this.consistency_level = 1
if( args != null ){if (null != args.mutation_map)
this.mutation_map = args.mutation_map
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_batch_mutate_args.prototype = {}
Cassandra_batch_mutate_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.MAP) {
{
var _size104 = 0
var rtmp3
this.mutation_map = {}
var _ktype105 = 0
var _vtype106 = 0
rtmp3 = input.readMapBegin()
_ktype105= rtmp3.ktype
_vtype106= rtmp3.vtype
_size104= rtmp3.size
for (var _i108 = 0; _i108 < _size104; ++_i108)
{
key109 = ''
val110 = {}
var rtmp = input.readString()
key109 = rtmp.value
{
var _size111 = 0
var rtmp3
val110 = {}
var _ktype112 = 0
var _vtype113 = 0
rtmp3 = input.readMapBegin()
_ktype112= rtmp3.ktype
_vtype113= rtmp3.vtype
_size111= rtmp3.size
for (var _i115 = 0; _i115 < _size111; ++_i115)
{
key116 = ''
val117 = []
var rtmp = input.readString()
key116 = rtmp.value
{
var _size118 = 0
var rtmp3
val117 = []
var _etype121 = 0
rtmp3 = input.readListBegin()
_etype121 = rtmp3.etype
_size118 = rtmp3.size
for (var _i122 = 0; _i122 < _size118; ++_i122)
{
var elem123 = null
elem123 = new Mutation()
elem123.read(input)
val117.push(elem123)
}
input.readListEnd()
}
val110[key116] = val117
}
input.readMapEnd()
}
this.mutation_map[key109] = val110
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_batch_mutate_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_mutate_args')
if (null != this.mutation_map) {
output.writeFieldBegin('mutation_map', Thrift.Type.MAP, 1)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, this.mutation_map.length)
{
for(var kiter124 in this.mutation_map){
var viter125 = this.mutation_map[kiter124]
output.writeString(kiter124)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, viter125.length)
{
for(var kiter126 in viter125){
var viter127 = viter125[kiter126]
output.writeString(kiter126)
{
output.writeListBegin(Thrift.Type.STRUCT, viter127.length)
{
for(var iter128 in viter127)
{
iter128=viter127[iter128]
iter128.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 2)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_batch_mutate_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_batch_mutate_result.prototype = {}
Cassandra_batch_mutate_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_batch_mutate_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_mutate_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_truncate_args = function(args){
this.keyspace = ''
this.cfname = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.cfname)
this.cfname = args.cfname
}}
Cassandra_truncate_args.prototype = {}
Cassandra_truncate_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.cfname = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_truncate_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_truncate_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.cfname) {
output.writeFieldBegin('cfname', Thrift.Type.STRING, 2)
output.writeString(this.cfname)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_truncate_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
}}
Cassandra_truncate_result.prototype = {}
Cassandra_truncate_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_truncate_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_truncate_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_check_schema_agreement_args = function(args){
}
Cassandra_check_schema_agreement_args.prototype = {}
Cassandra_check_schema_agreement_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_check_schema_agreement_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_check_schema_agreement_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_check_schema_agreement_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_check_schema_agreement_result.prototype = {}
Cassandra_check_schema_agreement_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size129 = 0
var rtmp3
this.success = {}
var _ktype130 = 0
var _vtype131 = 0
rtmp3 = input.readMapBegin()
_ktype130= rtmp3.ktype
_vtype131= rtmp3.vtype
_size129= rtmp3.size
for (var _i133 = 0; _i133 < _size129; ++_i133)
{
key134 = ''
val135 = []
var rtmp = input.readString()
key134 = rtmp.value
{
var _size136 = 0
var rtmp3
val135 = []
var _etype139 = 0
rtmp3 = input.readListBegin()
_etype139 = rtmp3.etype
_size136 = rtmp3.size
for (var _i140 = 0; _i140 < _size136; ++_i140)
{
var elem141 = null
var rtmp = input.readString()
elem141 = rtmp.value
val135.push(elem141)
}
input.readListEnd()
}
this.success[key134] = val135
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_check_schema_agreement_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_check_schema_agreement_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, this.success.length)
{
for(var kiter142 in this.success){
var viter143 = this.success[kiter142]
output.writeString(kiter142)
{
output.writeListBegin(Thrift.Type.STRING, viter143.length)
{
for(var iter144 in viter143)
{
iter144=viter143[iter144]
output.writeString(iter144)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspaces_args = function(args){
}
Cassandra_describe_keyspaces_args.prototype = {}
Cassandra_describe_keyspaces_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspaces_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspaces_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspaces_result = function(args){
this.success = []
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_keyspaces_result.prototype = {}
Cassandra_describe_keyspaces_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.SET) {
{
var _size145 = 0
var rtmp3
this.success = []
var _etype148 = 0
rtmp3 = input.readSetBegin()
_etype148= rtmp3.etype
_size145 = rtmp3.size
for (var _i149 = 0; _i149 < _size145; ++_i149)
{
var elem150 = null
var rtmp = input.readString()
elem150 = rtmp.value
this.success.push(elem150)
}
input.readSetEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspaces_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspaces_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.SET, 0)
{
output.writeSetBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter151 in this.success)
{
iter151=this.success[iter151]
output.writeString(iter151)
}
}
output.writeSetEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_cluster_name_args = function(args){
}
Cassandra_describe_cluster_name_args.prototype = {}
Cassandra_describe_cluster_name_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_cluster_name_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_cluster_name_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_cluster_name_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_cluster_name_result.prototype = {}
Cassandra_describe_cluster_name_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_cluster_name_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_cluster_name_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_version_args = function(args){
}
Cassandra_describe_version_args.prototype = {}
Cassandra_describe_version_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_version_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_version_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_version_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_version_result.prototype = {}
Cassandra_describe_version_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_version_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_version_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_ring_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_describe_ring_args.prototype = {}
Cassandra_describe_ring_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_ring_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_ring_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_ring_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_describe_ring_result.prototype = {}
Cassandra_describe_ring_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size152 = 0
var rtmp3
this.success = []
var _etype155 = 0
rtmp3 = input.readListBegin()
_etype155 = rtmp3.etype
_size152 = rtmp3.size
for (var _i156 = 0; _i156 < _size152; ++_i156)
{
var elem157 = null
elem157 = new TokenRange()
elem157.read(input)
this.success.push(elem157)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_ring_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_ring_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter158 in this.success)
{
iter158=this.success[iter158]
iter158.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspace_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_describe_keyspace_args.prototype = {}
Cassandra_describe_keyspace_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspace_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspace_result = function(args){
this.success = {}
this.nfe = new NotFoundException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.nfe)
this.nfe = args.nfe
}}
Cassandra_describe_keyspace_result.prototype = {}
Cassandra_describe_keyspace_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size159 = 0
var rtmp3
this.success = {}
var _ktype160 = 0
var _vtype161 = 0
rtmp3 = input.readMapBegin()
_ktype160= rtmp3.ktype
_vtype161= rtmp3.vtype
_size159= rtmp3.size
for (var _i163 = 0; _i163 < _size159; ++_i163)
{
key164 = ''
val165 = {}
var rtmp = input.readString()
key164 = rtmp.value
{
var _size166 = 0
var rtmp3
val165 = {}
var _ktype167 = 0
var _vtype168 = 0
rtmp3 = input.readMapBegin()
_ktype167= rtmp3.ktype
_vtype168= rtmp3.vtype
_size166= rtmp3.size
for (var _i170 = 0; _i170 < _size166; ++_i170)
{
key171 = ''
val172 = ''
var rtmp = input.readString()
key171 = rtmp.value
var rtmp = input.readString()
val172 = rtmp.value
val165[key171] = val172
}
input.readMapEnd()
}
this.success[key164] = val165
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspace_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, this.success.length)
{
for(var kiter173 in this.success){
var viter174 = this.success[kiter173]
output.writeString(kiter173)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, viter174.length)
{
for(var kiter175 in viter174){
var viter176 = viter174[kiter175]
output.writeString(kiter175)
output.writeString(viter176)
}
}
output.writeMapEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 1)
this.nfe.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_splits_args = function(args){
this.keyspace = ''
this.cfName = ''
this.start_token = ''
this.end_token = ''
this.keys_per_split = 0
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.cfName)
this.cfName = args.cfName
if (null != args.start_token)
this.start_token = args.start_token
if (null != args.end_token)
this.end_token = args.end_token
if (null != args.keys_per_split)
this.keys_per_split = args.keys_per_split
}}
Cassandra_describe_splits_args.prototype = {}
Cassandra_describe_splits_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.cfName = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.end_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.keys_per_split = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_splits_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_splits_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.cfName) {
output.writeFieldBegin('cfName', Thrift.Type.STRING, 2)
output.writeString(this.cfName)
output.writeFieldEnd()
}
if (null != this.start_token) {
output.writeFieldBegin('start_token', Thrift.Type.STRING, 3)
output.writeString(this.start_token)
output.writeFieldEnd()
}
if (null != this.end_token) {
output.writeFieldBegin('end_token', Thrift.Type.STRING, 4)
output.writeString(this.end_token)
output.writeFieldEnd()
}
if (null != this.keys_per_split) {
output.writeFieldBegin('keys_per_split', Thrift.Type.I32, 5)
output.writeI32(this.keys_per_split)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_splits_result = function(args){
this.success = []
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_splits_result.prototype = {}
Cassandra_describe_splits_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size177 = 0
var rtmp3
this.success = []
var _etype180 = 0
rtmp3 = input.readListBegin()
_etype180 = rtmp3.etype
_size177 = rtmp3.size
for (var _i181 = 0; _i181 < _size177; ++_i181)
{
var elem182 = null
var rtmp = input.readString()
elem182 = rtmp.value
this.success.push(elem182)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_splits_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_splits_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter183 in this.success)
{
iter183=this.success[iter183]
output.writeString(iter183)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_add_column_family_args = function(args){
this.cf_def = new CfDef()
if( args != null ){if (null != args.cf_def)
this.cf_def = args.cf_def
}}
Cassandra_system_add_column_family_args.prototype = {}
Cassandra_system_add_column_family_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.cf_def = new CfDef()
this.cf_def.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_add_column_family_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_add_column_family_args')
if (null != this.cf_def) {
output.writeFieldBegin('cf_def', Thrift.Type.STRUCT, 1)
this.cf_def.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_add_column_family_result = function(args){
this.success = ''
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_system_add_column_family_result.prototype = {}
Cassandra_system_add_column_family_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_add_column_family_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_add_column_family_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_drop_column_family_args = function(args){
this.keyspace = ''
this.column_family = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.column_family)
this.column_family = args.column_family
}}
Cassandra_system_drop_column_family_args.prototype = {}
Cassandra_system_drop_column_family_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.column_family = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_drop_column_family_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_drop_column_family_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.column_family) {
output.writeFieldBegin('column_family', Thrift.Type.STRING, 2)
output.writeString(this.column_family)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_drop_column_family_result = function(args){
this.success = ''
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_system_drop_column_family_result.prototype = {}
Cassandra_system_drop_column_family_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_drop_column_family_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_drop_column_family_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_rename_column_family_args = function(args){
this.keyspace = ''
this.old_name = ''
this.new_name = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.old_name)
this.old_name = args.old_name
if (null != args.new_name)
this.new_name = args.new_name
}}
Cassandra_system_rename_column_family_args.prototype = {}
Cassandra_system_rename_column_family_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.old_name = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.new_name = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_rename_column_family_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_rename_column_family_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.old_name) {
output.writeFieldBegin('old_name', Thrift.Type.STRING, 2)
output.writeString(this.old_name)
output.writeFieldEnd()
}
if (null != this.new_name) {
output.writeFieldBegin('new_name', Thrift.Type.STRING, 3)
output.writeString(this.new_name)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_rename_column_family_result = function(args){
this.success = ''
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_system_rename_column_family_result.prototype = {}
Cassandra_system_rename_column_family_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_rename_column_family_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_rename_column_family_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_add_keyspace_args = function(args){
this.ks_def = new KsDef()
if( args != null ){if (null != args.ks_def)
this.ks_def = args.ks_def
}}
Cassandra_system_add_keyspace_args.prototype = {}
Cassandra_system_add_keyspace_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ks_def = new KsDef()
this.ks_def.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_add_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_add_keyspace_args')
if (null != this.ks_def) {
output.writeFieldBegin('ks_def', Thrift.Type.STRUCT, 1)
this.ks_def.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_add_keyspace_result = function(args){
this.success = ''
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_system_add_keyspace_result.prototype = {}
Cassandra_system_add_keyspace_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_add_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_add_keyspace_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_drop_keyspace_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_system_drop_keyspace_args.prototype = {}
Cassandra_system_drop_keyspace_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_drop_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_drop_keyspace_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_drop_keyspace_result = function(args){
this.success = ''
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_system_drop_keyspace_result.prototype = {}
Cassandra_system_drop_keyspace_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_drop_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_drop_keyspace_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_rename_keyspace_args = function(args){
this.old_name = ''
this.new_name = ''
if( args != null ){if (null != args.old_name)
this.old_name = args.old_name
if (null != args.new_name)
this.new_name = args.new_name
}}
Cassandra_system_rename_keyspace_args.prototype = {}
Cassandra_system_rename_keyspace_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.old_name = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.new_name = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_rename_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_rename_keyspace_args')
if (null != this.old_name) {
output.writeFieldBegin('old_name', Thrift.Type.STRING, 1)
output.writeString(this.old_name)
output.writeFieldEnd()
}
if (null != this.new_name) {
output.writeFieldBegin('new_name', Thrift.Type.STRING, 2)
output.writeString(this.new_name)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_system_rename_keyspace_result = function(args){
this.success = ''
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_system_rename_keyspace_result.prototype = {}
Cassandra_system_rename_keyspace_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_system_rename_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_system_rename_keyspace_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

CassandraClient = function(input, output) {
  this.input  = input
  this.output = null == output ? input : output
  this.seqid  = 0
}
CassandraClient.prototype = {}
CassandraClient.prototype.login = function(auth_request){
this.send_login(auth_request)
return this.recv_login()
}

CassandraClient.prototype.send_login = function(auth_request){
this.output.writeMessageBegin('login', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_login_args()
args.auth_request = auth_request
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_login = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_login_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.authnx) {
  throw result.authnx
}
if (null != result.authzx) {
  throw result.authzx
}
throw "login failed: unknown result"
}
CassandraClient.prototype.set_keyspace = function(keyspace){
this.send_set_keyspace(keyspace)
this.recv_set_keyspace()
}

CassandraClient.prototype.send_set_keyspace = function(keyspace){
this.output.writeMessageBegin('set_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_set_keyspace_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_set_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_set_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
return
}
CassandraClient.prototype.get = function(key,column_path,consistency_level){
this.send_get(key, column_path, consistency_level)
return this.recv_get()
}

CassandraClient.prototype.send_get = function(key,column_path,consistency_level){
this.output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_args()
args.key = key
args.column_path = column_path
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.nfe) {
  throw result.nfe
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get failed: unknown result"
}
CassandraClient.prototype.get_slice = function(key,column_parent,predicate,consistency_level){
this.send_get_slice(key, column_parent, predicate, consistency_level)
return this.recv_get_slice()
}

CassandraClient.prototype.send_get_slice = function(key,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('get_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_slice_args()
args.key = key
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_slice failed: unknown result"
}
CassandraClient.prototype.multiget_slice = function(keys,column_parent,predicate,consistency_level){
this.send_multiget_slice(keys, column_parent, predicate, consistency_level)
return this.recv_multiget_slice()
}

CassandraClient.prototype.send_multiget_slice = function(keys,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('multiget_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_slice_args()
args.keys = keys
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget_slice failed: unknown result"
}
CassandraClient.prototype.get_count = function(key,column_parent,predicate,consistency_level){
this.send_get_count(key, column_parent, predicate, consistency_level)
return this.recv_get_count()
}

CassandraClient.prototype.send_get_count = function(key,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('get_count', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_count_args()
args.key = key
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_count = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_count_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_count failed: unknown result"
}
CassandraClient.prototype.multiget_count = function(keyspace,keys,column_parent,predicate,consistency_level){
this.send_multiget_count(keyspace, keys, column_parent, predicate, consistency_level)
return this.recv_multiget_count()
}

CassandraClient.prototype.send_multiget_count = function(keyspace,keys,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('multiget_count', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_count_args()
args.keyspace = keyspace
args.keys = keys
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget_count = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_count_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget_count failed: unknown result"
}
CassandraClient.prototype.get_range_slices = function(column_parent,predicate,range,consistency_level){
this.send_get_range_slices(column_parent, predicate, range, consistency_level)
return this.recv_get_range_slices()
}

CassandraClient.prototype.send_get_range_slices = function(column_parent,predicate,range,consistency_level){
this.output.writeMessageBegin('get_range_slices', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_range_slices_args()
args.column_parent = column_parent
args.predicate = predicate
args.range = range
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_range_slices = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_range_slices_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_range_slices failed: unknown result"
}
CassandraClient.prototype.insert = function(key,column_parent,column,consistency_level){
this.send_insert(key, column_parent, column, consistency_level)
this.recv_insert()
}

CassandraClient.prototype.send_insert = function(key,column_parent,column,consistency_level){
this.output.writeMessageBegin('insert', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_insert_args()
args.key = key
args.column_parent = column_parent
args.column = column
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_insert = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_insert_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.remove = function(key,column_path,clock,consistency_level){
this.send_remove(key, column_path, clock, consistency_level)
this.recv_remove()
}

CassandraClient.prototype.send_remove = function(key,column_path,clock,consistency_level){
this.output.writeMessageBegin('remove', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_remove_args()
args.key = key
args.column_path = column_path
args.clock = clock
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_remove = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_remove_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.batch_mutate = function(mutation_map,consistency_level){
this.send_batch_mutate(mutation_map, consistency_level)
this.recv_batch_mutate()
}

CassandraClient.prototype.send_batch_mutate = function(mutation_map,consistency_level){
this.output.writeMessageBegin('batch_mutate', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_batch_mutate_args()
args.mutation_map = mutation_map
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_batch_mutate = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_batch_mutate_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.truncate = function(keyspace,cfname){
this.send_truncate(keyspace, cfname)
this.recv_truncate()
}

CassandraClient.prototype.send_truncate = function(keyspace,cfname){
this.output.writeMessageBegin('truncate', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_truncate_args()
args.keyspace = keyspace
args.cfname = cfname
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_truncate = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_truncate_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
return
}
CassandraClient.prototype.check_schema_agreement = function(){
this.send_check_schema_agreement()
return this.recv_check_schema_agreement()
}

CassandraClient.prototype.send_check_schema_agreement = function(){
this.output.writeMessageBegin('check_schema_agreement', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_check_schema_agreement_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_check_schema_agreement = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_check_schema_agreement_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "check_schema_agreement failed: unknown result"
}
CassandraClient.prototype.describe_keyspaces = function(){
this.send_describe_keyspaces()
return this.recv_describe_keyspaces()
}

CassandraClient.prototype.send_describe_keyspaces = function(){
this.output.writeMessageBegin('describe_keyspaces', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_keyspaces_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_keyspaces = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_keyspaces_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_keyspaces failed: unknown result"
}
CassandraClient.prototype.describe_cluster_name = function(){
this.send_describe_cluster_name()
return this.recv_describe_cluster_name()
}

CassandraClient.prototype.send_describe_cluster_name = function(){
this.output.writeMessageBegin('describe_cluster_name', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_cluster_name_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_cluster_name = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_cluster_name_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_cluster_name failed: unknown result"
}
CassandraClient.prototype.describe_version = function(){
this.send_describe_version()
return this.recv_describe_version()
}

CassandraClient.prototype.send_describe_version = function(){
this.output.writeMessageBegin('describe_version', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_version_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_version = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_version_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_version failed: unknown result"
}
CassandraClient.prototype.describe_ring = function(keyspace){
this.send_describe_ring(keyspace)
return this.recv_describe_ring()
}

CassandraClient.prototype.send_describe_ring = function(keyspace){
this.output.writeMessageBegin('describe_ring', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_ring_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_ring = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_ring_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "describe_ring failed: unknown result"
}
CassandraClient.prototype.describe_keyspace = function(keyspace){
this.send_describe_keyspace(keyspace)
return this.recv_describe_keyspace()
}

CassandraClient.prototype.send_describe_keyspace = function(keyspace){
this.output.writeMessageBegin('describe_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_keyspace_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.nfe) {
  throw result.nfe
}
throw "describe_keyspace failed: unknown result"
}
CassandraClient.prototype.describe_splits = function(keyspace,cfName,start_token,end_token,keys_per_split){
this.send_describe_splits(keyspace, cfName, start_token, end_token, keys_per_split)
return this.recv_describe_splits()
}

CassandraClient.prototype.send_describe_splits = function(keyspace,cfName,start_token,end_token,keys_per_split){
this.output.writeMessageBegin('describe_splits', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_splits_args()
args.keyspace = keyspace
args.cfName = cfName
args.start_token = start_token
args.end_token = end_token
args.keys_per_split = keys_per_split
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_splits = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_splits_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_splits failed: unknown result"
}
CassandraClient.prototype.system_add_column_family = function(cf_def){
this.send_system_add_column_family(cf_def)
return this.recv_system_add_column_family()
}

CassandraClient.prototype.send_system_add_column_family = function(cf_def){
this.output.writeMessageBegin('system_add_column_family', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_system_add_column_family_args()
args.cf_def = cf_def
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_system_add_column_family = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_system_add_column_family_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "system_add_column_family failed: unknown result"
}
CassandraClient.prototype.system_drop_column_family = function(keyspace,column_family){
this.send_system_drop_column_family(keyspace, column_family)
return this.recv_system_drop_column_family()
}

CassandraClient.prototype.send_system_drop_column_family = function(keyspace,column_family){
this.output.writeMessageBegin('system_drop_column_family', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_system_drop_column_family_args()
args.keyspace = keyspace
args.column_family = column_family
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_system_drop_column_family = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_system_drop_column_family_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "system_drop_column_family failed: unknown result"
}
CassandraClient.prototype.system_rename_column_family = function(keyspace,old_name,new_name){
this.send_system_rename_column_family(keyspace, old_name, new_name)
return this.recv_system_rename_column_family()
}

CassandraClient.prototype.send_system_rename_column_family = function(keyspace,old_name,new_name){
this.output.writeMessageBegin('system_rename_column_family', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_system_rename_column_family_args()
args.keyspace = keyspace
args.old_name = old_name
args.new_name = new_name
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_system_rename_column_family = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_system_rename_column_family_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "system_rename_column_family failed: unknown result"
}
CassandraClient.prototype.system_add_keyspace = function(ks_def){
this.send_system_add_keyspace(ks_def)
return this.recv_system_add_keyspace()
}

CassandraClient.prototype.send_system_add_keyspace = function(ks_def){
this.output.writeMessageBegin('system_add_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_system_add_keyspace_args()
args.ks_def = ks_def
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_system_add_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_system_add_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "system_add_keyspace failed: unknown result"
}
CassandraClient.prototype.system_drop_keyspace = function(keyspace){
this.send_system_drop_keyspace(keyspace)
return this.recv_system_drop_keyspace()
}

CassandraClient.prototype.send_system_drop_keyspace = function(keyspace){
this.output.writeMessageBegin('system_drop_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_system_drop_keyspace_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_system_drop_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_system_drop_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "system_drop_keyspace failed: unknown result"
}
CassandraClient.prototype.system_rename_keyspace = function(old_name,new_name){
this.send_system_rename_keyspace(old_name, new_name)
return this.recv_system_rename_keyspace()
}

CassandraClient.prototype.send_system_rename_keyspace = function(old_name,new_name){
this.output.writeMessageBegin('system_rename_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_system_rename_keyspace_args()
args.old_name = old_name
args.new_name = new_name
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_system_rename_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_system_rename_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "system_rename_keyspace failed: unknown result"
}
